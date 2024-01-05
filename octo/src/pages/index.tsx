import Abouts from '@/components/About/Abouts'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>himanshu.gg</title>
        <link rel="icon" href="/logo192.png" />
      </Head>
      <Flex
        justify={'center'}
        m={9}
      >
        <Abouts />
      </Flex>

    </>
  )
}
