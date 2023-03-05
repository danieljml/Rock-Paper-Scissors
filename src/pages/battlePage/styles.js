const btn = {
  border: { xs: '16px solid', md: '30px solid' },
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  width: { xs: '10rem', md: '18.5rem' },
  height: { xs: '10rem', md: '18.5rem' },
  borderRadius: '50%',
  background: 'white',

  '&:hover': {
    backgroundColor: 'white',
  },
};

const container = {
  height: '500px',
  width: { md: '900px' },
  padding: { md: '20px' },
  margin: '10px 0',
  justifyContent: 'center',
};

const container__item = {
  display: { xs: 'flex', md: 'grid' },
  justifyItems: { md: 'center' },
  alignItems: { xs: 'center' },
  flexDirection: { xs: 'column-reverse' },
  rowGap: '20px',
};

const container__item__btn = {
  display: { xs: 'flex', md: 'flex' },
  flexDirection: { xs: 'column' },
  alignItems: { md: 'center' },
  justifyContent: { xs: 'space-evenly', md: 'center' },
  order: { xs: '1', md: 'unset' },
  marginTop: { xs: '1rem', md: 'unset' },
};

const item__btn = {
  padding: { xs: '8px 30px', md: '8px 60px', lg: '8px 60px' },
  background: 'white',
  fontSize: '1.2rem',
  color: 'black',
  '&:hover': {
    backgroundColor: 'white',
  },
};

const title__computer = { fontSize: { sm: '1rem', md: '1.5rem' }, fontWeight: '600', letterSpacing: '2px' };

const title__selection = { fontSize: { sm: '1rem', md: '1.5rem' }, fontWeight: '600', letterSpacing: '2px' };

const title__winner = { padding: { xs: '4px 15px', md: '10px 20px' }, fontSize: { xs: '3rem' }, fontWeight: '700', letterSpacing: '2px' };

const actions = {
  scissors: { border: { xs: '16px solid hsl(39, 89%, 49%)', md: '30px solid hsl(39, 89%, 49%)' } },
  paper: { border: { xs: '16px solid hsl(230, 89%, 62%)', md: '30px solid hsl(230, 89%, 62%)' } },
  rock: {
    border: { xs: '16px solid hsl(349, 71%, 52%)', md: '30px solid hsl(349, 71%, 52%)' },
  },
};

export { btn, container, container__item, container__item__btn, item__btn, title__computer, title__selection, title__winner, actions };
