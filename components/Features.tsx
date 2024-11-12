'use client'
// components/FeaturesSection.tsx
import Banner from "./Banner";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white py-20">
      {/* Features Banner */}
      <Banner
        title="Creative tools to help you stand out online"
        description="A professional look and feel to match your personality and build credibility with your audience through best-in-class website design."
        buttonText="Explore Creative Tools →"
        onButtonClick={() => alert("Button Clicked")}
      />

      {/* Feature Cards */}
      <div className="w-full px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-8">
        <FeatureCard
          title="Look Great on Every Device"
          description="Every site is automatically optimized for desktop, mobile, and tablet views."
          className="md:col-span-2 lg:col-span-2 lg:row-span-1 bg-opacity-70 !bg-gradient-to-b from-[#372F33] to-[#3F3C32]"
        />
        <FeatureCard
          title="Support All Your Media"
          description="Add photos, video, audio, and more with our easy-to-use management system."
          backgroundImage="background.jpg" // Adjust with actual background image
          className="lg:col-span-1 lg:row-span-full lg:col-start-3"
        />
        <FeatureCard
          title="Support All Your Media"
          description="Add photos, video, audio, and more with our easy-to-use management system."
          backgroundImage="background.jpg" // Adjust with actual background image
          className="lg:row-span-3"
        />
        <FeatureCard
          title="Integrations and Extensions"
          description="Unite your digital world through integrations with popular social platforms."
          className="lg:row-span-1 bg-[#4E4242] bg-opacity-80"
        />
        <FeatureCard
          title="Website Analytics"
          description="Access traffic data you need to scale, plus insights into user behavior."
          className="lg:row-span-1 bg-[#4E4242] bg-opacity-80"
        />
        <FeatureCard
          title="Website Analytics"
          description="Access traffic data you need to scale, plus insights into user behavior."
          className="lg:row-span-1 bg-[#4E4242] bg-opacity-80"
        />
      </div>
    </section>
  );
}
