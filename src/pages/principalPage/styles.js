import triangle from '../../images/bg-triangle.svg';

const container = {
  position: 'relative',
  backgroundImage: `url(${triangle})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  padding: '30px',
  height: {
    xs: '325px',
    sm: '400px',
  },
  display: 'grid',
  justifyContent: 'center',
  marginTop: '4rem',
  width: {
    xs: '330px',
    sm: '550px',
  },
};

const icon__btn = {
  border: { xs: '14px solid', sm: '20px solid' },
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  width: { xs: '9rem', sm: '11.5rem' },
  height: { xs: '9rem', sm: '11.5rem' },
  borderRadius: '50%',
  position: 'absolute',
  top: '-5%',
  background: 'white',

  '&:hover': {
    backgroundColor: 'white',
  },
};

const actions = {
  scissors: { ...icon__btn, border: { xs: '14px solid hsl(39, 89%, 49%)', sm: '20px solid hsl(39, 89%, 49%)' }, left: { xs: '64%', sm: '58%' } },
  paper: { ...icon__btn, border: { xs: '14px solid hsl(230, 89%, 62%)', sm: '20px solid hsl(230, 89%, 62%)' }, left: { xs: '-8%', sm: '11%' } },
  rock: {
    ...icon__btn,
    border: { xs: '14px solid hsl(349, 71%, 52%)', sm: '20px solid hsl(349, 71%, 52%)' },
    left: '50%',
    top: '72%',
    transform: 'translate(-50%, -50%)',
  },
};

export { container, actions };
