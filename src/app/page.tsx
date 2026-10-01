import { AnnouncementBar } from "@/components/AnnouncementBar/AnnouncementBar";
import { FounderStory } from "@/components/FounderStory/FounderStory";
import { Hero } from "@/components/Hero/Hero";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { ProductBenefits } from "@/components/ProductBenefits/ProductBenefits";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { benefitsContent } from "@/content/benefits";
import { founderContent } from "@/content/founder";
import { heroContent } from "@/content/hero";
import { howItWorksContent } from "@/content/how-it-works";
import { FanReviews } from "@/components/FanReviews/FanReviews";
import { fansContent } from "@/content/fans";
import { Faq } from "@/components/Faq/Faq";
import { faqContent } from "@/content/faq";


export default function Home() {
  return (
    <>
      <AnnouncementBar messages={heroContent.announcement} />
      <SiteHeader />
      <main>
        <Hero content={heroContent} />
        <ProductBenefits {...benefitsContent} />
        <FounderStory {...founderContent} />
        <HowItWorks {...howItWorksContent} />
        <FanReviews {...fansContent} />
        <Faq {...faqContent} />
      </main>
    </>
  );
}