import type {StaticImageData} from "next/image"

import bedBooks from "@/assets/images/fans/bed-books.jpg"
import bedroomRobe from "@/assets/images/fans/bedroom-robe.jpg"
import bookshelf from "@/assets/images/fans/bookshelf.jpg"
import breakfast from "@/assets/images/fans/breakfast.jpg"
import couchLaughing from "@/assets/images/fans/couch-laughing.jpg"
import curlyNavy from "@/assets/images/fans/curly-navy.jpg"
import deskReading from "@/assets/images/fans/desk-reading.jpg"
import greySet from "@/assets/images/fans/grey-set.jpg"
import headphones from "@/assets/images/fans/headphones.jpg"
import kitchen from "@/assets/images/fans/kitchen.jpg"
import morningBed from "@/assets/images/fans/morning-bed.jpg"
import oliveSweater from "@/assets/images/fans/olive-sweater.jpg"
import pillowCouple from "@/assets/images/fans/pillow-couple.jpg"
import plaidJacket from "@/assets/images/fans/plaid-jacket.jpg"
import readingSofa from "@/assets/images/fans/reading-sofa.jpg"
import readingTogether from "@/assets/images/fans/reading-together.jpg"
import roadYoga from "@/assets/images/fans/road-yoga.jpg"
import satinTop from "@/assets/images/fans/satin-top.jpg"
import slipDress from "@/assets/images/fans/slip-dress.jpg"
import sofaFriends from "@/assets/images/fans/sofa-friends.jpg"
import stretching from "@/assets/images/fans/stretching.jpg"
import yellowRobe from "@/assets/images/fans/yellow-robe.jpg"

import {ctaContent, type CtaContent} from "./cta"

export type FanPhoto = {
  id: string
  src: StaticImageData
  alt: string
  desktopOrder: number
}

export type Review = {
  id: string
  name: string
  rating: number
  text: string
  desktopOrder: number
}

export type FansContent = {
  title: string
  intro: string
  photos: FanPhoto[]
  reviews: Review[]
  cta: CtaContent
}

const SHORT_REVIEW =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi."
const LONG_REVIEW = `${SHORT_REVIEW} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.`

export const fansContent: FansContent = {
  title: "What are our fans saying?",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.",
  photos: [
    {
      id: "yellow-robe",
      src: yellowRobe,
      alt: "Woman in a yellow patterned robe",
      desktopOrder: 6
    },
    {
      id: "headphones",
      src: headphones,
      alt: "Woman with headphones in a grey top",
      desktopOrder: 3
    },
    {
      id: "pillow-couple",
      src: pillowCouple,
      alt: "Two people hugging cushions",
      desktopOrder: 16
    },
    {
      id: "slip-dress",
      src: slipDress,
      alt: "Woman in a cream slip dress",
      desktopOrder: 13
    },
    {
      id: "reading-sofa",
      src: readingSofa,
      alt: "Woman reading on a green sofa",
      desktopOrder: 10
    },
    {
      id: "satin-top",
      src: satinTop,
      alt: "Woman in a satin top",
      desktopOrder: 7
    },
    {
      id: "couch-laughing",
      src: couchLaughing,
      alt: "Woman in a rust tee laughing on a couch",
      desktopOrder: 12
    },
    {
      id: "desk-reading",
      src: deskReading,
      alt: "Woman in a pastel hoodie reading at a desk",
      desktopOrder: 5
    },
    {
      id: "curly-navy",
      src: curlyNavy,
      alt: "Woman with curly hair in a navy tee",
      desktopOrder: 0
    },
    {
      id: "plaid-jacket",
      src: plaidJacket,
      alt: "Woman in a plaid jacket",
      desktopOrder: 1
    },
    {
      id: "grey-set",
      src: greySet,
      alt: "Woman in a grey pajama set",
      desktopOrder: 2
    },
    {
      id: "bedroom-robe",
      src: bedroomRobe,
      alt: "Woman in a robe in a bedroom",
      desktopOrder: 4
    },
    {
      id: "road-yoga",
      src: roadYoga,
      alt: "Woman in a pink dress doing yoga on a road",
      desktopOrder: 8
    },
    {
      id: "morning-bed",
      src: morningBed,
      alt: "Woman in a grey-green tee sitting on a bed",
      desktopOrder: 9
    },
    {
      id: "bookshelf",
      src: bookshelf,
      alt: "Woman standing in front of a bookshelf",
      desktopOrder: 11
    },
    {
      id: "reading-together",
      src: readingTogether,
      alt: "Two women reading together",
      desktopOrder: 14
    },
    {
      id: "stretching",
      src: stretching,
      alt: "Woman in a green pajama set stretching",
      desktopOrder: 15
    },
    {
      id: "bed-books",
      src: bedBooks,
      alt: "Woman leaning on a bed next to a stack of books",
      desktopOrder: 17
    },
    {
      id: "kitchen",
      src: kitchen,
      alt: "Woman in a navy top in the kitchen",
      desktopOrder: 18
    },
    {
      id: "olive-sweater",
      src: oliveSweater,
      alt: "Woman in an olive sweater",
      desktopOrder: 19
    },
    {
      id: "breakfast",
      src: breakfast,
      alt: "Woman having breakfast at home",
      desktopOrder: 20
    },
    {
      id: "sofa-friends",
      src: sofaFriends,
      alt: "Two friends relaxing on a sofa",
      desktopOrder: 21
    }
  ],
  reviews: [
    {
      id: "review-1",
      name: "Jane, S.",
      rating: 5,
      text: LONG_REVIEW,
      desktopOrder: 1
    },
    {
      id: "review-2",
      name: "Jane, S.",
      rating: 5,
      text: SHORT_REVIEW,
      desktopOrder: 0
    },
    {
      id: "review-3",
      name: "Jane, S.",
      rating: 5,
      text: SHORT_REVIEW,
      desktopOrder: 2
    }
  ],
  cta: ctaContent
}
