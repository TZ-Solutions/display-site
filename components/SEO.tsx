// components/SEOSection.tsx
export default function SEO() {
    return (
      <section className="bg-black text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built-in SEO and analytics to get discovered</h2>
          <p className="text-lg text-gray-400">Expand your reach and show up more in global search engine results with a powerful set of integrated features.</p>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SEO Tools Card */}
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">SEO Tools</h3>
            <p className="text-gray-400">
              Expand your reach and show up more in global search engine results with a powerful set of integrated features.
            </p>
          </div>
  
          {/* Integrations and Extensions Card */}
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Integrations and Extensions</h3>
            <p className="text-gray-400">
              Unite your digital world through integrations with popular social platforms and multi-media accounts.
            </p>
          </div>
  
          {/* Website Analytics Card */}
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Website Analytics</h3>
            <p className="text-gray-400">
              Access traffic data you need to scale, plus insights into user behavior and engagement to direct your focus.
            </p>
          </div>
        </div>
      </section>
    );
  }
  