import { AnnouncementBar } from "@/components/AnnouncementBar/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";

export default function Home() {
  return (
    <>
      <AnnouncementBar text="FREE SHIPPING on orders > $200" />
      <SiteHeader />
      <main />
    </>
  );
}