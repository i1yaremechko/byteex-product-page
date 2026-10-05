import type {StaticImageData} from "next/image"

import greySet from "@/assets/images/hero/hero-left.jpg"
import reading from "@/assets/images/hero/hero-right.jpg"
import robe from "@/assets/images/hero/hero-center.jpg"
import reviewer from "@/assets/images/hero/review.png"
import dayNight from "@/assets/icons/day-night.png"
import ecoCart from "@/assets/icons/eco.png"
import fabricWaves from "@/assets/icons/waves.png"
import canadianLiving from "@/assets/logos/canadian-living.png"
import ecoStylist from "@/assets/logos/eco-stylist.png"
import jillianHarris from "@/assets/logos/jillian-harris.png"
import ecoHub from "@/assets/logos/eco-hub.png"
import trendHunter from "@/assets/logos/trend-hunter.png"

export type GalleryImage = {
  src: StaticImageData
  alt: string
  focus?: string
}

export type PressLogo = {
  name: string
  src: StaticImageData
  width: number
  desktopWidth: number
  opacity: number
  desktopOnly?: boolean
}

export type HeroReview = {
  name: string
  avatar: StaticImageData
  rating: number
  label: string
  text: string
}

export type HeroContent = {
  announcement: string[]
  title: string
  gallery: {left: GalleryImage; center: GalleryImage; right: GalleryImage}
  benefits: {icon: StaticImageData; text: string}[]
  cta: {label: string; href: string}
  review: HeroReview
  desktopReview: HeroReview
  press: {label: string; logos: PressLogo[]}
}

export const heroContent: HeroContent = {
  announcement: [
    "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)",
    "FREE SHIPPING on orders > $200",
    "easy 45 day return window."
  ],
  title: "Don’t apologize for being comfortable.",
  gallery: {
    left: {
      src: greySet,
      alt: "Woman in a grey knit cardigan and shorts",
      focus: "10% 50%"
    },
    center: {
      src: robe,
      alt: "Woman in a white robe with her hands behind her head"
    },
    right: {
      src: reading,
      alt: "Woman reading a book on a green sofa",
      focus: "30% 50%"
    }
  },
  benefits: [
    {
      icon: dayNight,
      text: "Beautiful, comfortable loungewear for day or night."
    },
    {
      icon: ecoCart,
      text: "No wasteful extras, like tags or plastic packaging."
    },
    {
      icon: fabricWaves,
      text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt."
    }
  ],
  cta: {label: "Customize Your Outfit", href: "#collection"},
  review: {
    name: "Jane, S.",
    avatar: reviewer,
    rating: 5,
    label: "One of 500+ 5 Star Reviews Online",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo."
  },
  desktopReview: {
    name: "Amy P.",
    avatar: reviewer,
    rating: 5,
    label: "One of 500+ 5 Star Reviews Online",
    text: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them."
  },
  press: {
    label: "as seen in",
    logos: [
      {
        name: "Eco-Stylist",
        src: ecoStylist,
        width: 127,
        desktopWidth: 178,
        opacity: 0.35
      },
      {
        name: "Canadian Living",
        src: canadianLiving,
        width: 72,
        desktopWidth: 111,
        opacity: 0.45
      },
      {
        name: "Jillian Harris",
        src: jillianHarris,
        width: 145,
        desktopWidth: 271,
        opacity: 0.7
      },
      {
        name: "The Eco Hub",
        src: ecoHub,
        width: 184,
        desktopWidth: 194,
        opacity: 0.5
      },
      {
        name: "Trend Hunter",
        src: trendHunter,
        width: 190,
        desktopWidth: 192,
        opacity: 0.5
      }
    ]
  }
}
