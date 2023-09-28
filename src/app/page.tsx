import Criteria from '@/components/Criteria/Criteria'
import Faq from '@/components/FAQ/Faq'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction/Introduction'
import Overview from '@/components/Overview/Overview'
import Policy from '@/components/Policy/Policy'
import Reward from '@/components/Rewards/Reward'
import Rules from '@/components/Rules/Rules'

import Sponsors from '@/components/Sponsors/sponsors'
import Image from 'next/image'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>

    <Header />

    <Introduction />

    <Overview  />

    <Rules />

    <Criteria />

    <Faq />

    <Reward />

    <Sponsors />

    <Policy />

    <Footer />
    </div>
  )
}
