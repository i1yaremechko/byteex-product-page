import {defineQuery} from 'next-sanity'

const image = `asset->{url, metadata{dimensions, lqip}}, alt, focus`

export const LANDING_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "landingPage"][0]{
    announcements,
    hero{..., gallery{left{${image}}, center{${image}}, right{${image}}}, review{..., avatar{${image}}}, desktopReview{..., avatar{${image}}}},
    press{..., logos[]{..., src{${image}}}},
    benefits{..., slides[]{..., src{${image}}}},
    founder{..., photos{topLeft{${image}}, center{${image}}, bottomRight{${image}}}},
    howItWorks,
    fans{..., photos[]{..., src{${image}}}},
    faq{..., photos{top{${image}}, center{${image}}, bottom{${image}}}},
    impact,
    collection{..., photos{left{${image}}, center{${image}}, right{${image}}}}
  }
`)
