import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const container = {
  backgroundColor: 'unset',
  justifyContent: 'center',
  outline: '2.5px solid hsl(217, 16%, 45%)',
  borderRadius: '15px',
  padding: '18px',
};

const container__rightSide = { padding: 'unset', display: 'flex', justifyContent: 'flex-end' };

const container__leftSide = { padding: 'unset' };

const CustomePaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 45px',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    padding: '0 35px',
  },
}));

const leftSide__title = {
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: {
    xs: '1.5rem',
    md: '2.5rem',
  },
  lineHeight: '0.8',
  padding: '10px',
};
const rightSide__number = {
  lineHeight: '1',
  fontSize: {
    xs: '3rem',
    md: '4rem',
  },
  fontWeight: '700',
  color: 'hsl(229, 25%, 31%)',
};

const rightSide__score = {
  fontWeight: '600',
  lineHeight: 'unset',
  fontSize: {
    xs: '0.5rem',
    md: '1rem',
  },
  letterSpacing: '1px',
  color: 'hsl(229, 64%, 46%)',
};

export { container, container__rightSide, container__leftSide, CustomePaper, leftSide__title, rightSide__number, rightSide__score };
