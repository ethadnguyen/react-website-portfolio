import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { useUIContext } from '../../context/ui';

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant='h4'>My Bags</AppbarHeader>
      <MyList type='row'>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Categories</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>About us</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Contact us</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
