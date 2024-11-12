// components/FeatureCard.tsx
type FeatureCardProps = {
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  backgroundImage,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-lg text-left bg-gray-800 ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg text-gray-400 max-w-full">{description}</p>
      </div>
    </div>
  );
}