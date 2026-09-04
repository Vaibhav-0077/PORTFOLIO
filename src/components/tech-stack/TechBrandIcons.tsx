import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ReactIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
    <g stroke="#00D8FF" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <div className={`${className} bg-[#3178C6] rounded-md flex items-center justify-center font-bold text-white text-[11px] leading-none select-none shadow-sm`}>
    <span>TS</span>
  </div>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <div className={`${className} bg-[#F7DF1E] rounded-md flex items-center justify-center font-bold text-black text-[11px] leading-none select-none shadow-sm`}>
    <span>JS</span>
  </div>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

export const HtmlCssIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <div className={`${className} flex items-center justify-center gap-0.5 select-none`}>
    <div className="w-1/2 h-full bg-[#E34F26] rounded-sm flex items-center justify-center text-white font-extrabold text-[8px]">
      5
    </div>
    <div className="w-1/2 h-full bg-[#1572B6] rounded-sm flex items-center justify-center text-white font-extrabold text-[8px]">
      3
    </div>
  </div>
);

export const NodeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#5FA04E">
    <path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2zm6.75 14.1l-6.75 3.97-6.75-3.97V7.9l6.75-3.97 6.75 3.97v8.2z" />
    <path d="M11.2 9.5h1.6v5h-1.6z" fill="#5FA04E" />
  </svg>
);

export const ExpressIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <div className={`${className} bg-slate-900 dark:bg-black border border-slate-700 rounded-md flex items-center justify-center font-mono font-bold text-white text-[11px] leading-none select-none shadow-sm`}>
    <span>ex</span>
  </div>
);

export const MongoIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#22C55E">
    <path d="M12 2C11.5 2.5 7 9 7 14.5c0 3.5 2.5 6.5 5 7.5 2.5-1 5-4 5-7.5C17 9 12.5 2.5 12 2zm0 18c-1.5-.7-3.5-2.8-3.5-5.5 0-3.8 3.5-8.5 3.5-8.5s3.5 4.7 3.5 8.5c0 2.7-2 4.8-3.5 5.5z" />
  </svg>
);

export const CloudinaryIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#3448C5">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#F05032">
    <path d="M21.6 10.8l-8.4-8.4a2.4 2.4 0 0 0-3.4 0L7.4 4.8l3.1 3.1a2 2 0 0 1 2.5 2.5l3 3a2 2 0 1 1-1.4 1.4l-2.9-2.9v4.2a2 2 0 1 1-2 0v-4.4a2 2 0 0 1-1.1-2.6L5.6 6.1 2.4 9.3a2.4 2.4 0 0 0 0 3.4l8.4 8.4a2.4 2.4 0 0 0 3.4 0l7.4-7.4a2.4 2.4 0 0 0 0-3.4z" />
  </svg>
);

export const RestApiIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <div className={`${className} bg-purple-600 rounded-md flex items-center justify-center font-bold text-white text-[9px] leading-none select-none shadow-sm`}>
    <span>API</span>
  </div>
);

export const renderBrandIcon = (iconId: string, className = 'w-6 h-6') => {
  switch (iconId) {
    case 'react':
      return <ReactIcon className={className} />;
    case 'typescript':
      return <TypeScriptIcon className={className} />;
    case 'javascript':
      return <JavaScriptIcon className={className} />;
    case 'tailwind':
      return <TailwindIcon className={className} />;
    case 'htmlcss':
      return <HtmlCssIcon className={className} />;
    case 'nodejs':
      return <NodeIcon className={className} />;
    case 'express':
      return <ExpressIcon className={className} />;
    case 'mongodb':
      return <MongoIcon className={className} />;
    case 'cloudinary':
      return <CloudinaryIcon className={className} />;
    case 'git':
      return <GitIcon className={className} />;
    case 'restapi':
    default:
      return <RestApiIcon className={className} />;
  }
};
