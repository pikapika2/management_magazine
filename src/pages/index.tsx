import { Box, chakra } from '@chakra-ui/react'
import React from 'react'

export default function HomePage() {
  return (
    <div>
	<h1>hello world</h1>
    </div>
    <Box>
      <chakra.h1 color="tomato">Hello world</chakra.h1>
    </Box>
  )
}
