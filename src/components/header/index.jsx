import { memo } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { container, container__rightSide, container__leftSide, CustomePaper, leftSide__title, rightSide__score } from './styles';

const Header = ({ children }) => {
  return (
    <Grid container sx={container} maxWidth="670px">
      <Grid item xs={6} sx={container__leftSide}>
        <Typography sx={leftSide__title}>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </Typography>
      </Grid>
      <Grid item xs={6} sx={container__rightSide}>
        <CustomePaper>
          <Typography align="center" sx={rightSide__score}>
            SCORE
          </Typography>
          {children}
        </CustomePaper>
      </Grid>
    </Grid>
  );
};

export default memo(Header);
