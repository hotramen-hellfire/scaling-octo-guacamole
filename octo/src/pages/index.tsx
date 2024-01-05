import Abouts from '@/components/About/Abouts'
import Projects from '@/components/Projects/Projects'
import { Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>himanshu.gg</title>
        <link rel="icon" href="/logo192.png" />
      </Head>
      <Stack
        justify={'center'}
        align={'center'}
        m={9}
        flexDirection={'column'}
      >
        <Abouts />
        <Projects />
      </Stack>

    </>
  )
}
