/* eslint-disable @typescript-eslint/no-explicit-any -- Sanity query types are generated later with TypeGen. */
import dayNight from '@/assets/icons/day-night.png'
import eco from '@/assets/icons/eco.png'
import waves from '@/assets/icons/waves.png'
import cloud from '@/assets/icons/cloud.png'
import leaf from '@/assets/icons/leaf.png'
import benefitWave from '@/assets/images/benefits/vector-88.png'
import weShip from '@/assets/icons/we-ship.png'
import youEnjoy from '@/assets/icons/you-enjoy.png'
import youSave from '@/assets/icons/you-save.png'
import co2 from '@/assets/icons/co2.png'
import water from '@/assets/icons/water.png'
import energy from '@/assets/icons/energy.png'
import payments from '@/assets/images/payments.png'
import badgeShipping from '@/assets/icons/badge-shipping.png'
import badgeReviews from '@/assets/icons/badge-reviews.png'
import badgeEthical from '@/assets/icons/badge-ethical.png'
import {toStaticImage} from './image'

const heroIcons = [dayNight, eco, waves]
const benefitIcons = [cloud, dayNight, leaf, waves]
const benefitDesktopIcons = [eco, leaf, dayNight]
const stepIcons = {save: youSave, ship: weShip, enjoy: youEnjoy}
const impactIcons = {co2, water, energy}
const badgeIcons = {shipping: badgeShipping, reviews: badgeReviews, ethical: badgeEthical}

const photo = (value: any) => ({src: toStaticImage(value), alt: value.alt, focus: value.focus})

/** Maps CMS data to the existing presentational component contracts. Icons remain local design assets. */
export function mapLandingPage(value: any) {
  if (!value) return null
  return {
    announcements: value.announcements.messages,
    hero: {
      ...value.hero,
      gallery: Object.fromEntries(Object.entries(value.hero.gallery).map(([key, image]) => [key, photo(image)])),
      benefits: value.hero.benefits.map((item: any, index: number) => ({...item, icon: heroIcons[index]})),
      review: {...value.hero.review, avatar: toStaticImage(value.hero.review.avatar)},
      desktopReview: {...value.hero.desktopReview, avatar: toStaticImage(value.hero.desktopReview.avatar)},
      press: {...value.press, logos: value.press.logos.map((logo: any) => ({...logo, src: toStaticImage(logo.src)}))},
    },
    benefits: {
      ...value.benefits, wave: {src: benefitWave, alt: 'Decorative wave'},
      slides: value.benefits.slides.map((slide: any) => ({...slide, src: toStaticImage(slide.src), alt: slide.src.alt})),
      benefits: value.benefits.benefits.map((item: any, index: number) => ({...item, icon: benefitIcons[index], desktopIcon: benefitDesktopIcons[index]})),
    },
    founder: {...value.founder, photos: Object.fromEntries(Object.entries(value.founder.photos).map(([key, image]) => [key, photo(image)]))},
    howItWorks: {...value.howItWorks, steps: value.howItWorks.steps.map((step: any) => ({...step, icon: stepIcons[step.id as keyof typeof stepIcons]}))},
    fans: {...value.fans, photos: value.fans.photos.map((item: any) => ({...item, src: toStaticImage(item.src), alt: item.src.alt}))},
    faq: {...value.faq, photos: Object.fromEntries(Object.entries(value.faq.photos).map(([key, image]) => [key, photo(image)]))},
    impact: {...value.impact, stats: value.impact.stats.map((item: any) => ({...item, icon: impactIcons[item.id as keyof typeof impactIcons]}))},
    collection: {...value.collection, photos: Object.fromEntries(Object.entries(value.collection.photos).map(([key, image]) => [key, photo(image)])), payments, badges: value.collection.badges.map((item: any) => ({...item, icon: badgeIcons[item.id as keyof typeof badgeIcons]}))},
  }
}
