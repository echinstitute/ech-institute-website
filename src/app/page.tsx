export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 w-full flex-grow flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              ECH <span className="text-orange-600">Institute</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-orange-600 font-semibold mb-6">
              Herding Knowledge, Building Community, Homesteading Ethereum!
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We are a 501(c)3 nonprofit organization focused on providing education and resources to the Ethereum community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.ethcatherders.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 text-lg shadow-lg"
              >
                Visit ethcatherders.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ECH Institute, Inc.</p>
            <p>All content and resources on our website are for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
