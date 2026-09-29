import { AnnouncementBar } from "@/components/AnnouncementBar/AnnouncementBar";
import { Hero } from "@/components/Hero/Hero";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { heroContent } from "@/content/hero";

export default function Home() {
  return (
    <>
      <AnnouncementBar text={heroContent.announcement} />
      <SiteHeader />
      <main>
        <Hero content={heroContent} />
      </main>
    </>
  );
}