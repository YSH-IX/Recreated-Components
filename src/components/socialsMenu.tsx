import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function SocialsMenu() {
  const Links = [
    {
      icon: XSvg,
      link: 'https://x.com/yshtwts',
      tooltip: 'X',
    },
    {
      icon: GithubSvg,
      link: 'https://github.com/YSH-IX',
      tooltip: 'Github',
    },
    {
      icon: GmailSvg,
      link: 'mailto:yashx024@gmail.com',
      tooltip: 'Mail',
    },
    {
      icon: SubstackSvg,
      link: 'https://substack.com/@theken1',
      tooltip: 'Substack',
    },
    {
      icon: DiscordSvg,
      link: 'https://x.com/yshtwts',
      tooltip: 'Discord',
    },
    {
      icon: SpotifySvg,
      link: 'https://open.spotify.com/user/313kqohwqcfpufixxhhwem7idzsu',
      tooltip: 'Spotify',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 rounded-4xl bg-neutral-800 p-4 shadow-[0_0_0_1px] inset-shadow-[0_0_0_1px] shadow-neutral-950/10 inset-shadow-black/5 sm:grid-cols-3">
      {Links.map((item, idx) => (
        <LinkContainer key={idx} link={item.link} tooltip={item.tooltip}>
          <item.icon className="size-16 fill-neutral-50" />
        </LinkContainer>
      ))}
    </div>
  );
}

// Component for the Actual Link.
const LinkContainer = ({
  children,
  link,
  tooltip,
}: {
  children: ReactNode;
  link: string;
  tooltip: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      draggable="false"
      className={cn(
        'div-center',
        'grid-cols-1 rounded-2xl border border-neutral-900 bg-neutral-800 p-4 will-change-transform',
        '-translate-y-1 shadow-[0_2px_2px] inset-shadow-[0_2px_2px] shadow-neutral-950 inset-shadow-white/15',
        'cursor-pointer transition-transform duration-100 ease-out',
        'group relative hover:translate-y-0 hover:shadow-[0_-2px_2px] hover:inset-shadow-[0_4px_10px] hover:shadow-neutral-800/1 hover:inset-shadow-neutral-950',
        'active:translate-y-0 active:shadow-[0_-2px_2px] active:inset-shadow-[0_4px_10px] active:shadow-neutral-800/1 active:inset-shadow-neutral-950',
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded border border-neutral-900 bg-neutral-800 px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 inset-shadow-[0_1.5px] inset-shadow-white/15 transition-opacity duration-200 group-hover:opacity-100',
        )}
      >
        {tooltip}
      </div>
      {children}
    </Link>
  );
};

const GmailSvg = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      className={className}
      {...rest}
    >
      <path
        fill="#4caf50"
        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
      ></path>
      <path
        fill="#1e88e5"
        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
      ></path>
      <polygon
        fill="#e53935"
        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
      ></polygon>
      <path
        fill="#c62828"
        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
      ></path>
      <path
        fill="#fbc02d"
        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
      ></path>
    </svg>
  );
};

const GithubSvg = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      className={className}
      {...rest}
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  );
};

const DiscordSvg = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      className={className}
      {...rest}
    >
      <path
        fill="#8c9eff"
        d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
      ></path>
    </svg>
  );
};

const SubstackSvg = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      className={className}
      {...rest}
    >
      <defs opacity=".38">
        <rect
          id="b9-AsiUWV4BYTBJAQTByOa"
          width="42.947"
          height="48"
          x="3.526"
          opacity=".38"
        ></rect>
      </defs>
      <path d="M43,11H8V5h35V11z"></path>
      <path d="M43,19H8v-6h35V19z"></path>
      <path d="M43,44.805L25.984,34.169L8,44.748V21h35V44.805z"></path>
    </svg>
  );
};

const SpotifySvg = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      className={className}
      {...rest}
    >
      <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M19.731,21c-0.22,0-0.33-0.11-0.55-0.22 c-1.65-0.991-3.74-1.54-5.94-1.54c-1.21,0-2.53,0.22-3.63,0.44c-0.22,0-0.44,0.11-0.55,0.11c-0.44,0-0.77-0.33-0.77-0.77 s0.22-0.77,0.66-0.77c1.43-0.33,2.861-0.55,4.401-0.55c2.53,0,4.84,0.66,6.82,1.76c0.22,0.22,0.44,0.33,0.44,0.77 C20.39,20.78,20.06,21,19.731,21z M20.94,17.921c-0.22,0-0.44-0.11-0.66-0.22c-1.87-1.21-4.511-1.87-7.37-1.87 c-1.43,0-2.751,0.22-3.74,0.44c-0.22,0.11-0.33,0.11-0.55,0.11c-0.55,0-0.881-0.44-0.881-0.881c0-0.55,0.22-0.77,0.77-0.991 c1.32-0.33,2.641-0.66,4.511-0.66c3.08,0,5.94,0.77,8.361,2.2c0.33,0.22,0.55,0.55,0.55,0.881 C21.82,17.48,21.491,17.921,20.94,17.921z M22.37,14.4c-0.22,0-0.33-0.11-0.66-0.22c-2.2-1.21-5.39-1.98-8.47-1.98 c-1.54,0-3.19,0.22-4.621,0.55c-0.22,0-0.33,0.11-0.66,0.11c-0.66,0.111-1.1-0.44-1.1-1.099s0.33-0.991,0.77-1.1 C9.39,10.22,11.26,10,13.24,10c3.41,0,6.93,0.77,9.681,2.2c0.33,0.22,0.66,0.55,0.66,1.1C23.471,13.96,23.03,14.4,22.37,14.4z"></path>
    </svg>
  );
};

const XSvg = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      className={className}
      {...rest}
    >
      <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
    </svg>
  );
};
