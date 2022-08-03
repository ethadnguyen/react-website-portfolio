import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemButton>Home</ListItemButton>
        <ListItemButton>Categories</ListItemButton>
        <ListItemButton>Products</ListItemButton>
        <ListItemButton>About us</ListItemButton>
        <ListItemButton>Contact us</ListItemButton>
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
