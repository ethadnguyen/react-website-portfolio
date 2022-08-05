import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Colors } from '../../styles/theme';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import {
  ProductDetailInfoWrapper,
  ProductDetailWrapper,
} from '../../styles/productdetail';
import { Product, ProductImage } from '../../styles/product';
import { IncDec } from '../ui/incdec';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const slideTransition = (props) => {
  return <Slide direction='down' {...props} />;
};

const ProductDetail = ({ open, onClose, product }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog
      TransitionComponent={slideTransition}
      variant='permanent'
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ background: Colors.secondary }}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
        </ProductDetailWrapper>
        <ProductDetailInfoWrapper>
          <Typography variant='subtitle'>SKU 123</Typography>
          <Typography variant='subtitle'>Availibility: 5 in stock</Typography>
          <Typography variant='h4' sx={{ lineHeight: 2 }}>
            {product.name}
          </Typography>
          <Typography variant='body'>{product.description}</Typography>
          <Box
            sx={{ mt: 4 }}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <IncDec />
            <Button variant='contained'>Add to Cart</Button>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            sx={{ mt: 4, color: Colors.light }}
          >
            <FavoriteIcon sx={{ mr: 2 }} />
            Add to Wishlist
          </Box>
          <Box sx={{ mt: 4, color: Colors.light }}>
            <FacebookIcon />
            <TwitterIcon sx={{ pl: theme.spacing(4) }} />
            <InstagramIcon sx={{ pl: theme.spacing(4) }} />
          </Box>
        </ProductDetailInfoWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
