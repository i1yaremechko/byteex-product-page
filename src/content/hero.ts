import type {StaticImageData} from "next/image"

import greySet from "@/assets/images/hero-grey-set.jpg"
import reading from "@/assets/images/hero-reading.jpg"
import robe from "@/assets/images/hero-robe.jpg"
import reviewer from "@/assets/images/reviewer-jane.jpg"
import dayNight from "@/assets/icons/day-night.png"
import ecoCart from "@/assets/icons/eco-cart.png"
import fabricWaves from "@/assets/icons/fabric-waves.png"

export type GalleryImage = {
  src: StaticImageData
  alt: string
  /** CSS object-position used when the photo is cropped to fit its frame. */
  focus?: string
}

export type HeroContent = {
  announcement: string
  title: string
  gallery: {left: GalleryImage; center: GalleryImage; right: GalleryImage}
  benefits: {icon: StaticImageData; text: string}[]
  cta: {label: string; href: string}
  review: {
    name: string
    avatar: StaticImageData
    rating: number
    label: string
    text: string
  }
}

// Static content for now. Will be replaced by a headless CMS query.
export const heroContent: HeroContent = {
  announcement: "FREE SHIPPING on orders > $200",
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
  }
}
