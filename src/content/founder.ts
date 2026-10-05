import type {StaticImageData} from "next/image"

import topLeftMobile from "@/assets/images/founder/top-left-mobile.png"
import centerMobile from "@/assets/images/founder/center-mobile.png"
import bottomRightMobile from "@/assets/images/founder/bottom-right-mobile.png"
import {ctaContent, type CtaContent} from "./cta"

export type FounderPhoto = {
  src: StaticImageData
  alt: string
  focus?: string
  desktopSrc?: StaticImageData
}

export type FounderContent = {
  title: string
  photos: {
    topLeft: FounderPhoto
    center: FounderPhoto
    bottomRight: FounderPhoto
  }
  paragraphs: string[]
  cta: CtaContent
}

export const founderContent: FounderContent = {
  title: "Be your best self.",
  photos: {
    topLeft: {
      src: topLeftMobile,
      alt: "Woman in a grey knit lounge set",
      focus: "50% 0%"
    },
    center: {
      src: centerMobile,
      alt: "Woman in a white robe with her hands behind her head"
    },
    bottomRight: {
      src: bottomRightMobile,
      alt: "Woman in loungewear standing by a bright window"
    }
  },
  paragraphs: [
    "Hi! My name’s [Insert Name], and I founded [Insert] in ____.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    "Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.",
    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.",
    "Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.",
    "Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.",
    "Cras mattis varius mollis."
  ],
  cta: ctaContent
}
