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

const container = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' };
function App() {
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(Number(localStorage.getItem('score')) || 0);

  const handlerRules = () => {
    setOpen(true);
  };

  const handleCloseRules = () => {
    setOpen(false);
  };

  const title = 'RULES';
  return (
    <Box sx={container}>
      <Header>
        <Typography align="center" sx={rightSide__number}>
          {score}
        </Typography>
      </Header>
      {selection ? (
        <Battle selection={selection} setSelection={setSelection} score={score} setScore={setScore} />
      ) : (
        <Game open={open} setSelection={setSelection}>
          <CustomeButton align={'flex-end'}>
            <Button onClick={handlerRules} variant="outlined" sx={container__btn}>
              {title}
            </Button>
          </CustomeButton>
          <Popup open={open} handleCloseRules={handleCloseRules} />
        </Game>
      )}
    </Box>
  );
}

export default App;
