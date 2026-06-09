'use client';
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { cn } from '@/lib/utils';
import { RefObject, useRef, useState } from 'react';

type facts = {
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
};
export const ScrollBar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const designEngineeringPoints: facts[] = [
    {
      title: 'The Synergy of Design and Engineering: Bridging the Gap',
      subtitle: 'Understanding Interdisciplinary Collaboration',
      tags: ['Collaboration', 'Interdisciplinary', 'Culture'],
      content: `
                Introduction: 
                The world of design engineering exists at the confluence of creativity and technical precision...
                [Long exposition about the importance, challenges, and opportunities found in fostering collaboration between designers and engineers. Explores case studies, communication techniques, collaborative tools, cross-functional teams, and mindset shifts required to build organizational cultures where design and engineering complement rather than compete with one another. Discuss the impact of collective ownership, mutual respect, shared vocabulary, and iterative processes on product innovation...]
                ...
                Conclusion: 
                By bridging gaps and promoting synergy, organizations unlock breakthrough innovations that delight users and withstand long-term scrutiny.
            `,
    },
    {
      title: 'Human-Centered Design in Engineering Solutions',
      subtitle: 'Placing the User at the Core of Engineering',
      tags: ['Human-Centered Design', 'User Experience', 'Empathy'],
      content: `
                Introduction: 
                Successful solutions stem from deeply understanding user needs, desires, and pain points...
                [Deep dive on human-centered design principles, integrating user research, personas, journey mapping, prototyping, user feedback, accessibility, and inclusive design into engineering processes. Analyze real-world examples where human-centered approaches yielded superior outcomes, and contrast cases where such considerations were overlooked...]
                ...
                Conclusion: 
                Embracing human-centered methods in design engineering ensures products resonate, enable, and empower their intended audiences.
            `,
    },
    {
      title: 'Prototyping as a Communication Tool',
      subtitle: 'Rapid Validation in Design Engineering',
      tags: ['Prototype', 'Iteration', 'Feedback'],
      content: `
                Introduction: 
                Prototyping serves not just as a means to test ideas, but also as a universal language in multidisciplinary teams...
                [Exploration of various prototyping methodologies—low/high fidelity, digital/physical, interactive/static. Discuss how prototyping accelerates decision-making, reduces misunderstandings, supports agile engineering, and enables early detection of design flaws. Include guidance on aligning prototype fidelity with project stage, leveraging tools for remote collaboration, and systematically capturing user and engineering feedback...]
                ...
                Conclusion: 
                Effective prototyping strategies transform abstract ideas into shared visions that guide both design and engineering efforts.
            `,
    },
    {
      title: 'Design Systems: Harmonizing Aesthetics and Functionality',
      subtitle: 'Building Consistency and Scalability',
      tags: ['Design Systems', 'Scalability', 'Consistency'],
      content: `
                Introduction: 
                Design systems are more than a set of static guidelines—they’re living resources that synchronize design and engineering across large-scale efforts...
                [Examine foundational components of robust design systems, including tokens, patterns, components, documentation, and governance structures. Survey ways design engineering teams codify and enforce consistency through shared libraries, automated linting, and documentation portals. Present approaches for evolving systems without stifling creativity, the role of open-source, cross-team ownership, and strategies to measure the ROI of design systems...]
                ...
                Conclusion: 
                A well-implemented design system becomes a single source of truth, empowering teams to move faster with confidence and coherence.
            `,
    },
    {
      title: 'Sustainable Design Engineering: Ethics and Responsibility',
      subtitle: 'Designing for the Future',
      tags: ['Sustainability', 'Ethics', 'Environmental Impact'],
      content: `
                Introduction: 
                The responsibility of design engineers extends beyond function and form to encompass planet and people...
                [Discuss sustainable materials, lifecycle thinking, eco-design, minimizing waste, ethical supply chains, and the environmental impact of software/hardware. Dive into frameworks (such as cradle-to-cradle, lifecycle analysis), regulations, stakeholder pressures, and stories of sustainable innovation. Analyze the intersection of ethics, accessibility, diversity, privacy, and user well-being as essential facets of responsible design engineering...]
                ...
                Conclusion: 
                Champions of responsible design engineering shape not only successful products, but a healthier, more equitable world.
            `,
    },
    {
      title: 'The Evolution of Toolchains in Design Engineering',
      subtitle: 'From Sketches to Automated Workflows',
      tags: ['Tooling', 'Automation', 'Process'],
      content: `
                Introduction: 
                The rapid evolution of design and engineering tools has revolutionized how ideas become reality...
                [Survey the history and current landscape of tools – from hand drawings to CAD, design-to-code solutions, virtual reality, collaborative cloud platforms, version control for design assets, and automated testing for UIs. Evaluate the impact of plugins, APIs, design tokens, and continuous integration on streamlining handoff and fostering closer alignment between designers and engineers...]
                ...
                Conclusion: 
                By harnessing modern toolchains, teams can reduce friction, improve quality, and focus creativity on solving user problems.
            `,
    },
    {
      title: 'Accessibility as a Foundation, Not a Feature',
      subtitle: 'Inclusive Practices in Design Engineering',
      tags: ['Accessibility', 'Inclusion', 'Universal Design'],
      content: `
                Introduction: 
                Inclusive design is not a checkbox, but a foundational mindset guiding every engineering decision...
                [Comprehensive analysis of accessible design principles, WCAG, ARIA, semantic markup, assistive tech support, and building for edge cases. Evaluate strategies for baking accessibility into workflows, the business and legal case for accessibility, methods for user research with underrepresented groups, and fostering empathy within engineering teams...]
                ...
                Conclusion: 
                Accessible products benefit everyone, ensuring digital experiences are truly universal.
            `,
    },
    {
      title: 'Digital Twins and Simulation in Design Engineering',
      subtitle: 'Previewing the Future in Virtual Spaces',
      tags: ['Simulation', 'Digital Twin', 'Modeling'],
      content: `
                Introduction: 
                The advent of digital twins and advanced simulation tools has transformed design engineering, enabling teams to foresee and address challenges before building...
                [In-depth coverage of digital twin concepts, integration with IoT, predictive maintenance, parametric modeling, and VR/AR visualization. Explore use cases from architecture to automotive, discuss the impact on iterative development, risk mitigation, cost savings, and user engagement. Offer guidance on adopting simulation-first methodologies and potential limitations...]
                ...
                Conclusion: 
                Simulations unlock a predictive edge, streamlining design engineering from drawing board to deployment.
            `,
    },
    {
      title: 'Cross-Platform Product Thinking',
      subtitle: 'Orchestrating Experiences Across Ecosystems',
      tags: ['Cross-Platform', 'Systems Thinking', 'Consistency'],
      content: `
                Introduction: 
                Users interact with products across manifold platforms; delivering cohesive experiences demands broad, systems-level design engineering vision...
                [Examine patterns for designing and engineering products that span mobile, web, desktop, voice, and IoT, ensuring consistency in brand, interaction, and data. Discuss challenges in adapting features, responsive layouts, APIs, synchronization, and analytics. Strategies for architecting core logic, modular components, and layered abstraction are explored...]
                ...
                Conclusion: 
                Cross-platform product thinking makes experiences not just achievable everywhere, but delightful anywhere.
            `,
    },
  ];
  return (
    <div className={cn('relative h-dvh w-full bg-neutral-100 dark:bg-neutral-950 [(--background:#fafafa)] dark:[(--background:#0a0a0a)]')}>
      <ScrollBarComponent ref={containerRef} />
      <div
        ref={containerRef}
        className={cn(
          'font-inter flex h-screen w-full list-decimal flex-col items-start gap-2 rounded-lg  px-6 selection:bg-neutral-200 bg-[var(--background)] selection:text-neutral-900 md:gap-10 md:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden',
          'overflow-y-scroll',
          'shadow-[inset_0_0_1px_1px_rgba(190,190,190,0.1)]',
          'pt-10 pb-6 md:pt-18 md:pb-10',
        )}
      >
        {/* Headings */}
        <div className="mb-12 flex flex-col gap-6">
          <h1 className="md:text-4xl text-3xl font-semibold tracking-tight text-neutral-100">
            Design
            <span className="mx-2 md:text-3xl text-xl">×</span>
            Engineering
          </h1>
          <h2 className="md:text-2xl text-xl tracking-tight text-neutral-300">
            Where Creativity Meets Technical Excellence
          </h2>
        </div>
        {designEngineeringPoints.map((item, idx) => (
          <div
            key={item.title + idx}
            className="relative flex items-start gap-2 py-4 pl-8 text-neutral-200"
          >
            <div className="font-meidum absolute left-0 bg-linear-to-br from-neutral-100 via-neutral-200 to-neutral-300 bg-clip-text text-xl md:text-2xl font-semibold text-transparent">
              {`${idx + 1}.`}
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <h2 className="mb-1 md:text-2xl  text-xl font-medium text-neutral-200">
                  {item.title}
                </h2>
                <h3 className="text-base  text-neutral-200">
                  {item.subtitle}
                </h3>
                <p className="mt-2 flex items-center gap-2">
                  {item.tags.map((inner, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-neutral-800 px-1.5 py-0.5 text-xs/loose font-medium text-neutral-400 transition-colors duration-100 ease-out select-none hover:text-neutral-400"
                    >
                      {inner}
                    </span>
                  ))}
                </p>
              </div>
              <p className="max-w-5xl text-base/loose text-balance text-neutral-300">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// This is the Scroll Bar Component
const ScrollBarComponent = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => {
  const [value, setValue] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const scroll = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollHeight = useMotionTemplate`${scroll}%`;
  useMotionValueEvent(scroll, 'change', (latest) => {
    setValue(Math.floor(latest));
  });

  return (
    <div
      className={cn(
        'div-center fixed top-1/2 right-10 z-1 h-100 w-full max-w-[80px] -translate-y-1/2 rounded-2xl bg-neutral-950 py-8 text-neutral-500',
        'shadow-[0_1px_2px_1px_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.1),inset_0_0_1px_1px_rgba(180,180,180,0.1)]',
      )}
    >
      <div
        className={cn('flex h-full w-1 items-start rounded-sm bg-neutral-800')}
      >
        <motion.div
          className="relative w-full rounded-t-sm bg-linear-to-b from-orange-500 via-orange-600 to-orange-700"
          style={{
            height: scrollHeight,
          }}
        >
          <motion.div className="absolute bottom-0 left-1/2 flex h-[2px] w-4 -translate-x-1/2 items-center rounded-xs bg-orange-700">
            <motion.span className="absolute right-5 text-xs font-bold text-orange-600">
              {`${value}`}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
