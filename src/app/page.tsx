import "./Home.scss";

import { LandingSection } from "./_sections/home-page/landing-section";
import { SliderSection } from "./_sections/home-page/slider-section";
import { AboutSection } from "./_sections/home-page/about-section";
import { ServicesSection } from "./_sections/home-page/services-section";
import { NumbersSection } from "./_sections/home-page/numbers-section";
import { ForYouSection } from "./_sections/home-page/for-you-section";
import { ContactFormSection } from "./_sections/home-page/contact-form-section";
import { MapSection } from "./_sections/home-page/map-section";

export default function Home() {
  return (
    <div className="Home">
      <LandingSection />
      <SliderSection />
      <AboutSection />
      <ServicesSection />
      <NumbersSection />
      <MapSection />
      <ForYouSection />
      <ContactFormSection />
    </div>
  );
}
