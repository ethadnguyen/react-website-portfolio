import { Container, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import AppDrawer from './components/drawer';
import Footer from './components/footer';
import Products from './components/products';
import Promotions from './components/promotions';
import SearchBox from './components/search';
import { UIProvider } from './context/ui';
import theme from './styles/theme';
function App() {
  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth='xl' sx={{ background: '#fff' }}>
        <Stack />
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
