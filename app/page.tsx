import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

export default function Home() {
    return (
        <div className="relative">
            {/* <StickyNavbar /> */}
            <Navbar/>
            <Hero />
            <Features/>
            <SEO/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}
