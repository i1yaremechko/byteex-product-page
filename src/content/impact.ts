import type {StaticImageData} from "next/image"

import co2 from "@/assets/icons/co2.png"
import energy from "@/assets/icons/energy.png"
import water from "@/assets/icons/water.png"

export type ImpactStat = {
  id: string
  icon: StaticImageData
  value: string
  label: string
  desktopOnly?: boolean
}

export type ImpactContent = {
  title: string
  stats: ImpactStat[]
}

export const impactContent: ImpactContent = {
  title: "Our total green impact",
  stats: [
    {id: "co2", icon: co2, value: "3,927 kg", label: "of CO2 saved"},
    {
      id: "water",
      icon: water,
      value: "2,546,167 days",
      label: "of drinking water saved"
    },
    {
      id: "energy",
      icon: energy,
      value: "7,321 kWh",
      label: "of energy saved",
      desktopOnly: true
    }
  ]
}
