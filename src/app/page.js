"use client"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Deals from './componend/Deals'
import Header from './componend/Header'
import HeroBanner from './componend/HeroBanner'
import ProductFeed from './componend/ProductFeed'

export default function Home() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <main className="">
      <Header/>

      <HeroBanner/>

      <Deals/>

      <ProductFeed/>
    </main>
  )
}
