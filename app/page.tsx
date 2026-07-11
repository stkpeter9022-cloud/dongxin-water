import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import GoogleReviews from "./components/GoogleReviews";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Areas from "./components/Areas";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Schema from "./components/Schema";

export default function Home() {
  return (
    <>
      <Schema />

      <Navbar />

      <main>
        <Hero />

        <Services />

        <WhyUs />

        <Process />

        <Gallery />

        <GoogleReviews />

        <Testimonials />

        <FAQ />

        <Areas />
      </main>

      <Footer />

      <FloatingButtons />
    </>
  );
}