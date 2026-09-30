export default function HeroPortrait() {
  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
      {/* Soft glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#8c1515]/25 via-[#c9a876]/20 to-transparent rounded-[2.5rem] blur-3xl"></div>

      {/* Portrait frame — bleeds toward the bottom like a real photo crop */}
      <div className="relative rounded-t-[2.5rem] rounded-b-none overflow-hidden border-2 border-[#e6dcc8] shadow-2xl aspect-[4/5] bg-[#e2d5b8]">
        <img
          src="/images/image0.jpeg"
          alt="Raeyaan Muppaneni at the Stanford SIMR poster session"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Bottom fade for a photographic feel */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/25 to-transparent"></div>
      </div>

      {/* Floating credibility chip, like the reference site's small avatar badge */}
      <div className="hidden md:flex absolute -left-8 top-10 items-center gap-2 bg-[#fffdf8] border border-[#e6dcc8] rounded-full pl-2 pr-4 py-2 shadow-lg">
        <div className="w-8 h-8 rounded-full bg-[#8c1515] flex items-center justify-center text-white text-xs font-bold">
          RM
        </div>
        <span className="text-xs font-semibold text-[#2b2620]">Class of 2027</span>
      </div>
    </div>
  );
}
