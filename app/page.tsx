import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='min-h-screen min-w-full flex justify-center
        border border-gray-400 border-opacity-0 hover:border-opacity-100 transition duration-300
        fixed'>
        <div className=" w-screen h-screen relative ">
          <Image src={'/home-bg.png'} fill alt='bg-image'
          className='opacity-50 pointer-events-none ' />
        </div>

        <div className="absolute flex justify-center w-full h-max">
          <h1 className=' fixed pointer-events-none flex justify-center text-8xl  font-bold text-purple-700 mix-blend-screen mt-56
          opacity-70 animate-bounce blur-sm' >DATA DUNGEON</h1>
        </div>

        <div className="absolute h-screen">

          <Link href={'https://data-dungeon.vercel.app/login'}>
            <button
              type="button"
              className=" animate-pulse inline-block rounded-full border-8 border-purple-700 border-opacity-70 px-6 pb-[6px] pt-2 text-2xl font-medium uppercase leading-normal transition duration-200 ease-in-out hover:border-indigo-700  hover:bg-slate-700 dark:hover:bg-opacity-10 mt-96 z-80"
              data-te-ripple-init>
              Login Here
            </button>
          </Link>
        </div>

      </div>
      <div className="min-h-screen min-w-full flex items-center justify-center
      bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950
      ">

      </div>
    </>
  )
}
