import { Product } from 'models/Product'
import { Container } from '@chakra-ui/react'

import ProductDetails from '../organisms/ProductDetails'
import GoBackLink from '../atoms/GoBackLink'


const ProductPage: React.FC<{product: Product}> = ({
    product,
}) => {
  return (
    <Container maxW="container.lg" px={6} as="main" id="main">
      <GoBackLink />
      <ProductDetails product={product} />
    </Container>
  )
}

export default ProductPage