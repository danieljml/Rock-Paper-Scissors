/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef } from 'react';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import { IconButton, Button, Grid, Typography } from '@mui/material';
import { btn, container, container__item, item__btn, title__computer, title__selection, title__winner } from './styles';

const selectionType = ({ name, color, img }) => (
  <IconButton sx={{ ...btn, borderColor: color }} name={name}>
    <img style={{ width: '7rem', height: '7.5rem' }} src={img} alt={name} />
  </IconButton>
);

const Battle = ({ score, setScore, selection, setSelection }) => {
  const btn = useRef();
  const actions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  const seleccionTypes = {
    rock: { color: 'hsl(39, 89%, 49%)', name: 'rock', img: rock },
    paper: { color: 'hsl(230, 89%, 62%)', name: 'paper', img: paper },
    scissors: { color: 'hsl(349, 71%, 52%)', name: 'scissors', img: scissors },
  };

  const randomSelection = () => Object.values(actions).at(Math.round(Math.random() * 2));

  const computer = useMemo(() => randomSelection(), []);

  useEffect(() => {
    if (actions[selection] === computer) {
      setScore(score + 1);
      localStorage.setItem('score', Number(score + 1));
      return;
    }
    if (actions[computer] === selection && score) {
      setScore(score - 1);
      localStorage.setItem('score', Number(score - 1));
    }
  }, []);

  const handlerWinner = () => {
    if (selection === computer) {
      return 'ITS A TIE';
    }
    if (actions[selection] === computer) {
      return 'YOU WIN';
    }
    if (actions[computer] === selection) {
      console.log(btn);
      return 'YOU LOSE';
    }
  };

  const handlerReset = () => {
    setSelection(null);
  };

  return (
    <>
      <Grid container sx={container}>
        <Grid item xs={4} sx={{ ...container__item, alignItems: 'flex-end' }}>
          <Typography sx={title__selection}>YOU PICKED</Typography>
          {selectionType(seleccionTypes[selection])}
        </Grid>
        <Grid item xs={4} sx={{ ...container__item, justifyContent: 'center' }}>
          <Typography sx={title__winner}>{handlerWinner()}</Typography>
          <Button ref={btn} sx={item__btn} onClick={handlerReset}>
            PLAY AGAIN
          </Button>
        </Grid>
        <Grid item xs={4} sx={{ ...container__item, alignItems: 'flex-start' }}>
          <Typography sx={title__computer}>THE HOUSE PICKED</Typography>
          {selectionType(seleccionTypes[computer])}
        </Grid>
      </Grid>
    </>
  );
};

export default Battle;
