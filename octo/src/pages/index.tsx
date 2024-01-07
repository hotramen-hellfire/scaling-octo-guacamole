import Abouts from '@/components/About/Abouts'
import Contacts from '@/components/Contacts/Contacts'
import Projects from '@/components/Projects/Projects'
import Quote from '@/components/Quote/Quote'
import School from '@/components/School/School'
import { Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { dataName } from '../../data'
export default function Home() {
  const [quoteLoading1, setQuoteLoading1] = useState(false);
  const [quoteLoading2, setQuoteLoading2] = useState(false);
  const [quoteLoading3, setQuoteLoading3] = useState(false);
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
      setQuoteLoading1(true);
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
      setQuoteLoading1(false);
    }
    async function updateQuote2() {
      setQuoteLoading2(true);
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
      setQuoteLoading2(false);
    }
    async function updateQuote3() {
      setQuoteLoading3(true);
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
      setQuoteLoading3(false);
    }
    if (!q1.text) updateQuote1();
    if (!q2.text) updateQuote2();
    if (!q3.text) updateQuote3();

  })

  return (
    <>
      <Stack
        justify={'center'}
        align={'center'}
        m={9}
        flexDirection={'column'}
      >
        <Abouts />
        <Quote text={q1.text} author={q1.author} loading={quoteLoading1} />
        <Projects />
        <Quote text={q2.text} author={q2.author} loading={quoteLoading2} />
        <School />
        <Quote text={q3.text} author={q3.author} loading={quoteLoading3} />
        <Contacts />
      </Stack>
    </>
  )
}
