export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-16 border-b border-[#e6dcc8]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8c1515] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container-custom">
        {eyebrow && <p className="calligraphy text-2xl mb-2">{eyebrow}</p>}
        <h1 className="heading-lg mb-4" style={{ color: 'var(--primary)' }}>{title}</h1>
        {subtitle && <p className="prose text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
