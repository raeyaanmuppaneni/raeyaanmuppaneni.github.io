export default function ProfileImage() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Decorative background elements */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[#8c1515] to-[#c9a876] rounded-3xl opacity-15 blur-2xl"></div>

      {/* Main image container */}
      <div className="relative rounded-2xl overflow-hidden border-4 border-[#8c1515] bg-gradient-to-br from-[#f0e9d8] to-[#e6dcc8] aspect-square">
        {/* Placeholder with pattern */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-50 relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Image placeholder content */}
          <div className="relative text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-400 rounded-full flex items-center justify-center text-white">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-600">Raeyaan's Photo</p>
            <p className="text-xs text-slate-500 mt-1">High-quality portrait coming soon</p>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-amber-400 rounded-full opacity-15 blur-xl"></div>
    </div>
  );
}
