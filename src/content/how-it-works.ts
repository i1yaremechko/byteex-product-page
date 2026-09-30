import type {StaticImageData} from "next/image"

import weShip from "@/assets/icons/we-ship.png"
import youEnjoy from "@/assets/icons/you-enjoy.png"
import youSave from "@/assets/icons/you-save.png"
import {ctaContent, type CtaContent} from "./cta"

export type Step = {
  id: string
  icon: StaticImageData
  iconWidth: number
  title: string
  text: string
  mobileText?: string
  highlighted?: boolean
}

export type HowItWorksContent = {
  title: string
  steps: Step[]
  cta: CtaContent
}

export const howItWorksContent: HowItWorksContent = {
  title: "Comfort made easy",
  steps: [
    {
      id: "save",
      icon: youSave,
      iconWidth: 51,
      title: "You save.",
      text: "Browse our comfort sets and save 15% when you bundle.",
      mobileText: "Browse our store and find something you love."
    },
    {
      id: "ship",
      icon: weShip,
      iconWidth: 69,
      title: "We ship.",
      text: "We ship your items within 1-2 days of receiving your order.",
      highlighted: true
    },
    {
      id: "enjoy",
      icon: youEnjoy,
      iconWidth: 60,
      title: "You enjoy!",
      text: "Wear hernest around the house, out on the town, or in bed."
    }
  ],
  cta: ctaContent
}
