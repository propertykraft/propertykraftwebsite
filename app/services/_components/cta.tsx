export const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl opacity-90">
            Contact us today to discuss how we can help manage your property
            with excellence and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-white text-orange-500 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              aria-label="Get a Quote"
            >
              Get a Quote
            </button>
            <button
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-orange-500 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
