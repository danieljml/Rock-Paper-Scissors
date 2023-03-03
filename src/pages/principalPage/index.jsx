import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import { Container, IconButton } from '@mui/material';
import { container, actions } from './styles';

const selectionType = (img, name) => <img style={{ width: '4rem', height: '4.5rem' }} src={img} alt={name} name={name} />;

const Game = ({ setSelection, children }) => {
  const handlerOption = e => {
    const res = e.target.name || e.target.getAttribute('name');
    setSelection(res);
  };

  const actionList = [
    { name: 'scissors', img: scissors },
    { name: 'paper', img: paper },
    { name: 'rock', img: rock },
  ].map(action => {
    return (
      <IconButton key={`key-${action.name}`} onClick={handlerOption} sx={actions[action.name]} name={action.name}>
        {selectionType(action.img, action.name)}
      </IconButton>
    );
  });

  return (
    <>
      <Container sx={container}>{actionList}</Container>
      {children}
    </>
  );
};

export default Game;
