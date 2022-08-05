import { IconButton, Slide } from '@mui/material';
import React from 'react';
import { useUIContext } from '../../context/ui';
import { SearchBoxContainer, SearchField } from '../../styles/search';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const SearchBox = () => {
  const { showSearchBox, setShowSearchBox } = useUIContext();
  return (
    <Slide direction='down' in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color='secondary'
          variant='standard'
          fullWidth
          placeholder='search...'
        />
        <IconButton>
          <SearchIcon
            sx={{ fontSize: { sx: '2rem', md: '3rem' } }}
            color='secondary'
          />
        </IconButton>
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => setShowSearchBox(false)}
        >
          <CloseIcon sx={{ fontSize: '4rem' }} color='secondary' />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
};

export default SearchBox;
