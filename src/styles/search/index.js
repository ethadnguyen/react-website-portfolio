import { TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Colors } from '../theme';

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99,
  opacity: 0.9,
  background: Colors.primary,
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  '.MuiInputLabel-root': {
    color: Colors.secondary,
  },
  'MuiInput-root': {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    color: Colors.secondary,
  },
  '.MuiInput-root::before': {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: '0 0 0 40px',
}));