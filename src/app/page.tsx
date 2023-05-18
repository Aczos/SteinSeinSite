import { Header } from "@/components/Header/Header";
import { Home } from "@/components/Template/Home";

export default function HomePage() {
  return (
    <>
      <Header
        section="services"
        description="We design attention-grabbing websites that get results"
        title="SteinSeinSite"
      />
      <Home />
    </>
  );
}
