import { Container } from '@chakra-ui/react'
import GoBackLink from '../atoms/GoBackLink'
import CheckoutForm from '../organisms/CheckoutForm'

const CheckoutPage = () => {
  return (
   <Container maxW="container.lg" px={6} as="main" id="main">
      <GoBackLink />
      <CheckoutForm />
    </Container>
  )
}

export default CheckoutPage