export default function Footer() {
  return (
    <footer className="text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-8 pt-8 text-center text-[#A9A9A9]">
          <p>&copy; {new Date().getFullYear()} ECH Institute, Inc.</p>
          <p>All content and resources on our website are for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}