import type {StaticImageData} from "next/image"

import greySet from "@/assets/images/faq/grey-set.jpg"
import reading from "@/assets/images/faq/reading.jpg"
import stretching from "@/assets/images/faq/stretching.jpg"
import {ctaContent, type CtaContent} from "./cta"

export type FaqItem = {
  id: string
  question: string
  answer: string
  mobileAnswer?: string
}

export type FaqPhoto = {src: StaticImageData; alt: string}

export type FaqContent = {
  title: string
  items: FaqItem[]
  photos: {top: FaqPhoto; center: FaqPhoto; bottom: FaqPhoto}
  cta: CtaContent
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."

export const faqContent: FaqContent = {
  title: "Frequently asked questions.",
  items: [
    {
      id: "faq-1",
      question: "lorem ipsum dolor sit amet",
      answer: LOREM,
      mobileAnswer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible."
    },
    {id: "faq-2", question: "lorem ipsum dolor sit amet", answer: LOREM},
    {id: "faq-3", question: "lorem ipsum dolor sit amet", answer: LOREM},
    {id: "faq-4", question: "lorem ipsum dolor sit amet", answer: LOREM},
    {id: "faq-5", question: "lorem ipsum dolor sit amet", answer: LOREM},
    {id: "faq-6", question: "lorem ipsum dolor sit amet", answer: LOREM}
  ],
  photos: {
    top: {src: stretching, alt: "Woman in a green pajama set stretching"},
    center: {src: greySet, alt: "Woman in a grey knit lounge set"},
    bottom: {src: reading, alt: "Woman reading a book on a green sofa"}
  },
  cta: ctaContent
}
