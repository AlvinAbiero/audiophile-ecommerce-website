import { VStack } from '@chakra-ui/react'

import CategoryPageItem from '../molecules/CategoryPageItem'
import { Product } from 'models/Product'

import React from 'react'

const ProductList: React.FC<{products: Product[]}> = ({
    products,
}) => {
  return (
     <VStack
      mt={{ base: '4rem' }}
      spacing={{ base: '7.5rem' }}
      mb={{ base: '7.5rem' }}
    >
      {products.map(product => (
        <CategoryPageItem key={product.id} {...product} />
      ))}
    </VStack>
  )
}

export default ProductList