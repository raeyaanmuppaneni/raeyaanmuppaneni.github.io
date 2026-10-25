import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Resume | Raeyaan Muppaneni',
  description: 'Education, research, leadership, and technical skills — Raeyaan Muppaneni’s resume.',
};

const sections = [
  {
    "title": "EDUCATION",
    "entries": [
      {
        "title": "Irvington High, Fremont, California",
        "meta": "August 2024 - Present"
      },
      {
        "title": "Happy Academy, San Jose, California",
        "meta": "August 2023 - Present"
      },
      {
        "title": "Basis Independent Silicon Valley, San Jose, California",
        "meta": "August 2023 - June 2024"
      },
      {
        "title": "Academic Profile",
        "bullets": [
          "SAT: 1540 800M/740RW; PSAT: 1500/1520",
          "GPA: 4.06/4.0 (unweighted) 4.74/5.0 (weighted) (Happy Academy Consolidated Transcript)",
          "National Merit Semifinalist; AP Scholar with Distinction"
        ]
      },
      {
        "title": "AP (Scores) and HONORS Courses",
        "body": "AP US Government and Politics (5), AP Computer Science Principles (5), AP Physics I (5), AP Calculus AB (5), AP Macroeconomics (5), AP World History (4), AP English Language and Composition (4), AP Calculus BC (5), AP Computer Science A (5), AP Physics C: Mechanics (5), AP Physics C: Electricity & Magnetism (4), AP Psychology (in progress), AP Environmental Science (in progress), AP Statistics (in progress), AP Chemistry (course only), AP Seminar (course only), AP Research (course only), AP Spanish (in progress, course only), Chemistry Honors, English 10 Honors, Precalculus AB"
      },
      {
        "title": "Additional Coursework",
        "body": "Calculus 2, AI Machine Learning, Computer Architecture, Data Visualization, Multivariable Calculus, Quantum Physics, Data Science, Linear Algebra, AC DC Circuits"
      }
    ]
  },
  {
    "title": "RESEARCH PUBLICATIONS AND PATENT",
    "entries": [
      {
        "title": "Publication:",
        "bullets": [
          "Real-Time Control of a Low-Cost Robotic Arm Using EMG Signal Classification by AI-Based Machine Learning on Raspberry Pi (https://ieeexplore.ieee.org/document/11496321). Published in IEEE Xplore, proceedings of IEEE WcCST 2026 (co-sponsored by the IEEE Computational Intelligence Society), March 2026.",
          "VITALIS: A Patient-Owned Agentic Framework for Emergency Detection and Governed Clinical Disclosure (https://www.youthinnovationjournal.org/researchlib/papers/vitalis). Co-author. Published in Youth Innovation Journal, Summer 2026."
        ]
      },
      {
        "title": "Patent:",
        "bullets": [
          "U.S. Provisional Patent Application No. 63/887,594. AI emergency-detection wearable that monitors vitals in older adults and chronically ill patients and escalates to caregivers, clinicians, and emergency services; co-designed with Robolabs."
        ]
      }
    ]
  },
  {
    "title": "RESEARCH AND ENGINEERING PROJECTS",
    "entries": [
      {
        "title": "Pressure-Sensing Insole for Para-Athletes (Stanford SIMR and Human Performance Lab) - Electrical Engineer, Team Lead",
        "meta": "June 2026- Present (Grade 12) ; 12hrs/wk, 25wks/yr",
        "bullets": [
          "Selected for the Stanford Institutes of Medicine Summer Research Program (SIMR) with less than 5% acceptance rate; project continues in the Stanford Human Performance Lab",
          "Designing a capacitive pressure-sensing insole that tracks gait in blade-running para-athletes",
          "Found the need by interviewing Sydney Barta, a Stanford para-athlete: blade runners cannot use standard lab tools such as instrumented treadmills",
          "Built the full rigid-board schematic (FDC2214 capacitance-to-digital converter, LC tank circuits, OPA4354 active shield drivers, STM32 Nucleo) through multiple TA review rounds",
          "Hand-soldered SMD parts on boards and got data from all 8 sensors; presented at the SIMR poster session",
          "After SIMR, leading the team's continuation under PhD student and mentor Michelle Joyce: setting next steps, running progress updates, scheduling lab time",
          "Redesigned the rigid PCB to mount directly on the microcontroller, coordinated the flex-board redesign, ordered version 2 boards, and got stalled firmware running within days",
          "Currently building the enclosure and calibrating device against force plates; entered the team into the Conrad Challenge"
        ]
      },
      {
        "title": "EMG Robotic Arm - Independent Researcher",
        "meta": "June 2024- March 2026 (Grades 10, 11) 6hrs/wk, 35wks/yr",
        "bullets": [
          "Built an EMG-controlled robotic arm for people with motor dysfunction and amputees",
          "Did research work under mentorship of former Stanford PhD candidate Jon Stingel",
          "Used raspberrypi4, EMG sensors, lithium ion battery, electrodes, robotic arm with servos and 4 degrees of freedom, code built on google colab",
          "Collected data from my own arm using the EMG device I built, which had a simple PCB and 3d-printed enclosure",
          "Tested different machine learning algorithms: k nearest neighbors, Multilayer Perceptron (MLP), Random Forest, and Support Vector Machine (SVM); testing different hyperparameters",
          "Was able to get 93% accuracy on test data with Random Forest model; got robotic arm moving with corresponding movements in actual arm",
          "Competed in Alameda County Science and Engineering Fair (ACSEF) got 2nd place award",
          "Wrote the research paper, published in IEEE WcCST 2026",
          "Did further research to use Jacobians and inverse kinematics to see how to optimize a robotic arm that minimizes jerk and power consumption",
          "Tested different trajectory planning methods such as cubic spline and linear interpolation"
        ]
      },
      {
        "title": "AI Emergency-Detection Wearable (with Robolabs)- Codesigner and Coauthor",
        "meta": "August 2024-July 2026 (Grades 10, 11); 3hrs/wk, 45wks/yr",
        "bullets": [
          "Co-designed a wearable-based system to monitor vitals in older adults and chronically ill patients living alone and escalate to caregivers, family, clinicians, and emergency services",
          "Core of the design is an AI agent on the patient’s own devices that learns the user’s normal vitals, checks unclear readings before raising an alarm, and sends responders a short summary of what it observed",
          "Studied HIPAA emergency-access rules; designed each disclosure to be limited by recipient role, time-limited, and logged to balance patient privacy with safety",
          "Published paper on research in Youth Innovation Journal",
          "Filed provisional patent application number 63/887,594"
        ]
      },
      {
        "title": "Collision-Avoidance Wearable for Blind Students- Designer and Builder",
        "meta": "August 2023 - April 2024 (Grade 9); 6hrs/wk, 35wks/yr",
        "bullets": [
          "Built object detection and classification device for blind people to prevent collisions",
          "Used YOLOv8 pretrained on an 80-class dataset and additionally implemented my own trained crosswalk dataset",
          "Used raspberrypi4, camera, speakers and designed casing for device",
          "Competed in Synopsys science fair; got 2nd place category award and Mayor’s Award"
        ]
      },
      {
        "title": "Assistive Devices for Neurodiverse Kids- Designer and Builder",
        "meta": "July 2026-Present (Grade 12); 3hrs/wk, 25wks/yr",
        "bullets": [
          "Building a handheld speech-button device for non-verbal children (ESP32-S3, 9 record-and-play messages, rechargeable battery); designed and ordered PCB",
          "Started after a non-verbal student at a Rooting Minds workshop could not signal whether he understood the game",
          "Built an EEG-based app that tracks focus states for neurodivergent students and competed with it in Congressional App Challenge",
          "Currently working on making an app where the physical card game can be played to increase accessibility to neurodivergent children globally"
        ]
      },
      {
        "title": "Evodyne Robotics- Engineer",
        "meta": "July 2025 - May 2026 (Grade 11); 5hr/wk, 35wks/yr",
        "bullets": [
          "Built advanced robotic dog with 3d printed parts, arduino, and raspberry pi",
          "Worked on actuator for humanoid, working on Fusion 360 for design"
        ]
      }
    ]
  },
  {
    "title": "VOLUNTEERING, LEADERSHIP, AND ACTIVITIES",
    "entries": [
      {
        "title": "Rooting Minds (501c3 nonprofit)- President and Cofounder (11th & 12 Gr)",
        "meta": "June 2025 - Present (Grades 11, 12); 8hr/wk, 30wks/yr",
        "bullets": [
          "Co-founded with brother to teach problem solving, science, and creative thinking to neurodivergent children",
          "Designed learning games, including an animal and math matching card game with clues or problems to make learning fun and improve cognitive ability",
          "Designed, produced, and distributed 100 learning game card decks",
          "Leading biweekly workshops in partnership with Friends of Children with Special Needs (FCSN), impacting 150+ students",
          "Worked with students in WeEMBRACE, a nonprofit for neurodivergent children, running online classes to teach art and make kids play our card game",
          "Paired 10+ volunteers with kids for one-to-one workshops and socials",
          "Building an app with digital versions of the games to increase accessibility; building a speech-button device for non-verbal students",
          "Bringing more volunteers to Irvington High’s Neurodiversity Club"
        ]
      },
      {
        "title": "Arnold & Marsden Math Olympiad Circle (AMMOC)- Math Competitor",
        "meta": "June 2023 - Present (Grades 9, 10, 11, 12); 15hrs/wk, 45wks/yr",
        "bullets": [
          "Studied number theory, geometry, combinatorics, and algebra in Arnold & Marsden Math Olympiad Circle (AMMOC)",
          "Competed in 30+ competitions across group and individual",
          "Qualified for USAMO (only a couple hundred students a year); 144 AMC 12B, 13/15 AIME",
          "Worked through various books like Problems and Solutions in Mathematical Olympiad High School 1 & 3, Challenging Problems in Geometry, A Gentle Introduction to the American Invitational Mathematics Examination"
        ]
      },
      {
        "title": "Robotics Club: Basis Independent Silicon Valley- Mechanical Engineer and Driver",
        "meta": "August 2023 - April 2024 (Grade 9); 7hrs/wk, 35wks/yr",
        "bullets": [
          "Built drivetrain and designed catapuncher for robot",
          "Competed in several robotics competitions",
          "Made it to semifinals out of 200+ teams, qualifying for regionals",
          "Made it to eliminations out of 250 teams in regionals",
          "Practiced driving the robot and was driver during competition"
        ]
      },
      {
        "title": "Cricket (American School of Cricketing Excellence)- Team Captain",
        "meta": "July 2019- June 2025 (Grades 9, 10); 12hr/wk, 40wks/yr",
        "bullets": [
          "Captain of the Under 15 team: came up with strategies and supported teammates",
          "Won 7 tournaments in LA and Bay Area",
          "Traveled across the country for tournaments such as Oregon",
          "Qualified for USA Cricket intrazonals, barely missing out on zonals, the highest level",
          "10+ player of the match awards"
        ]
      }
    ]
  },
  {
    "title": "Internships",
    "entries": [
      {
        "title": "Fluora Bioscience Laboratories- Electronics Engineer Trainee",
        "meta": "Fall 2026 (Grade 12); 6hrs/wk, 6wks/yr",
        "bullets": [
          "Designing the electronics for a portable fluorometer (fluorescence spectrometer) at a biotech company",
          "Weekly design reviews with manager and separate weekly meetings with whole team",
          "Leading the electronics breadboarding team",
          "Button-triggered measurement using alternating blue and green LEDs, LED irradiance sensing, and two switchable optical filters",
          "Photodetector and amplifier chain sampled at 100 Hz; measuring difference in light intensity of emitted and absorbed light",
          "Worked on Arduino code with esp32 microcontroller",
          "Rechargeable battery (USB or wireless) sized for 100+ measurements per charge"
        ]
      }
    ]
  },
  {
    "title": "AWARDS/RECOGNITION",
    "entries": [
      {
        "title": "Awards and Recognition",
        "bullets": [
          "USA Mathematical Olympiad (USAMO) Qualifier (2026)",
          "144 on AMC 12B",
          "13/15 on AIME",
          "National Merit Semifinalist",
          "AP Scholar with Distinction",
          "Congressional Bronze Medal and Gold Certificate",
          "High Distinction Australian Mathematics Competition 2025",
          "2nd place Synopsys Science and Technology Championship (2024)",
          "2nd place Alameda County Science and Engineering Fair (2025)",
          "Recognition Award from the Mayor of Fremont",
          "Bronze American Mathematics Olympiad 2024",
          "Bronze ASIAROPE 2023",
          "Distinction in Cayley Contest 2025",
          "Distinction in Fermat Contest 2026",
          "Performance with Honors in COMC 2024",
          "Finalist in International Youth Math Challenge IYMC",
          "Math League International Summer Challenge 2024: Bronze",
          "\"Solved Problem in Math Reflection Journal\" recognition",
          "Caribou Contest: Top 15% (November, January), Top 25% (October)",
          "Robotics: Semifinalist at a rookie competition; elimination rounds at a regionals competition",
          "Cricket: 10+ Player of the Match awards; 7 tournament wins",
          "Certificate of Honors in BASIS Independent Silicon Valley",
          "Distinguished Mathematics Scholar presented by Happy Academy",
          "Technology for Good Award presented by Happy Academy"
        ]
      }
    ]
  },
  {
    "title": "SKILLS/TALENTS",
    "entries": [
      {
        "title": "Skills and Talents",
        "bullets": [
          "PCB Design: KiCad, EasyEDA Pro, soldering, reading chip datasheets",
          "Embedded Hardware: STM32, ESP32-S3, raspberry pi, sensors, circuits",
          "Programming and Design: Python, Java, C++, Fusion 360",
          "Languages: English, Telugu, Spanish (taking AP Spanish)",
          "Athletics: Calisthenics, cricket, basketball"
        ]
      }
    ]
  }
];

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52'];

