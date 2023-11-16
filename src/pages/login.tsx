
import { Inter } from 'next/font/google'

import Login from '../components/Login/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='border border-solid border-gray-500 items-center my-[250px] box-border' >
      < Login/>
    </div>
  )
}
