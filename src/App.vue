<script setup>
const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Passion Projects', href: '#passion-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Interests', href: '#interests' },
]

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:pranjalp@mscloud.uni-paderborn.de',
    value: 'pranjalp@mscloud.uni-paderborn.de',
  },
  {
    label: 'Phone',
    href: 'tel:+4917643390704',
    value: '+49 176 43390704',
  },
  { label: 'Location', href: null, value: 'Paderborn, Germany' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pranjal-parmar', value: 'linkedin.com/in/pranjal-parmar' },
  { label: 'GitHub', href: 'https://github.com/pranjalparmar', value: 'github.com/pranjalparmar' },
]

const experience = [
  {
    company: 'Metamorphosis GmbH',
    role: 'Werkstudent Data Annotator (20h/week)',
    dates: 'Feb 2024 - Present',
    location: 'Paderborn, Germany',
    link: 'https://metamorphosis.ai/',
    bullets: [
      'Annotated and validated high-precision medical imaging datasets for AI-assisted surgery.',
      'Optimized annotation workflows to accelerate delivery of model-ready datasets.',
      'Enforced strict clinical quality standards to support reliable medical AI decision-making.',
    ],
  },
  {
    company: 'Mapup Inc.',
    role: 'Business Analyst',
    dates: 'Feb 2022 - Nov 2022',
    location: 'India',
    link: 'https://mapup.ai/',
    extraLink: {
      label: 'Reference Letter',
      href: 'https://github.com/pranjalparmar/Specializations/blob/main/Pranjal_Parmar_MapUp_ReferanceLetter.pdf',
    },
    bullets: [
      'Analyzed transportation, OEM, and last-mile challenges to surface technical priorities.',
      'Translated stakeholder needs into technical requirements for product development.',
      'Built KPI dashboards to provide real-time operational decision support.',
    ],
  },
]

const education = [
  {
    title: 'M.Sc. in Computer Science',
    org: 'Paderborn University',
    dates: 'Apr 2023 - Present',
    location: 'Paderborn, Germany',
    details: ['GPA: 2.3 | Focus: Data and Intelligence'],
  },
  {
    title: "Master's Thesis (Fraunhofer IEM, Heylexie.de)",
    org: 'Safety-by-Design AI Architecture',
    dates: "May '26 - Oct '26",
    location: 'Paderborn, Germany',
    details: [
      'Design and evaluation of a neurosymbolic child-safe AI architecture for children aged 4-7.',
      'Proposes a hybrid neural semantic parser with a symbolic safety governor for traceable safety control.',
      'Benchmarking against NVIDIA NeMo Guardrails using age-specific interaction datasets.',
    ],
  },
  {
    title: "Master's Project: GenSys (Fraunhofer IEM, KI-Marktplatz)",
    org: 'SysML 2.0 Automation',
    dates: "Oct '23 - Aug '24",
    location: 'Paderborn, Germany',
    link: 'https://youtu.be/u6jJniSuL8A',
    details: [
      'Automated SysML 2.0 diagram generation, modification, and explanation from text and images using GPT-4 Vision.',
      'Built a Streamlit interface to streamline system modeling for engineering teams.',
    ],
  },
  {
    title: 'B.E. in Computer Engineering',
    org: 'Gujarat Technological University',
    dates: '2018 - 2022',
    location: 'India',
    details: ['GPA: 1.3'],
  },
]

const projects = [
  {
    title: 'Neurosymbolic Child-Safe AI Architecture',
    timeline: "May '26 - Oct '26",
    description:
      'Designing a hybrid neurosymbolic architecture that combines neural semantic parsing with deterministic symbolic safety controls for children aged 4-7.',
    highlights: [
      'Safety-by-design framework focused on traceable, explainable interaction control.',
      'Evaluation benchmarked against NVIDIA NeMo Guardrails.',
    ],
  },
  {
    title: 'GenSys: SysML 2.0 Automation',
    timeline: "Oct '23 - Aug '24",
    description:
      'Automated SysML 2.0 diagram generation and explanation from prompts and images using GPT-4 Vision.',
    highlights: [
      'Streamlit interface for engineering teams to model system designs faster.',
      'Natural language and image-driven editing for system architecture diagrams.',
    ],
    link: 'https://youtu.be/u6jJniSuL8A',
  },
]

