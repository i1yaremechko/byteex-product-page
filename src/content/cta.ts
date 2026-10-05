export type CtaContent = {
  label: string
  href: string
  reviews: {rating: number; label: string}
}

export const ctaContent: CtaContent = {
  label: "Customize Your Outfit",
  href: "#collection",
  reviews: {rating: 5, label: "Over 500+ 5 Star Reviews Online"}
}
