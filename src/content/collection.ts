import type {StaticImageData} from "next/image"

import badgeEthical from "@/assets/icons/badge-ethical.png"
import badgeReviews from "@/assets/icons/badge-reviews.png"
import badgeShipping from "@/assets/icons/badge-shipping.png"
import green from "@/assets/images/collection/green.jpg"
import grey from "@/assets/images/collection/grey.jpg"
import yellow from "@/assets/images/collection/yellow.jpg"
import payments from "@/assets/images/payments.png"
import {ctaContent, type CtaContent} from "./cta"

export type Badge = {
  id: string
  icon: StaticImageData
  text: string
}

export type CollectionPhoto = {
  src: StaticImageData
  alt: string
  /** CSS object-position used when the photo is cropped to fit its frame. */
  focus?: string
}

export type CollectionContent = {
  title: string
  text: string
  /** The mobile design uses a shorter line under the title. */
  mobileText: string
  photos: {
    left: CollectionPhoto
    center: CollectionPhoto
    right: CollectionPhoto
  }
  payments: StaticImageData
  paymentsAlt: string
  badges: Badge[]
  cta: CtaContent
}

// Static content for now. Will be replaced by a headless CMS query.
export const collectionContent: CollectionContent = {
  title: "Find something you love.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  mobileText: "Click below to browse our collection!",
  photos: {
    left: {
      src: green,
      alt: "Woman in a green pajama set stretching",
      focus: "54% 50%"
    },
    center: {
      src: yellow,
      alt: "Woman in a yellow patterned pajama set",
      focus: "55% 50%"
    },
    right: {src: grey, alt: "Woman in a grey knit lounge set", focus: "50% 50%"}
  },
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
