'use client'

import Link from "next/link"
import { Md10K, MdCall, MdCallMade, MdChat, MdChatBubble, MdCode, MdFacebook, MdPermPhoneMsg } from "react-icons/md"

const Error = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen w-auto">
      <h1 className="font-bold text-5xl m-5">Error</h1>
      <h1 className="text-9xl gap-5"> 😗</h1>
      <h1 className="text-7xl">👉👈</h1>
      <h3 className="m-10 text-xl">Please remind me to fix these bugs on </h3>
      <div className="flex gap-10">
        <Link className="hover:scale-150 hover:text-red-700" href={'https://www.linkedin.com/in/ramanand-rv/'}>
          <MdPermPhoneMsg size={50} />
        </Link>
        <Link className="hover:scale-150 hover:bg-green-700 hover:rounded-lg" href={'https://www.github.com/ramanand-rv'}>
          <MdCode size={50} />
        </Link>
        <Link className="hover:scale-150 hover:text-blue-700" href={'https://www.twitter.com/pyaracetamol0mg'}>
          <MdChat size={50} />
        </Link>
      </div>
    </div>
  )
}

export default Error