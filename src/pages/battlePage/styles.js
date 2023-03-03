const btn = {
  border: '30px solid red',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  width: '18.5rem',
  height: '18.5rem',
  borderRadius: '50%',
  background: 'white',

  '&:hover': {
    backgroundColor: 'white',
  },
};

const container = { height: '500px', padding: '20px' };

const container__item = { display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' };

const item__btn = {
  padding: '8px 60px',
  marginTop: '1rem',
  background: 'white',
  fontSize: '1.2rem',
  color: 'black',
  '&:hover': {
    backgroundColor: 'white',
  },
};

const title__computer = { fontSize: '1.5rem', fontWeight: '600', letterSpacing: '2px', paddingLeft: '34px' };

const title__selection = { fontSize: '1.5rem', paddingRight: '84px', fontWeight: '600', letterSpacing: '2px' };

const title__winner = { padding: '10px 20px', fontSize: '3rem', fontWeight: '700', letterSpacing: '2px' };

export { btn, container, container__item, item__btn, title__computer, title__selection, title__winner };
