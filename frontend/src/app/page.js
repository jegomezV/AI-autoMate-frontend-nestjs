import Image from 'next/image'
import Link from 'next/link'

import TextEncrypted from './components/textEncrypted'

export default function Home() {

  const data = [
    {
      link: '/home/signin',
      textButton: 'Sign in',
      text: 'Welcome Back, Sign in to your account here.'
    },
    {
      link: '/home/signup',
      textButton: 'Sing up',
      text: 'Learn how to leverage automation to optimize your workflow and save time now!'
    },
    {
      link: 'home/about',
      textButton: 'About',
      text: 'Learn about autoMate>>'
    },
  ]

  const LinkElement = ({ data }) => {
    return (
      <Link
        key={data.text}
        href={data.link}
        className="group rounded-lg text-white hover:text-black border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {data.textButton}
          <span className="inline-block transition-transform translate-x-2 group-hover:translate-x-4 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm hover:text-black`}>
          {data.text}
        </p>
      </Link>
    )
  }

  return (

    <main className="flex min-h-screen flex-col items-center justify-center ">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
        <p className="fixed left-0 top-0 w-full text-center border-b border-gray-300 text-white bg-gradient-to-l from-black from-65% to-violet-950 pb-6 pt-8 backdrop-blur-2xl  lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
        <TextEncrypted text="A software designed to automate data filtering, sorting and organizing processes ->" />  
        </p>
      </div>

        <Image
          className="relative -translate-y-3 drop-shadow-[0_0_0.1rem_#ffffff70]"
          src="/logo_deff.png"
          alt="autoMate>> Logo"
          width={350}
          height={37}
          priority
        />

        <div className="mb-32 grid text-center gap-4 sm:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {data.map((datas) => (
            <LinkElement data={datas} />
          ))}
        </div>

    </main>
  )
}
