import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* 404 Heading */}
      <h1 className="text-8xl font-bold text-gray-900 mb-4 tracking-tight">
        404
      </h1>
      
      {/* Subheading */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      
      {/* Description */}
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist.
      </p>
      
      {/* Back to Home Button */}
      <Link
        href="/"
        className="bg-[#00745B] hover:bg-[#005a46] text-white px-8 py-3 rounded-md font-medium transition-colors"
      >
        Go to Home
      </Link>

      {/* Note: You can add the specific illustration image from your 
        assets folder later by placing an <img src="/your-image.png" /> here.
      */}
    </div>
  );
}