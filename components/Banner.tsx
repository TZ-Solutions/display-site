// components/Banner.tsx
type BannerProps = {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export default function Banner({ title, description, buttonText, onButtonClick }: BannerProps) {
  return (
    <div className="w-full mb-12 py-10 px-10 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-right">
        <p className="text-xl text-gray-400">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-6 px-6 py-3 border border-gray-400 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}