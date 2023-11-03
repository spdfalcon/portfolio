/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-me': '#000',
        'white-me': '#fff',
        'gray-text1': '#535353',
        'gray-text2': '#454D55',
        'gray-text3': '#A6A6AA',
        'gray-text4': '#ECEEE5',
        'dark1': '#1D1D1D',
        'orange-text': '#F2994A',


        'figma-bg': '#F3F6FB',
        'adobe-bg': '#FEF4FD',
        'illustrator-bg': '#FCF9F4',
        'photoshop-bg': '#F9FCF2',
        'notion-bg': '#F9F9F9',
        'asana-bg': '#F6F7FC',
        'marvel-bg': '#FCF9F4',


        'gradient-headerA1': '#F8FAFF',
        'gradient-headerA2': '#EEF4FF',
        'gradient-headerA3': '#FFECEC',

        'gradient-headerB1': '#F8D9D8',
        'gradient-headerB2': '#F5F6F7',
        'gradient-headerB3': '#F3DFED',

        'gradient-boxA1': '#E7F3F2',
        'gradient-boxA2': '#EBF4F8',
        'gradient-boxA3': '#DFEEF9',


        'gradient-boxB1': '#F5E9F1',
        'gradient-boxB2': '#EBF4F8',
        'gradient-boxB3': '#F7E3E2',


        'gradient-boxC1': '#F4E8F3',
        'gradient-boxC2': '#F3EFF6',
        'gradient-boxC3': '#EEE0F9',

        'work-text' : '#34113F',
        'work-text-gray' : '#475467'
        
      },
      fontFamily: {
        'inter100': 'inter100',
        'inter200': 'inter200',
        'inter300': 'inter300',
        'inter500': 'inter500',
        'inter600': 'inter600',
        'inter800': 'inter800',
        'inter900': 'inter900',
      }
    },
    container:{
      center:true
    }
  },
  plugins: [],
}

