/* eslint-disable @typescript-eslint/no-unused-vars -- omitted fields are intentionally retained as local design assets. */
import {createClient} from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'
import {createRequire} from 'node:module'

dotenv.config({path: '.env.local'})

const {NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = 'production', SANITY_API_WRITE_TOKEN: token} = process.env
if (!projectId || !token) throw new Error('Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local before seeding.')

const client = createClient({projectId, dataset, token, apiVersion: '2026-10-07', useCdn: false})
const cache = new Map<string, string>()

// `src/content` is also consumed by Next.js, where image imports are handled by
// webpack. Register minimal Node handlers before dynamically loading those same
// modules so this standalone script can read their text and image metadata.
const nodeRequire = createRequire(import.meta.url)
for (const extension of ['.png', '.jpg', '.jpeg']) {
  nodeRequire.extensions[extension] = (module, filename) => {
    module.exports = {src: filename}
  }
}

async function image(relativePath: string, alt: string, focus?: string) {
  let assetId = cache.get(relativePath)
  if (!assetId) {
    const absolutePath = path.resolve(relativePath)
    if (!fs.existsSync(absolutePath)) throw new Error(`Missing image: ${relativePath}`)
    const asset = await client.assets.upload('image', fs.createReadStream(absolutePath), {filename: path.basename(absolutePath)})
    assetId = asset._id
    cache.set(relativePath, assetId)
  }
  return {_type: 'image', asset: {_type: 'reference', _ref: assetId}, alt, ...(focus ? {focus} : {})}
}

const withKeys = <T extends object>(items: T[]) => items.map((item, index) => ({...item, _key: `item-${index}`}))

async function seed() {
  const [
    {benefitsContent},
    {collectionContent},
    {fansContent},
    {faqContent},
    {founderContent},
    {heroContent},
    {howItWorksContent},
    {impactContent},
  ] = await Promise.all([
    import('../src/content/benefits'),
    import('../src/content/collection'),
    import('../src/content/fans'),
    import('../src/content/faq'),
    import('../src/content/founder'),
    import('../src/content/hero'),
    import('../src/content/how-it-works'),
    import('../src/content/impact'),
  ])
  const {announcement: _announcement, press: _press, ...heroSource} = heroContent
  const hero = {
    ...heroSource,
    benefits: withKeys(heroContent.benefits.map(({text}, index) => ({id: `benefit-${index}`, text}))),
    gallery: {
      left: await image('src/assets/images/hero/hero-left.jpg', heroContent.gallery.left.alt, heroContent.gallery.left.focus),
      center: await image('src/assets/images/hero/hero-center.jpg', heroContent.gallery.center.alt),
      right: await image('src/assets/images/hero/hero-right.jpg', heroContent.gallery.right.alt, heroContent.gallery.right.focus),
    },
    review: {...heroContent.review, avatar: await image('src/assets/images/hero/review.png', 'Portrait of Jane S.')},
    desktopReview: {...heroContent.desktopReview, avatar: await image('src/assets/images/hero/review.png', 'Portrait of Amy P.')},
  }

  const logoFiles = ['eco-stylist.png', 'canadian-living.png', 'jillian-harris.png', 'eco-hub.png', 'trend-hunter.png']
  const press = {...heroContent.press, logos: withKeys(await Promise.all(heroContent.press.logos.map(async (logo, index) => ({...logo, src: await image(`src/assets/logos/${logoFiles[index]}`, `${logo.name} logo`)}))))}

  const {wave: _wave, ...benefitsSource} = benefitsContent
  const benefits = {
    ...benefitsSource,
    slides: withKeys(await Promise.all(benefitsContent.slides.map(async (slide, index) => ({...slide, src: await image(index === 1 ? 'src/assets/images/benefits/active-two.jpg' : 'src/assets/images/benefits/active-one.png', slide.alt)})))),
    benefits: withKeys(benefitsContent.benefits.map(({icon: _icon, desktopIcon: _desktopIcon, ...item}, index) => ({...item, id: `benefit-${index}`}))),
  }

  const founder = {...founderContent, paragraphs: founderContent.paragraphs, photos: {
    topLeft: await image('src/assets/images/founder/top-left-mobile.png', founderContent.photos.topLeft.alt, founderContent.photos.topLeft.focus),
    center: await image('src/assets/images/founder/center-mobile.png', founderContent.photos.center.alt),
    bottomRight: await image('src/assets/images/founder/bottom-right-mobile.png', founderContent.photos.bottomRight.alt),
  }}

  const howItWorks = {...howItWorksContent, steps: withKeys(howItWorksContent.steps.map(({icon: _icon, ...step}) => step))}
  const fanFiles = ['yellow-robe.jpg', 'headphones.jpg', 'pillow-couple.jpg', 'slip-dress.jpg', 'reading-sofa.jpg', 'satin-top.jpg', 'couch-laughing.jpg', 'desk-reading.jpg', 'curly-navy.jpg', 'plaid-jacket.jpg', 'grey-set.jpg', 'bedroom-robe.jpg', 'road-yoga.jpg', 'morning-bed.jpg', 'bookshelf.jpg', 'reading-together.jpg', 'stretching.jpg', 'bed-books.jpg', 'kitchen.jpg', 'olive-sweater.jpg', 'breakfast.jpg', 'sofa-friends.jpg']
  const fans = {...fansContent, photos: withKeys(await Promise.all(fansContent.photos.map(async (item, index) => ({...item, src: await image(`src/assets/images/fans/${fanFiles[index]}`, item.alt)})))), reviews: withKeys(fansContent.reviews)}
  const faq = {...faqContent, items: withKeys(faqContent.items), photos: {
    top: await image('src/assets/images/faq/stretching.jpg', faqContent.photos.top.alt), center: await image('src/assets/images/faq/grey-set.jpg', faqContent.photos.center.alt), bottom: await image('src/assets/images/faq/reading.jpg', faqContent.photos.bottom.alt),
  }}
  const impact = {...impactContent, stats: withKeys(impactContent.stats.map(({icon: _icon, ...item}) => item))}
  const {payments: _payments, ...collectionSource} = collectionContent
  const collection = {...collectionSource, photos: {
    left: await image('src/assets/images/collection/green.jpg', collectionContent.photos.left.alt, collectionContent.photos.left.focus), center: await image('src/assets/images/collection/yellow.jpg', collectionContent.photos.center.alt, collectionContent.photos.center.focus), right: await image('src/assets/images/collection/grey.jpg', collectionContent.photos.right.alt, collectionContent.photos.right.focus),
  }, badges: withKeys(collectionContent.badges.map(({icon: _icon, ...item}) => item))}

  await client.createOrReplace({_id: 'landingPage', _type: 'landingPage', announcements: {messages: heroContent.announcement}, hero, press, benefits, founder, howItWorks, fans, faq, impact, collection})
  console.log('Landing page content seeded successfully.')
}

seed().catch((error) => { console.error(error); process.exitCode = 1 })
