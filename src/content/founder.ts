import type {StaticImageData} from "next/image"

import greyFull from "@/assets/images/product/grey-full.jpg"
import founderRobe from "@/assets/images/founder-robe.png"
import founderWindow from "@/assets/images/founder-window.png"

export type FounderPhoto = {
  src: StaticImageData
  alt: string
  focus?: string
}

export type FounderContent = {
  title: string
  photos: {
    topLeft: FounderPhoto
    center: FounderPhoto
    bottomRight: FounderPhoto
  }
  paragraphs: string[]
}

// Static content for now. Will be replaced by a headless CMS query.
export const founderContent: FounderContent = {
  title: "Be your best self.",
  photos: {
    topLeft: {
      src: greyFull,
      alt: "Woman in a grey knit lounge set",
      focus: "50% 0%"
    },
    center: {
      src: founderRobe,
      alt: "Woman in a white robe with her hands behind her head"
    },
    bottomRight: {
      src: founderWindow,
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
  ]
}
