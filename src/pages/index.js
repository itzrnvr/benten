import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Content from '@/components/Content'

const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    heading: "Data Science",
    content: "Tempor aute duis veniam fugiat. Et aliquip aute adipisicing excepteur elit laborum sint ipsum. Officia consequat aliqua deserunt culpa do sint fugiat labore tempor."
  },
  {
    heading: "Data Science",
    content: "Tempor aute duis veniam fugiat. Et aliquip aute adipisicing excepteur elit laborum sint ipsum. Officia consequat aliqua deserunt culpa do sint fugiat labore tempor."
  },
  {
    heading: "Cloud Computing",
    content: "Tempor aute duis veniam fugiat. Et aliquip aute adipisicing excepteur elit laborum sint ipsum. Officia consequat aliqua deserunt culpa do sint fugiat labore tempor."
  },
 
]

export default function Home() {
  return (
    <div>
      <section className='bg-gray-950 h-screen'>
        <Hero/>
        <Content data={data}/>
      </section>
    </div>
  )
}
