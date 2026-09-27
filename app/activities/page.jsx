import PageHero from '@/components/PageHero';

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52', '#8c1515'];

function ActivityCard({ index, title, meta, description, items, itemsLabel = 'Highlights' }) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div className="card relative overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ backgroundColor: accent }}></div>
      <h2 className="heading-md mb-1">{title}</h2>
      <p className="text-sm font-semibold mb-4" style={{ color: accent }}>{meta}</p>
      {description && <p className="prose mb-5">{description}</p>}
      {items && (
        <div className="bg-amber-50/60 border border-amber-100 p-5 rounded-xl">
          <h3 className="heading-sm mb-3 text-sm uppercase tracking-wide text-[var(--muted)]">{itemsLabel}</h3>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Activities() {
  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        eyebrow="Outside the Lab"
        title="Activities & Leadership"
        subtitle="Engineering is most of what I do, but not all of it — here's the rest of the picture."
      />

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <ActivityCard
            index={0}
            title="Rooting Minds"
            meta="Co-Founder & President · 2025 - Present"
            description="Co-founded Rooting Minds, an initiative creating accessible games, workshops, and technology for neurodivergent youth. Through partnerships with FCSN and WeEMBRACE, we've reached approximately 100 students."
            itemsLabel="Key Initiatives"
            items={[
              'Designed and distributed educational card decks tailored for neurodivergent learners',
              'Led interactive workshops teaching STEM concepts through games and hands-on activities',
              'Built custom assistive technology solutions based on student feedback',
              'Managed team coordination and session redesign based on student participation metrics',
              'Impacted 100+ students in the community',
            ]}
          />

          <ActivityCard
            index={1}
            title="FCSN & WeEMBRACE Volunteer"
            meta="2024 - Present"
            description="Regular volunteer teaching and supporting neurodivergent children through various activities and programs."
            itemsLabel="Activities"
            items={[
              'Teach badminton and athletic skills with adaptive coaching',
              'Lead robotics workshops and coding projects',
              'Facilitate drawing games and creative activities',
              'Provide weekly educational tutoring',
            ]}
          />

          <ActivityCard
            index={2}
            title="Youth Council"
            meta="Chapter President · 2024 - Present"
            description="Leading youth council initiatives and activities for the Fremont community."
            itemsLabel="Responsibilities"
            items={[
              'Plan and execute monthly activities and community events',
              'Coordinate officer responsibilities and communications',
              'Teach mathematics enrichment to 38+ younger students',
              'Organize STEM and robotics outreach programs',
              'Lead service activities and community engagement',
            ]}
          />

          <ActivityCard
            index={3}
            title="School Leadership"
            meta="Irvington High School"
            items={[
              'AP Physics C Teaching Assistant — helping peers master mechanics, electromagnetism, and problem-solving strategies',
              'Active member of Math Club, Robotics Club, and Cricket Club',
            ]}
            itemsLabel="Roles"
          />

          <ActivityCard
            index={4}
            title="Cricket"
            meta="Captain, American School of Cricketing Excellence · 2019 - 2025"
            description="Competing at high levels in cricket while developing leadership and teamwork skills."
            itemsLabel="Achievements"
            items={[
              'Competed in 5+ tournaments and 50+ matches annually',
              'Trained 3+ times per week at elite facility',
              'Captained teams to multiple tournament wins',
              'Qualified for West Coast intrazonals',
            ]}
          />

          <div className="card">
            <h2 className="heading-md mb-3">Public Speaking & Debate</h2>
            <p className="prose">
              Competed in Lincoln-Douglas debate, Public Forum, Impromptu, and Oratorical Interpretation during 2022-2023. Placed 1st in Lincoln-Douglas at Golden State Academy and reached elimination rounds in Public Forum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
