import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex justify-center items-center gap-14 py-6 px-10 text-black">
        <Link href="/" className="hover:text-gray-500">Home</Link>
        <Link href="https://www.ethcatherders.com/about" className="hover:text-gray-500">About</Link>
        <Link href="https://www.ethcatherders.com/donate" className="hover:text-gray-500">Donate</Link>
      </div>
    </header>
  );
}