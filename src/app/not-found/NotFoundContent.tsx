import Link from 'next/link';

export default function NotFoundContent() {
  return (
    <main className="min-h-[calc(100vh-200px)] bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-[800px] w-full text-center">
        <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-3xl shadow-xl border-2 border-amber-200/30">
          <h1 className="text-[clamp(6rem,20vw,14rem)] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-[500px] mx-auto mb-12 leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:opacity-95 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go Home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold bg-transparent border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-amber-400 hover:text-amber-500 -translate-y-0.5 shadow-sm transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