const passionProjects = [
  {
    title: 'VisionExpert-RAG',
    href: 'https://github.com/pranjalparmar/ColPali-Vision-RAG',
    description: 'Visual RAG system using ColPali and Mistral-7B for technical document auditing.',
  },
  {
    title: 'ACC-RAG Architecture',
    href: 'https://github.com/pranjalparmar/Adaptive-Contextual-Compression-RAG',
    description: 'Adaptive contextual retriever fusing text with OCR labels to extract details from engineering manuals.',
  },
  {
    title: 'Multimodal Fracture Detection',
    href: 'https://github.com/pranjalparmar/Multimodal-Fracture-Detection',
    description: 'CNN-based system using MedGemma for image-grounded explanations.',
  },
  {
    title: 'Brain Tumor Detection with YOLO',
    href: 'https://github.com/pranjalparmar/brain_tumor_detetctor',
    description: 'YOLO-based localization model using PyTorch and OpenCV.',
  },
  {
    title: 'Handwritten Digit Recognizer',
    href: 'https://github.com/pranjalparmar/ULEOUR-Case-Study',
    description: 'Automated CI/CD pipeline to train and deploy MNIST digit classification models.',
  },
]

const skills = [
  {
    label: 'Domains',
    items: ['Machine Learning', 'GenAI', 'Agentic AI', 'Computer Vision', 'Neurosymbolic AI'],
  },
  {
    label: 'Languages',
    items: ['Python', 'R', 'Java', 'SQL', 'LaTeX'],
  },
  {
    label: 'AI/ML',
    items: ['PyTorch', 'LangChain', 'NeMo Guardrails', 'YOLO', 'CNN', 'RAG', 'SysML'],
  },
  {
    label: 'Tools',
    items: ['Docker', 'Git', 'FastAPI', 'Streamlit', 'Power BI', 'OpenCV', 'Pandas', 'CI/CD'],
  },
  {
    label: 'Spoken Languages',
    items: ['English (Fluent)', 'German (A2, Learning)', 'Hindi / Gujarati (Native)'],
  },
]

const certificates = [
  {
    title: 'Data Analytics Professional',
    org: 'Google',
    href: 'https://github.com/pranjalparmar/Specializations/blob/main/google%20data%20analytics.pdf',
  },
  {
    title: 'Python for Everybody',
    org: 'Michigan University',
    href: 'https://github.com/pranjalparmar/Specializations/blob/main/Python_Uni_Michigan_Certificate.pdf',
  },
  {
    title: 'Data Analysis with Python',
    org: 'Jovian.ml',
    href: 'https://github.com/pranjalparmar/Specializations/blob/main/data-analysis-python.pdf',
  },
]

const volunteering = [
  {
    title: 'Member',
    org: 'COLOURS EU Alliance',
    href: 'https://colours-alliance.eu/',
  },
  {
    title: 'Member',
    org: 'AIESEC',
    href: 'https://aiesec.org/',
  },
  {
    title: 'Volunteer',
    org: 'ASV Paderborn',
    href: 'https://asv.uni-paderborn.de/de/',
  },
]

const interests = ['Community Building', 'Public Speaking', 'Table Tennis', 'Volleyball', 'Cycling']
</script>

