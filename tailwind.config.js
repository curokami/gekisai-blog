/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
    ],
    theme: {
      extend: {colors: {
        sumiiro: '#1c1c1c',      // 墨色
        aiiro: '#0f2540',        // 藍色
        tetsukon: '#17184b',     // 鉄紺
        kokiake: '#8b2e3a',      // 深緋
        kuromidori: '#223322',   // 黒緑
        murasaki: '#3a243b',     // 紫紺
        ginnezu: '#c5c5c5',  // 銀鼠
        灰色系: '#999999', // 灰色系
        藍色系: '#0f2540', // 藍色系
        ruri: '#264e8c',
        sora: '#67a5d9',
        syuiro: '#d73c2c',
      },},
    },
    plugins: [],
  }