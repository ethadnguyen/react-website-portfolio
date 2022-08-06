import { Stack, Tooltip } from '@mui/material';
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
import { useState } from 'react';
const SingleProduct = ({ product, matches }) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModel(ProductDetail);

  // const [showOptions, setShowOptions] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowOptions(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowOptions(false);
  // };

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction={matches ? 'row' : 'column'}>
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <Tooltip placement='left' title='share this product'>
                <ShareIcon color='primary' />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement='left' title='Full view'>
                <FitScreenIcon color='primary' />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant='contained'>Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProduct;
