import Abouts from '@/components/About/Abouts'
import Projects from '@/components/Projects/Projects'
import School from '@/components/School/School'
import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { dataName } from '../../data';
export default function Home() {
  const [q1, setq1] = useState({
    text: "",
    author: ""
  })
  const [q2, setq2] = useState({
    text: "",
    author: ""
  })
  useEffect(() => {
    async function updateQuote1() {
      const response = await fetch("https://api.quotable.io/random?tags=humorous");
      const data = await response.json();
      if (response.ok) {
        setq1({
          text: data.content,
          author: data.author
        })
      } else {
        setq1({
          text: "An error occured while fetching the quote. . .",
          author: dataName
        })
      }
    }
    async function updateQuote2() {
      const response = await fetch("https://api.quotable.io/random?tags=humorous");
      const data = await response.json();
      if (response.ok) {
        setq2({
          text: data.content,
          author: data.author
        })
      } else {
        setq2({
          text: "Another error occured while fetching the quote. . .",
          author: dataName
        })
      }
    }
    updateQuote1();
    updateQuote2();
  })

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
        <Projects />
        <School />
        <Abouts />
      </Stack>
    </>
  )
}