<template>
  <div class="min-h-screen bg-fog text-ink">
    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-hero-glow"></div>
      <div class="pointer-events-none absolute inset-0 bg-grid-lines bg-[length:36px_36px] opacity-40"></div>

      <header class="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 sm:px-10 lg:px-0">
        <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm uppercase tracking-[0.3em] text-dusk">Portfolio</p>
            <h1 class="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Pranjal Parmar
            </h1>
            <p class="mt-4 text-lg text-dusk">
              M.Sc. Computer Science Student | GenAI | Agentic AI | Computer Vision | NLP | RAG
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                class="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-fog transition hover:-translate-y-0.5 hover:bg-dusk"
                href="/resume/Pranjal_Parmar_AltaCV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <a
                class="rounded-full border border-ink/20 bg-white/70 px-5 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                href="mailto:pranjalp@mscloud.uni-paderborn.de"
              >
                Contact
              </a>
            </div>
          </div>

          <div class="relative w-full max-w-xs rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-card">
            <div class="absolute -right-6 top-6 h-20 w-20 rounded-full bg-tide/20 blur-2xl"></div>
            <img
              src="/images/pranjal-photo.png"
              alt="Pranjal Parmar"
              class="h-72 w-full rounded-[28px] object-cover object-top shadow-lg shadow-black/10"
            />
            <div class="mt-4 rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-dusk">
              <p class="font-semibold text-ink">Currently based in Paderborn</p>
              <p>Open to research collaborations and AI product roles.</p>
            </div>
          </div>
        </div>

        <div class="grid gap-3 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-card md:grid-cols-2">
          <div
            v-for="item in socialLinks"
            :key="item.label"
            class="flex items-start gap-3 text-sm text-dusk"
          >
            <span class="mt-1 h-2 w-2 rounded-full bg-clay"></span>
            <div>
              <p class="text-xs uppercase tracking-[0.2em]">{{ item.label }}</p>
              <a v-if="item.href" :href="item.href" class="text-ink hover:text-tide" target="_blank" rel="noreferrer">
                {{ item.value }}
              </a>
              <p v-else class="text-ink">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </header>
    </div>

    <nav class="sticky top-0 z-30 border-y border-ink/5 bg-fog/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3 sm:px-10 lg:px-0">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="whitespace-nowrap rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-dusk transition hover:-translate-y-0.5 hover:border-ink/30"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>

    <main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-0">
      <section id="experience" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Experience</p>
          <h2 class="mt-2 font-display text-3xl">Building applied AI impact</h2>
        </div>
        <div class="grid gap-6">
          <article
            v-for="(item, index) in experience"
            :key="item.company"
            class="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-dusk">{{ item.role }}</p>
                <h3 class="mt-2 font-display text-2xl">
                  <a :href="item.link" target="_blank" rel="noreferrer" class="hover:text-tide">
                    {{ item.company }}
                  </a>
                </h3>
              </div>
              <div class="text-sm text-dusk">
                <p>{{ item.dates }}</p>
                <p>{{ item.location }}</p>
              </div>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-dusk">
              <li v-for="bullet in item.bullets" :key="bullet" class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-tide"></span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div v-if="item.extraLink" class="mt-4">
              <a :href="item.extraLink.href" target="_blank" rel="noreferrer" class="text-sm font-semibold text-tide">
                {{ item.extraLink.label }}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="education" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Education</p>
          <h2 class="mt-2 font-display text-3xl">Academic foundation</h2>
        </div>
        <div class="grid gap-6">
          <article
            v-for="(item, index) in education"
            :key="item.title"
            class="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
            :style="{ animationDelay: `${index * 70}ms` }"
          >
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 class="font-display text-2xl">
                  <a v-if="item.link" :href="item.link" target="_blank" rel="noreferrer" class="hover:text-tide">
                    {{ item.title }}
                  </a>
                  <span v-else>{{ item.title }}</span>
                </h3>
                <p class="text-sm text-dusk">{{ item.org }}</p>
              </div>
              <div class="text-sm text-dusk">
                <p>{{ item.dates }}</p>
                <p>{{ item.location }}</p>
              </div>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-dusk">
              <li v-for="detail in item.details" :key="detail" class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-clay"></span>
                <span>{{ detail }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Projects</p>
          <h2 class="mt-2 font-display text-3xl">Research-driven builds</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            class="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-dusk">{{ project.timeline }}</p>
              <h3 class="mt-2 font-display text-2xl">{{ project.title }}</h3>
              <p class="mt-3 text-sm text-dusk">{{ project.description }}</p>
              <ul class="mt-4 space-y-2 text-sm text-dusk">
                <li v-for="highlight in project.highlights" :key="highlight" class="flex gap-2">
                  <span class="mt-2 h-1.5 w-1.5 rounded-full bg-tide"></span>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noreferrer"
              class="mt-4 text-sm font-semibold text-tide"
            >
              View project
            </a>
          </article>
        </div>
      </section>

      <section id="passion-projects" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Passion Projects</p>
          <h2 class="mt-2 font-display text-3xl">Independent explorations</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(project, index) in passionProjects"
            :key="project.title"
            class="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
            :style="{ animationDelay: `${index * 60}ms` }"
          >
            <h3 class="font-display text-xl">
              <a :href="project.href" target="_blank" rel="noreferrer" class="hover:text-tide">
                {{ project.title }}
              </a>
            </h3>
            <p class="mt-3 text-sm text-dusk">{{ project.description }}</p>
          </article>
        </div>
      </section>

      <section id="skills" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Skills</p>
          <h2 class="mt-2 font-display text-3xl">Core capabilities</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="group in skills"
            :key="group.label"
            class="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
          >
            <h3 class="font-display text-xl">{{ group.label }}</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold text-dusk"
              >
                {{ item }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="certificates" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Certificates</p>
          <h2 class="mt-2 font-display text-3xl">Continuous learning</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="cert in certificates"
            :key="cert.title"
            class="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
          >
            <h3 class="font-display text-xl">
              <a :href="cert.href" target="_blank" rel="noreferrer" class="hover:text-tide">
                {{ cert.title }}
              </a>
            </h3>
            <p class="mt-2 text-sm text-dusk">{{ cert.org }}</p>
          </article>
        </div>
      </section>

      <section id="volunteering" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Volunteering</p>
          <h2 class="mt-2 font-display text-3xl">Community involvement</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="item in volunteering"
            :key="item.org"
            class="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card"
          >
            <p class="text-xs uppercase tracking-[0.3em] text-dusk">{{ item.title }}</p>
            <h3 class="mt-2 font-display text-xl">
              <a :href="item.href" target="_blank" rel="noreferrer" class="hover:text-tide">
                {{ item.org }}
              </a>
            </h3>
          </article>
        </div>
      </section>

      <section id="interests" class="flex flex-col gap-8">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-clay">Interests</p>
          <h2 class="mt-2 font-display text-3xl">Beyond the desk</h2>
        </div>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="interest in interests"
            :key="interest"
            class="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-dusk"
          >
            {{ interest }}
          </span>
        </div>
      </section>
    </main>

    <footer class="border-t border-ink/10 bg-white/60">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-dusk sm:px-10 lg:px-0 lg:flex-row lg:items-center lg:justify-between">
        <p>Pranjal Parmar • M.Sc. Computer Science Student</p>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:pranjalp@mscloud.uni-paderborn.de" class="hover:text-tide">Email</a>
          <a href="https://linkedin.com/in/pranjal-parmar" target="_blank" rel="noreferrer" class="hover:text-tide">LinkedIn</a>
          <a href="https://github.com/pranjalparmar" target="_blank" rel="noreferrer" class="hover:text-tide">GitHub</a>
          <a href="/resume/Pranjal_Parmar_AltaCV.pdf" target="_blank" rel="noreferrer" class="hover:text-tide">Download CV</a>
        </div>
      </div>
    </footer>
  </div>
</template>
