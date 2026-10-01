import type {StaticImageData} from "next/image"

import badgeEthical from "@/assets/icons/badge-ethical.png"
import badgeReviews from "@/assets/icons/badge-reviews.png"
import badgeShipping from "@/assets/icons/badge-shipping.png"
import collectionDesktop from "@/assets/images/collection-desktop.png"
import collectionMobile from "@/assets/images/collection-mobile.png"
import payments from "@/assets/images/payments.png"
import {ctaContent, type CtaContent} from "./cta"

export type Badge = {
  id: string
  icon: StaticImageData
  text: string
}

export type CollectionContent = {
  title: string
  text: string
  mobileText: string
  mobileImage: StaticImageData
  desktopImage: StaticImageData
  imageAlt: string
  payments: StaticImageData
  paymentsAlt: string
  badges: Badge[]
  cta: CtaContent
}

export const collectionContent: CollectionContent = {
  title: "Find something you love.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  mobileText: "Click below to browse our collection!",
  mobileImage: collectionMobile,
  desktopImage: collectionDesktop,
  imageAlt:
    "Three women in loungewear: a green pajama set, a yellow patterned robe and a grey knit set",
  payments,
  paymentsAlt:
    "Ships in 1-2 days. Accepted payments: Amex, Apple Pay, Diners, Discover, Google Pay, Mastercard, PayPal, Shop Pay and Visa",
  badges: [
    {
      id: "shipping",
      icon: badgeShipping,
      text: "FREE Shipping on Orders over $200"
    },
    {
      id: "reviews",
      icon: badgeReviews,
      text: "Over 500+ 5 Star Reviews Online"
    },
    {id: "ethical", icon: badgeEthical, text: "Made ethically and responsibly."}
  ],
  cta: ctaContent
}
