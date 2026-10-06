import type {StaticImageData} from 'next/image'

type SanityImage = {
  alt?: string
  focus?: string
  asset?: {url?: string; metadata?: {dimensions?: {width?: number; height?: number}; lqip?: string}}
}

/** Converts the projected Sanity asset to the shape accepted by next/image. */
export function toStaticImage(image: SanityImage): StaticImageData {
  const asset = image.asset
  const dimensions = image.asset?.metadata?.dimensions
  const src = asset?.url
  if (!asset || !src || !dimensions?.width || !dimensions.height) {
    throw new Error('Sanity image is missing its asset URL or dimensions.')
  }

  return {src, width: dimensions.width, height: dimensions.height, blurDataURL: asset.metadata?.lqip}
}
