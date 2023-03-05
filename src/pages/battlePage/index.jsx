/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { IconButton, Button, Grid, Typography, Box } from '@mui/material';
import { btn, container, container__item, container__item__btn, item__btn, title__computer, title__selection, title__winner, actions } from './styles';

const selectionType = ({ name, img }) => {
  return (
    <IconButton sx={{ ...btn, ...actions[name] }} name={name}>
      <img className="battleImage" src={img} alt={name} />
    </IconButton>
  );
};

const Battle = ({ score, setScore, user, setUser, computer, setComputer, setLoading, children }) => {
  const btn = useRef();
  const actions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  useEffect(() => {
    if (actions[user.name] === computer.name) {
      setScore(score + 1);
      localStorage.setItem('score', Number(score + 1));
      return;
    }
    if (actions[computer.name] === user.name && score) {
      setScore(score - 1);
      localStorage.setItem('score', Number(score - 1));
    }
  }, []);

  const handlerWinner = () => {
    if (user.name === computer.name) {
      return 'ITS A TIE';
    }
    if (actions[user.name] === computer.name) {
      return 'YOU WIN';
    }
    if (actions[computer.name] === user.name) {
      return 'YOU LOSE';
    }
  };

  const handlerReset = () => {
    setLoading(true);
    setUser(null);
    setComputer(null);
  };

  return (
    <>
      <Grid container sx={container}>
        <Grid item xs={6} md={4} sx={container__item}>
          <Typography sx={title__selection}>YOU PICKED</Typography>
          {selectionType(user)}
        </Grid>
        <Grid item md={4} sx={container__item__btn}>
          <Typography sx={title__winner}>{handlerWinner()}</Typography>
          <Button ref={btn} sx={item__btn} onClick={handlerReset}>
            PLAY AGAIN
          </Button>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>{children}</Box>
        </Grid>
        <Grid item xs={6} md={4} sx={container__item}>
          <Typography sx={title__computer}>THE HOUSE PICKED</Typography>
          {selectionType(computer)}
        </Grid>
      </Grid>
    </>
  );
};

export default Battle;
