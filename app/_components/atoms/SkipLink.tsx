import {Button} from '@chakra-ui/react'

function SkipLink() {
  return (
       <Button
      as="a"
      href="#main"
      position="absolute"
      left="1rem"
      top="6.25rem"
      zIndex="skipLink"
      transform="translateX(-200%)"
      _focus={{
        transform: 'translateX(0)',
      }}
      transition="transform 0.3s ease-out"
    >
      Skip to content
    </Button>
  )
}

export default SkipLink