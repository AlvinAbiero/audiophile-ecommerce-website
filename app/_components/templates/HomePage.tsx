import { Container } from '@chakra-ui/react'

import Hero from '../organisms/Hero'
import CategoriesLinks from '../organisms/CategoriesLinks'
import MainGallery from '../organisms/MainGallery'
import AnimatedBestGear from '../molecules/AnimatedBestGear'

const HomePage = () => {
  return (
      <main id="main">
      <Hero />
      <Container maxW="container.lg" px={6}>
        <CategoriesLinks />
        <MainGallery />
        <AnimatedBestGear />
      </Container>
    </main>
  )
}

export default HomePage