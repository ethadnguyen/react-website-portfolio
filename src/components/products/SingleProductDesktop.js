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
import { useState } from 'react';
import ProductDetail from '../productdetail';
import { useDialogModel } from '../../hooks/useDiaglogModel';
const SingleProductDesktop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModel(ProductDetail);
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCart show={showOptions} variant='contained'>
            Add to Cart
          </ProductAddToCart>
        )}
        <ProductActionWrapper show={showOptions}>
          <Stack direction={'column'}>
            <ProductActionButton>
              <ShareIcon color='primary' />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
        <ProductMeta product={product} matches={matches} />
      </Product>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductDesktop;