const GITHUB_PROJECT_LINKS = {
  'Pressure-Sensing Insole for Para-Athletes': {
    label: 'GitHub page for Insole Project',
    href: 'https://github.com/raeyaanmuppaneni/Blade-Insole',
  },
  'EMG Robotic Arm': {
    label: 'GitHub page for EMG Robotic Arm',
    href: 'https://github.com/raeyaanmuppaneni/EMG-controlled-robotic-arm',
  },
};

function LinkedText({ text }) {
  const pieces = text.split(/(https?:\/\/[^\s)]+)/g);
  return <>{pieces.map((part, i) => /^https?:\/\//.test(part) ? <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-red-800 underline break-all">{part}</a> : <span key={i}>{part}</span>)}</>;
}

export default function Resume() {
  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-16 border-b border-[#e6dcc8]">
        <div className="container-custom flex flex-wrap justify-between items-end gap-6">
          <div>
            <p className="calligraphy text-2xl mb-2">The Paper Trail</p>
            <h1 className="heading-lg mb-3" style={{ color: 'var(--primary)' }}>Resume</h1>
            <p className="text-[var(--muted)]">raeyaanmuppaneni@gmail.com · Fremont, California</p>
          </div>
          <a href="/Raeyaan_Muppaneni_Resume.pdf" download className="btn-primary inline-flex items-center gap-2 shrink-0">
            Download PDF <span>↓</span>
          </a>
        </div>
      </section>
      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, sectionIndex) => (
            <section key={section.title} className="card relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ backgroundColor: ACCENTS[sectionIndex % ACCENTS.length] }} />
              <h2 className="heading-sm text-lg mb-5 uppercase tracking-wide" style={{ color: ACCENTS[sectionIndex % ACCENTS.length] }}>{section.title}</h2>
              {section.entries.map((entry, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h3 className="font-bold text-slate-900 mb-0.5"><LinkedText text={entry.title} /></h3>
                  {Object.entries(GITHUB_PROJECT_LINKS).map(([project, link]) =>
                    entry.title.startsWith(project) ? (
                      <a key={project} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-red-800 underline mb-2">{link.label}</a>
                    ) : null
                  )}
                  {entry.meta && <p className="text-sm text-[var(--muted)] mb-2">{entry.meta}</p>}
                  {entry.body && <p className="text-sm text-slate-600 leading-relaxed"><LinkedText text={entry.body} /></p>}
                  {entry.bullets && <ul className="text-sm space-y-2 text-slate-600 mt-2">
                    {entry.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 leading-relaxed">
                        <span className="text-red-800 shrink-0">•</span>
                        <span><LinkedText text={bullet} /></span>
                      </li>
                    ))}
                  </ul>}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
