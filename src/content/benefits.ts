import type {StaticImageData} from "next/image"
import {ctaContent, type CtaContent} from "./cta"

import cloud from "@/assets/icons/cloud.png"
import ecoCart from "@/assets/icons/eco.png"
import dayNight from "@/assets/icons/day-night.png"
import fabricWaves from "@/assets/icons/waves.png"
import leaf from "@/assets/icons/leaf.png"
import greyFull from "@/assets/images/benefits/active-two.jpg"
import robeFull from "@/assets/images/benefits/active-one.png"

export type ProductSlide = {
  id: string
  src: StaticImageData
  name: string
  alt: string
}

export type Benefit = {
  icon: StaticImageData
  iconWidth: number
  desktopIcon?: StaticImageData
  title: string
  text: string
}

export type BenefitsContent = {
  title: string
  slides: ProductSlide[]
  initialSlide: number
  benefits: Benefit[]
  cta: CtaContent
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."

export const benefitsContent: BenefitsContent = {
  title: "Loungewear you can be proud of.",
  slides: [
    {
      id: "look-1",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    },
    {
      id: "look-2",
      src: robeFull,
      name: "White Robe",
      alt: "Woman in a white robe"
    },
    {
      id: "look-3",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    },
    {
      id: "look-4",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    },
    {
      id: "look-5",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    },
    {
      id: "look-6",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    },
    {
      id: "look-7",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    },
    {
      id: "look-8",
      src: greyFull,
      name: "Grey Lounge Set",
      alt: "Woman in a grey knit lounge set"
    }
  ],
  initialSlide: 1,
  benefits: [
    {
      icon: cloud,
      iconWidth: 42,
      desktopIcon: ecoCart,
      title: "Ethically sourced.",
      text: LOREM
    },
    {
      icon: dayNight,
      iconWidth: 42,
      desktopIcon: leaf,
      title: "Responsibly made.",
      text: LOREM
    },
    {
      icon: leaf,
      iconWidth: 42,
      desktopIcon: dayNight,
      title: "Made for living in.",
      text: LOREM
    },
    {
      icon: fabricWaves,
      iconWidth: 42,
      title: "Unimaginably comfortable.",
      text: LOREM
    }
  ],
  cta: ctaContent
}
