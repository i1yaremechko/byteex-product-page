import { AnnouncementBar } from "@/components/AnnouncementBar/AnnouncementBar";
import { FounderStory } from "@/components/FounderStory/FounderStory";
import { Hero } from "@/components/Hero/Hero";
import { ProductBenefits } from "@/components/ProductBenefits/ProductBenefits";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { benefitsContent } from "@/content/benefits";
import { founderContent } from "@/content/founder";
import { heroContent } from "@/content/hero";

export default function Home() {
  return (
    <>
      <AnnouncementBar text={heroContent.announcement} />
      <SiteHeader />
      <main>
        <Hero content={heroContent} />
        <ProductBenefits {...benefitsContent} />
        <FounderStory {...founderContent} />
      </main>
    </>
  );
}