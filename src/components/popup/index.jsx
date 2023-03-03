import { memo } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import rules from '../../images/image-rules.svg';
import CloseIcon from '@mui/icons-material/Close';

const Popup = ({ open, handleCloseRules }) => {
  return (
    <>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '10px',
          },
        }}
        open={open}
        onClose={handleCloseRules}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 15px' }}>
          <Typography sx={{ fontSize: '30px', fontWeight: '700', paddingLeft: '20px' }}>RULES</Typography>
          <IconButton sx={{ color: 'grey' }} onClick={handleCloseRules}>
            <CloseIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
        <Box sx={{ padding: '20px 45px 25px 45px' }}>
          <img src={rules} alt="rules" />
        </Box>
      </Dialog>
    </>
  );
};

export default memo(Popup);
