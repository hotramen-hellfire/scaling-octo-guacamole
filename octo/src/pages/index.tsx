import Abouts from '@/components/About/Abouts'
import Projects from '@/components/Projects/Projects'
import { Stack } from '@chakra-ui/react'
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
        {/* <Image
          mt={-70}
          zIndex={0}
          src='https://media4.giphy.com/media/2nUjpQOJRYY5rC0kUw/giphy.gif?cid=ecf05e47aw67xk1726sz16pjbutn23ewk6c9q4rj3z1yupsu&ep=v1_gifs_search&rid=giphy.gif&ct=g'
        /> */}
        <Projects />
        {/* <Image
          mt={-70}
          zIndex={0}
          src='https://media4.giphy.com/media/35MAdPmdmRO3oCmWN0/giphy.gif?cid=ecf05e476e3lhdtru7yvedpji0lhonu57r3dg7ol0wxhshrl&ep=v1_gifs_search&rid=giphy.gif&ct=g'
        /> */}
      </Stack>

    </>
  )
}
