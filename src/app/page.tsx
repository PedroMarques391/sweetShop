import About from "@/components/Home/About";
import Brands from "@/components/Home/Gallery";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Brands />
      <Footer />
    </main>
  )
}
