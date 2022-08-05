import { Stack } from '@mui/material';
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from '../../styles/product';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductMeta from './ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useDialogModel } from '../../hooks/useDiaglogModel';
import ProductDetail from '../productdetail';
const SingleProduct = ({ product, matches }) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModel(ProductDetail);
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction='row'>
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color='primary' />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
        <ProductAddToCart variant='contained'>Add to cart</ProductAddToCart>
      </Product>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProduct;
