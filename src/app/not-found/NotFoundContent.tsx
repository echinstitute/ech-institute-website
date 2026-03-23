import Link from 'next/link';

export default function NotFoundContent() {
  return (
    <main className="min-h-[calc(100vh-200px)] bg-white flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-[800px] w-full text-center">
        <div className="bg-white p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-yellow-400">
          <h1
            className="text-[clamp(5rem,20vw,12rem)] font-extrabold leading-none text-white drop-shadow-sm"
            style={{
              WebkitTextStroke: '3px #facc15',
              textShadow: '0 0 8px rgba(250, 204, 21, 0.8), 0 0 18px rgba(250, 204, 21, 0.55)',
            }}
          >
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-[500px] mx-auto mb-8 sm:mb-10 leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-lg text-base font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95 transition-all w-full sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
