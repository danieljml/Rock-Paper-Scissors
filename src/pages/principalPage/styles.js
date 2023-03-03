import triangle from '../../images/bg-triangle.svg';

const container = {
  position: 'relative',
  backgroundImage: `url(${triangle})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  padding: '30px',
  height: '400px',
  display: 'grid',
  justifyContent: 'center',
  marginTop: '4rem',
};

const icon__btn = {
  border: '20px solid red',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  width: '11.5rem',
  height: '11.5rem',
  borderRadius: '50%',
  position: 'absolute',
  top: '0',
  background: 'white',

  '&:hover': {
    backgroundColor: 'white',
  },
};

const actions = {
  scissors: { ...icon__btn, borderColor: 'hsl(39, 89%, 49%)', left: '54%' },
  paper: { ...icon__btn, borderColor: 'hsl(230, 89%, 62%)', left: '31%' },
  rock: { ...icon__btn, borderColor: 'hsl(349, 71%, 52%)', left: '50%', top: '72%', transform: 'translate(-50%, -50%)' },
};

export { container, actions };
