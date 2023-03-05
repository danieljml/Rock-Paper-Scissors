import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Popup from './components/popup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Game from './pages/principalPage';
import Battle from './pages/battlePage';
import { Button } from '@mui/material';
import CustomeButton from './components/button';
import { container__btn } from './components/button/styles';
import { rightSide__number } from './components/header/styles';

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'flex-start', md: 'center' },
  alignItems: 'center',
  height: '100%',
  rowGap: { xs: '20px', md: 'unset' },
};

const Rules = ({ align, title, handlerRules }) => (
  <CustomeButton align={align}>
    <Button onClick={handlerRules} variant="outlined" sx={container__btn}>
      {title}
    </Button>
  </CustomeButton>
);

function App() {
  const [user, setUser] = useState(null);
  const [computer, setComputer] = useState(null);
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(Number(localStorage.getItem('score')) || 0);
  const [loading, setLoading] = useState(true);

  const handlerRules = () => {
    setOpen(true);
  };

  const handleCloseRules = () => {
    setOpen(false);
  };

  const title = 'RULES';
  const rest = { open, user, setUser, computer, setComputer, setLoading };
  return (
    <Box sx={container}>
      <Header>
        <Typography align="center" sx={rightSide__number}>
          {score}
        </Typography>
      </Header>
      {loading ? (
        <Game {...rest}>
          <Rules align={'center'} title={title} handlerRules={handlerRules} />
          <Popup open={open} handleCloseRules={handleCloseRules} />
        </Game>
      ) : (
        <Battle {...rest} score={score} setScore={setScore}>
          <Rules align={'flex-end'} title={title} handlerRules={handlerRules} />
          <Popup open={open} handleCloseRules={handleCloseRules} />
        </Battle>
      )}
    </Box>
  );
}

export default App;
