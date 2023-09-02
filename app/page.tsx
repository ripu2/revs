import './globals.css';

import { Hero } from '../components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden px-14">
      <Hero />
    </main>
  )
}
