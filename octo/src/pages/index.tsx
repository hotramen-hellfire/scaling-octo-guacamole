import Abouts from '@/components/About/Abouts'
import Projects from '@/components/Projects/Projects'
import School from '@/components/School/School'
import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { dataName } from '../../data';
import Quote from '@/components/Quote/Quote'
export default function Home() {
  const [q1, setq1] = useState({
    text: "",
    author: ""
  })
  const [q2, setq2] = useState({
    text: "",
    author: ""
  })
  const [q3, setq3] = useState({
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
          text: "",
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
          text: "",
          author: dataName
        })
      }
    }
    async function updateQuote3() {
      const response = await fetch("https://api.quotable.io/random?tags=humorous");
      const data = await response.json();
      if (response.ok) {
        setq3({
          text: data.content,
          author: data.author
        })
      } else {
        setq3({
          text: "",
          author: dataName
        })
      }
    }
    if (!q1.text) updateQuote1();
    if (!q2.text) updateQuote2();
    if (!q3.text) updateQuote3();

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
        <Quote text={q1.text} author={q1.author} />
        <Projects />
        <Quote text={q2.text} author={q2.author} />
        <School />
        <Quote text={q3.text} author={q3.author} />
        <Abouts />
      </Stack>
    </>
  )
}
