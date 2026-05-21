/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    // dynamic col-spans used in bento + dynamic text colors
    'md:col-span-2','md:col-span-3','md:col-span-4','md:col-span-5','md:col-span-6',
    'text-leaf','text-saffron','text-ashoka','text-ash',
    'bg-leaf','bg-saffron','bg-ashoka'
  ],
  theme: {
    extend: {
      colors: {
        cream:    "#FAF7F2",
        paper:    "#FFFFFF",
        ink:      "#0E1116",
        ash:      "#5B616E",
        line:     "#E8E4DC",
        saffron:  "#FF7A1A",
        saffronL: "#FFE7D3",
        leaf:     "#0F8A3C",
        leafL:    "#DCF2E1",
        ashoka:   "#1B3FA0",
        ashokaL:  "#E0E8FB",
        lemon:    "#F5E663",
        ink2:     "#1A1D24"
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Playfair Display"', "serif"],
        sans:    ['"Inter"', "system-ui", "sans-serif"],
        mono:    ['"JetBrains Mono"', "monospace"]
      },
      fontSize: {
        'mega':  ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'huge':  ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.0',  letterSpacing: '-0.03em' }]
      },
      boxShadow: {
        soft:  "0 1px 2px rgba(14,17,22,0.04), 0 8px 24px rgba(14,17,22,0.06)",
        lift:  "0 4px 12px rgba(14,17,22,0.06), 0 24px 48px rgba(14,17,22,0.08)",
        glow:  "0 0 0 6px rgba(255,122,26,0.12)"
      },
      animation: {
        'marquee':    'marquee 40s linear infinite',
        'marquee-r':  'marqueeR 50s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'blob':       'blob 12s ease-in-out infinite'
      },
      keyframes: {
        marquee:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeR: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        blob:     {
          '0%,100%': { borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' },
          '50%':     { borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%' }
        }
      }
    }
  },
  plugins: []
}
