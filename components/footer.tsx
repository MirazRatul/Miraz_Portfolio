export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-900 text-white border-t-2 border-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Mirajul Islam</h3>
            <p className="text-slate-400">React Native Developer • Full-Stack Mobile Engineer</p>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {currentYear}. Designed and built with React &amp; Next.js. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


