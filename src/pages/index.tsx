import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Register from '../components/Register/Register'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='border border-solid border-gray-500 items-center my-[250px] box-border' >
      <Register />
    </div>
  )
}
