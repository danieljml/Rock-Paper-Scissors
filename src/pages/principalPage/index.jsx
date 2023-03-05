import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import { Container, IconButton } from '@mui/material';
import { container, actions } from './styles';

const selectionType = (img, name) => <img className="action__images" src={img} alt={name} name={name} />;

const seleccionTypes = {
  rock: { name: 'rock', img: rock },
  paper: { name: 'paper', img: paper },
  scissors: { name: 'scissors', img: scissors },
};

const Game = ({ setUser, setComputer, setLoading, children }) => {
  const computerSelection = () => Object.keys(actions).at(Math.round(Math.random() * 2));

  const handlerOptions = e => {
    const res = e.target.name || e.target.getAttribute('name');
    setLoading(false);
    setUser(seleccionTypes[res]);
    setComputer(seleccionTypes[computerSelection()]);
  };

  const actionList = Object.values(seleccionTypes).map(action => {
    return (
      <IconButton key={`key-${action.name}`} onClick={handlerOptions} sx={actions[action.name]} name={action.name}>
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
