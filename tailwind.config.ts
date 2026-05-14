import type { Config } from "tailwindcss";
const config: Config = { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"], theme:{extend:{colors:{gold:'#f6c453',dark:'#07070a',panel:'#11121a'},boxShadow:{glow:'0 0 45px rgba(246,196,83,.22)'}}}, plugins:[]};
export default config;
