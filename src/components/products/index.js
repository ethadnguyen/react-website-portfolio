import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import { products } from '../../data';
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Box display='flex' justifyContent='center' sx={{ p: 4 }}>
        <Typography>Our Products</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent='center'
        sx={{ margin: '20px 4px 10px 4px' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default Products;
