import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './components/HeroSection'

export default function Home() {
  return (
   <Herosection title={"Lets Watch Movie Together"} imageUrl={"./about1.svg"}/>
  )
}
