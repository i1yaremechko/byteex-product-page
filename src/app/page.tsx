import {AnnouncementBar} from '@/components/AnnouncementBar/AnnouncementBar'
import {Collection} from '@/components/Collection/Collection'
import {FanReviews} from '@/components/FanReviews/FanReviews'
import {Faq} from '@/components/Faq/Faq'
import {FounderStory} from '@/components/FounderStory/FounderStory'
import {GreenImpact} from '@/components/GreenImpact/GreenImpact'
import {Hero} from '@/components/Hero/Hero'
import {HowItWorks} from '@/components/HowItWorks/HowItWorks'
import {ProductBenefits} from '@/components/ProductBenefits/ProductBenefits'
import {SiteHeader} from '@/components/SiteHeader/SiteHeader'
import {client} from '@/sanity/client'
import {mapLandingPage} from '@/sanity/landing-page'
import {LANDING_PAGE_QUERY} from '@/sanity/queries'

export const revalidate = 60

export default async function Home() {
  const document = await client.fetch(LANDING_PAGE_QUERY)
  const content = mapLandingPage(document)

  if (!content) return <main>Landing page content has not been published yet.</main>

  return <>
    <AnnouncementBar messages={content.announcements} />
    <SiteHeader />
    <main>
      <Hero content={content.hero} />
      <ProductBenefits {...content.benefits} />
      <FounderStory {...content.founder} />
      <HowItWorks {...content.howItWorks} />
      <FanReviews {...content.fans} />
      <Faq {...content.faq} />
      <GreenImpact {...content.impact} />
      <Collection {...content.collection} />
    </main>
  </>
}
