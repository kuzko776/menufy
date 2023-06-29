import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TopNav } from '@/sections/topNav'
import { Hero } from '@/sections/hero'
import { Features } from '@/sections/features'
import { States } from '@/sections/states'
import { Testimonials } from '@/sections/testimonials'
import { Integrations } from '@/sections/integrations'
import { Footer } from '@/sections/footer'
import { CallToAction } from '@/sections/callToAction'
import { Pricing } from '@/sections/pricing'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Template</title>
        <meta name="description" content="MakeTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <Hero />
      <Features />
      <States />
      <Testimonials />
      <CallToAction />
      <Integrations />
      <Pricing />
      <Footer />
    </>
  )
}
