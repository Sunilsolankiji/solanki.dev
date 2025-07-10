import type { SVGProps } from "react";

export function AngularIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" {...props}>
      <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 203.9,186.3 218.1,63.2"/>
      <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2"/>
      <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1L125,52.1z M142,135.4H108.1l16.9-42.2L142,135.4z"/>
    </svg>
  );
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#3178c6" d="M0,0H48V48H0Z"/>
      <path fill="#fff" d="M28.3,24.13h-9.53V40h-4.2V11.87h17.9v3.9H28.3v8.36ZM40,29.33a5.21,5.21,0,0,1-1.4.1,3.42,3.42,0,0,1-2.5-.9,3,3,0,0,1-1-2.3,4,4,0,0,1,.8-2.5,3.3,3.3,0,0,1,2.3-1.1,4.72,4.72,0,0,1,1.5.2V20.13a6.49,6.49,0,0,0-2-.3,6.53,6.53,0,0,0-4.8,1.7,6.3,6.3,0,0,0-1.8,4.9,7.12,7.12,0,0,0,2.1,5.2,7,7,0,0,0,5.4,2.2,6.7,6.7,0,0,0,2.7-.5v-4.2Z"/>
    </svg>
  );
}

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="64" fill="black"/>
      <path fill="url(#a)" d="M106.3,31.32,49.83,101.52a2.12,2.12,0,0,1-2.29.35L21.67,86.13V31.32H38.6V77.16l27-18.28L38.6,31.32Z"/>
      <path fill="white" d="M89.37,31.32V101.76h17V31.32Z"/>
      <defs>
        <linearGradient id="a" x1="112.5" y1="31.32" x2="35.5" y2="101.52" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity=".3"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#38b2ac" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.334,13.382,8.973,12,6.001,12z"></path>
    </svg>
  );
}

export function FirebaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#FFCA28" d="M12,2.37L3.63,6.33L12,21.67L20.37,6.33L12,2.37Z" />
      <path fill="#FFA000" d="M3.63,6.33L12,2.37V21.67L3.63,6.33Z" />
      <path fill="#F57C00" d="m17.43 8.7-10.8-2.37L3.63 6.33 12 2.37l5.43 6.33z"/>
    </svg>
  )
}

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  )
}
