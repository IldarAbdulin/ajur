import React from 'react';

import About from './about/About';
import ParallaxEffect from './parallax/Parallax';
import Sewing from './sewing/Sewing';
import Services from './services/Services';

import { Parallax } from 'react-parallax';
import FirstImage from '../../assets/projects/1.jpg';
import SecondImage from '../../assets/projects/2.jpg';
import ThirdImage from '../../assets/projects/3.jpg';
import FourthImage from '../../assets/projects/4.jpg';
import FifthImage from '../../assets/projects/5.jpg';
import SixthImage from '../../assets/projects/6.jpg';
import SeventhImage from '../../assets/projects/7.jpg';
import EighthImage from '../../assets/projects/8.jpg';

const firstParallax = [
  { id: 1, image: FirstImage, alt: '1' },
  { id: 2, image: SecondImage, alt: '2' },
  { id: 3, image: ThirdImage, alt: '3' },
];
const secondParallax = [
  { id: 1, image: FourthImage, alt: '1' },
  { id: 2, image: FifthImage, alt: '2' },
  { id: 3, image: SixthImage, alt: '3' },
];
const thirdParallax = [
  { id: 1, image: SeventhImage, alt: '1' },
  { id: 2, image: EighthImage, alt: '2' },
  { id: 3, image: SecondImage, alt: '3' },
];

const sewingArr = [
  {
    id: 1,
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.1483 6.948L26.1743 2.96325C25.2375 2.49461 24.2045 2.25042 23.1571 2.25H21.1838C20.9519 2.90924 20.5211 3.48023 19.9508 3.88416C19.3805 4.28808 18.6989 4.50502 18.0001 4.50502C17.3012 4.50502 16.6196 4.28808 16.0493 3.88416C15.4791 3.48023 15.0482 2.90924 14.8163 2.25H12.8431C11.7956 2.25042 10.7626 2.49461 9.82581 2.96325L1.85181 6.948C1.34701 7.20051 0.955558 7.63353 0.755091 8.16116C0.554624 8.68879 0.559789 9.2725 0.769561 9.7965L3.68331 17.0798C3.90176 17.6262 4.3256 18.0653 4.86396 18.3029C5.40233 18.5406 6.01237 18.5578 6.56331 18.351L7.35306 18.054L6.93006 29.079C6.90706 29.6838 7.0063 30.287 7.22185 30.8526C7.43739 31.4181 7.76481 31.9344 8.1845 32.3705C8.6042 32.8066 9.10756 33.1535 9.66445 33.3905C10.2213 33.6276 10.8203 33.7498 11.4256 33.75H24.5746C25.18 33.7498 25.7792 33.6275 26.3362 33.3903C26.8933 33.1532 27.3967 32.806 27.8165 32.3697C28.2362 31.9334 28.5636 31.4168 28.779 30.851C28.9944 30.2852 29.0934 29.6817 29.0701 29.0768L28.6471 18.054L29.4391 18.351C29.99 18.5578 30.6 18.5406 31.1384 18.3029C31.6768 18.0653 32.1006 17.6262 32.3191 17.0798L35.2306 9.7965C35.4403 9.2725 35.4455 8.68879 35.245 8.16116C35.0446 7.63353 34.6531 7.20051 34.1483 6.948ZM12.9691 5.625H12.8431C12.3198 5.62504 11.8037 5.74674 11.3356 5.9805L4.28406 9.504L6.40581 14.805L10.9193 13.113L10.3006 29.2072C10.2948 29.3585 10.3197 29.5094 10.3736 29.6509C10.4276 29.7924 10.5095 29.9215 10.6146 30.0305C10.7196 30.1396 10.8456 30.2263 10.9849 30.2855C11.1243 30.3447 11.2742 30.3751 11.4256 30.375H24.5723C24.7239 30.3751 24.874 30.3446 25.0135 30.2853C25.153 30.2259 25.2791 30.139 25.3841 30.0297C25.4892 29.9205 25.5711 29.7911 25.6249 29.6494C25.6788 29.5076 25.7034 29.3565 25.6973 29.205L25.0763 13.113L29.5898 14.805L31.7116 9.504L24.6646 5.9805C24.1957 5.7464 23.6788 5.62469 23.1548 5.625H23.0288C22.3969 6.33368 21.622 6.90056 20.7553 7.28835C19.8886 7.67615 18.9496 7.87608 18.0001 7.875C17.0502 7.8764 16.1107 7.67662 15.2436 7.28882C14.3765 6.90101 13.6013 6.33396 12.9691 5.625Z"
          fill="black"
        />
      </svg>
    ),
    p: 'Разработка коллекций с 0',
  },
  {
    id: 2,
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_37_252)">
          <path
            d="M9 17.4099V26.9999H18.59L16.59 24.9999H11V19.4099L9 17.4099Z"
            fill="black"
          />
          <path
            d="M34.87 32.29L32 29.38V32H4.00002V27.85H6.00002V26.25H4.00002V19.6H6.00002V18H4.00002V11.6H6.00002V9.99996H4.00002V4.40996L19.94 20.26V17.44L3.71002 1.28996C3.57015 1.14893 3.39145 1.05275 3.1967 1.01368C3.00195 0.974607 2.79998 0.994419 2.61654 1.07059C2.43309 1.14675 2.27649 1.27582 2.16668 1.44134C2.05688 1.60686 1.99886 1.80133 2.00002 1.99996V33C2.00002 33.2652 2.10537 33.5195 2.29291 33.7071C2.48045 33.8946 2.7348 34 3.00002 34H34.16C34.3586 34.0011 34.5531 33.9431 34.7186 33.8333C34.8841 33.7235 35.0132 33.5669 35.0894 33.3834C35.1656 33.2 35.1854 32.998 35.1463 32.8033C35.1072 32.6085 35.011 32.4298 34.87 32.29Z"
            fill="black"
          />
          <path
            d="M24 29.9999H28C28.5304 29.9999 29.0391 29.7892 29.4142 29.4141C29.7893 29.0391 30 28.5304 30 27.9999V8.69992L27.7 4.46992C27.5221 4.16174 27.2652 3.9066 26.9559 3.73081C26.6465 3.55503 26.2958 3.46497 25.94 3.46992C25.5761 3.47281 25.22 3.5749 24.9098 3.76521C24.5997 3.95552 24.3474 4.22683 24.18 4.54992L22 8.71992V27.9999C22 28.5304 22.2107 29.0391 22.5858 29.4141C22.9609 29.7892 23.4696 29.9999 24 29.9999ZM24 9.19992L25.94 5.42992L28 9.20992V23.9999H24V9.19992ZM24 25.6299H28V28.0699H24V25.6299Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_37_252">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    p: 'Разработка лекал и тех.документации',
  },
  {
    id: 3,
    svg: (
      <svg
        width="44"
        height="36"
        viewBox="0 0 44 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.29991 0.609619L4.20936 7.52499C3.73929 10.522 4.12171 13.6101 5.29991 16.3135H9.6853V0.609619H5.29991ZM11.1978 0.609619V12.3141H11.447C11.9798 12.3141 12.4095 11.7977 12.4095 11.17V0.609619H11.1978ZM13.9306 0.609619V11.17C13.9306 12.7799 12.822 14.086 11.447 14.086H11.1978V22.3581H12.4783V16.3135H14.1626C14.1626 16.3135 14.8158 14.7644 15.3314 13.5089C15.7353 12.5774 16.5431 11.98 17.4369 11.98H24.329C25.6181 11.98 26.6665 13.2051 26.6665 14.7239V23.9882H2.23022L3.13858 30.9239H39.1103L40.0126 24.535L38.1994 0.609619H13.9306ZM40.5798 2.97887C40.1587 3.01937 39.8494 3.45474 39.8923 3.94074L40.2619 8.74C40.2962 9.226 40.6658 9.5905 41.0783 9.55C41.4994 9.5095 41.8001 9.06399 41.7658 8.57799L41.4048 3.78887C41.3705 3.33324 41.0439 2.97887 40.6572 2.97887H40.5798ZM33.1205 2.98899C34.9853 2.98899 36.4892 4.76087 36.4892 6.95799C36.4892 9.15512 34.9853 10.927 33.1205 10.927C31.2556 10.927 29.7517 9.15512 29.7517 6.95799C29.7517 4.76087 31.2556 2.98899 33.1205 2.98899ZM33.1205 4.76087C32.0978 4.76087 31.2556 5.75312 31.2556 6.95799C31.2556 8.17299 32.0978 9.15512 33.1205 9.15512C34.1431 9.15512 34.9853 8.17299 34.9853 6.95799C34.9853 5.75312 34.1431 4.76087 33.1205 4.76087ZM33.1205 13.8632C35.4064 13.8632 37.2626 16.0604 37.2626 18.7435C37.2626 21.4367 35.4064 23.6237 33.1205 23.6237C30.8345 23.6237 28.9783 21.4367 28.9783 18.7435C28.9783 16.0604 30.8345 13.8632 33.1205 13.8632ZM33.1205 15.6452C31.6681 15.6452 30.4908 17.0324 30.4908 18.7435C30.4908 20.4546 31.6681 21.8316 33.1205 21.8316C34.5728 21.8316 35.7415 20.4546 35.7415 18.7435C35.7415 17.0324 34.5728 15.6452 33.1205 15.6452ZM7.96741 17.6196V19.4016H9.6939V17.6196H7.96741ZM3.13858 32.9185V35.6016H39.0931V32.9185H3.13858Z"
          fill="black"
        />
      </svg>
    ),
    p: 'Пошив эталонных образцов',
  },
  {
    id: 4,
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 43 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9251 3.62109C10.0193 3.62109 7.39306 3.93398 5.55212 4.41562C4.63165 4.6568 3.91023 4.94367 3.47267 5.21508C3.03427 5.48578 2.93433 5.68617 2.93433 5.80078C2.93433 5.91539 3.03427 6.11578 3.47267 6.38648C3.91023 6.65789 4.63165 6.94477 5.55212 7.18594C7.39306 7.66406 10.0193 7.98047 12.9251 7.98047C15.831 7.98047 18.4597 7.66406 20.2989 7.18594C21.2228 6.94477 21.945 6.65789 22.3818 6.38648C22.8185 6.11578 22.9193 5.91539 22.9193 5.80078C22.9193 5.68617 22.8185 5.48578 22.3818 5.21508C21.945 4.94367 21.2228 4.6568 20.2989 4.41562C18.4597 3.93398 15.831 3.62109 12.9251 3.62109ZM32.5859 4.95563C32.3759 4.95563 32.1659 4.95562 31.956 4.96687C30.2595 5.04773 28.4034 5.49844 26.6566 6.0518C25.6068 6.38367 24.599 6.75352 23.6919 7.10859C23.5659 7.21406 23.4232 7.3125 23.2804 7.40391C22.8521 7.66406 22.3398 7.89609 21.7435 8.1V9.35859C22.8773 8.83828 24.9433 7.94531 27.1857 7.23516C28.857 6.70781 30.6122 6.29859 32.04 6.23039C33.4677 6.16148 34.4671 6.40617 35.013 7.05234C35.5169 7.65 35.4329 8.04375 34.9542 8.69766C34.4839 9.35156 33.5433 10.118 32.4767 10.9195C31.4185 11.7141 30.2511 12.5508 29.3357 13.4789C28.4202 14.407 27.7232 15.4617 27.8072 16.657C27.9331 18.4008 29.6044 20.0531 31.1581 21.3961C32.7034 22.732 34.2236 23.7094 34.2236 23.7094L35.1474 22.7109C35.1474 22.7109 33.7029 21.7758 32.2415 20.5172C30.7802 19.2516 29.3945 17.6063 29.3189 16.5797V16.5727C29.2601 15.8484 29.7052 15.0891 30.5031 14.2875C31.3009 13.4789 32.4179 12.6703 33.4929 11.8547C34.5679 11.0461 35.6009 10.2516 36.256 9.35156C36.9027 8.45156 37.0706 7.29844 36.2392 6.32039C35.4161 5.34234 34.0472 4.97742 32.5859 4.95563ZM12.9251 5.23828C13.9943 5.23828 15.0196 5.29754 15.7756 5.40303C16.5316 5.50852 16.9564 5.6516 16.9564 5.80078C16.9564 5.94997 16.5316 6.09304 15.7756 6.19853C15.0196 6.30402 13.9943 6.36328 12.9251 6.36328C11.856 6.36328 10.8306 6.30402 10.0746 6.19853C9.31858 6.09304 8.89386 5.94997 8.89386 5.80078C8.89386 5.6516 9.31858 5.50852 10.0746 5.40303C10.8306 5.29754 11.856 5.23828 12.9251 5.23828ZM5.61847 8.52187V9.26719C10.5148 10.2516 15.3607 10.1812 20.2318 9.75234V8.52187C18.2497 8.97891 15.705 9.24609 12.9251 9.24609C10.1368 9.24609 7.60218 8.97891 5.61847 8.52187ZM5.61847 10.568V12.2836C10.9011 12.4875 15.6714 12.0445 20.2318 11.3063V11.018C15.4362 11.4398 10.5736 11.5102 5.61847 10.568ZM20.2318 12.5859C15.6966 13.3102 10.9011 13.7461 5.61847 13.5563V14.8711C10.9935 14.9766 15.9654 14.6953 20.2318 13.7531V12.5859ZM20.2318 15.068C15.8646 15.975 10.9011 16.2352 5.61847 16.1367V16.3617C10.7835 16.9523 15.7638 17.332 20.2318 17.1211V15.068ZM5.61847 17.6344V18.2602C10.0948 19.4555 15.1003 19.5117 20.2318 19.4484V18.3867C15.6882 18.5906 10.7247 18.225 5.61847 17.6344ZM5.61847 19.582V21.818C10.0444 22.057 14.2521 21.5719 18.4009 20.7281C14.0337 20.7562 9.67492 20.6086 5.61847 19.582ZM20.2318 21.6492C15.5538 22.6828 10.7331 23.3578 5.61847 23.0906V24.2156C10.456 24.2297 15.2599 24.1453 20.2318 23.2172V21.6492ZM38.8511 22.9852C38.4564 22.9892 37.9975 23.0821 37.5163 23.2553C37.035 23.4285 36.5468 23.6765 36.0964 23.9766C36.0908 23.9789 36.0852 23.9812 36.0796 23.9836L36.0292 24.0258C35.7578 24.2116 35.5057 24.4131 35.2818 24.6234L22.3314 34.9805L37.1378 26.8313C37.5146 26.6703 37.8883 26.4673 38.238 26.2336C38.9504 25.7583 39.521 25.1844 39.8248 24.6374C40.1286 24.0905 40.1409 23.6152 39.8589 23.3156C39.6549 23.0966 39.3049 22.9818 38.8511 22.9852ZM38.0029 24.0469C38.0057 24.0469 38.0085 24.0469 38.0113 24.0469C38.2373 24.0446 38.4122 24.1008 38.5152 24.2086C38.5853 24.2829 38.6199 24.3796 38.6169 24.4933C38.6139 24.607 38.5734 24.7354 38.4977 24.8712C38.4221 25.0071 38.3127 25.1476 38.176 25.2848C38.0392 25.4221 37.8776 25.5533 37.7005 25.6711C37.3445 25.9086 36.9466 26.0774 36.5941 26.1406C36.2415 26.2039 35.9629 26.1564 35.8193 26.0086C35.748 25.9349 35.7123 25.8386 35.7142 25.7252C35.7162 25.6118 35.7557 25.4835 35.8306 25.3476C35.9055 25.2118 36.0143 25.071 36.1507 24.9335C36.2871 24.796 36.4484 24.6643 36.6255 24.5461C36.8503 24.3958 37.0941 24.2713 37.3347 24.1841C37.5753 24.0969 37.805 24.0497 38.0029 24.0469ZM20.2318 24.5109C15.2011 25.4109 10.3804 25.4953 5.61931 25.4812C5.61931 25.4812 5.65374 25.5445 5.93089 25.6781C6.25927 25.8328 6.83372 26.0016 7.54675 26.1352C8.96945 26.4023 10.9515 26.543 12.9251 26.543C14.8987 26.543 16.8808 26.4023 18.3001 26.1352C19.014 26.0016 19.5935 25.8328 19.921 25.6781C20.2066 25.5375 20.2318 25.4672 20.2318 25.4812V24.5109ZM4.12942 25.6992C3.86907 25.8117 3.64735 25.9172 3.47267 26.0297C3.03427 26.2969 2.93433 26.5008 2.93433 26.6133C2.93433 26.7258 3.03427 26.9297 3.47267 27.1969C3.91023 27.4711 4.63165 27.7594 5.55212 27.9984C7.39306 28.4766 10.0193 28.793 12.9251 28.793C15.831 28.793 18.4597 28.4766 20.2989 27.9984C21.2228 27.7594 21.945 27.4711 22.3818 27.1969C22.8185 26.9297 22.9193 26.7258 22.9193 26.6133C22.9193 26.5008 22.8185 26.2969 22.3818 26.0297C22.2054 25.9172 21.987 25.8047 21.7183 25.6992C21.6175 26.1844 21.1556 26.543 20.6685 26.775C20.1142 27.0422 19.4339 27.225 18.6277 27.3727C17.032 27.668 14.9827 27.8086 12.9251 27.8086C10.8675 27.8086 8.81828 27.668 7.21837 27.3727C6.41968 27.225 5.73353 27.0422 5.18091 26.775C4.69464 26.55 4.23441 26.1844 4.12942 25.6992Z"
          fill="black"
        />
      </svg>
    ),
    p: 'Пошив партий до 300 ед',
  },
  {
    id: 5,
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 12V28.5H28.5V12H24V24L18 21L12 24V12H7.5ZM7.5 31.5C6.675 31.5 5.969 31.2065 5.382 30.6195C4.795 30.0325 4.501 29.326 4.5 28.5V9.78751C4.5 9.43751 4.5565 9.10001 4.6695 8.77501C4.7825 8.45001 4.951 8.15001 5.175 7.87501L7.05 5.58751C7.325 5.23751 7.6685 4.96851 8.0805 4.78051C8.4925 4.59251 8.924 4.49901 9.375 4.50001H26.625C27.075 4.50001 27.5065 4.59401 27.9195 4.78201C28.3325 4.97001 28.676 5.23851 28.95 5.58751L30.825 7.87501C31.05 8.15001 31.219 8.45001 31.332 8.77501C31.445 9.10001 31.501 9.43751 31.5 9.78751V28.5C31.5 29.325 31.2065 30.0315 30.6195 30.6195C30.0325 31.2075 29.326 31.501 28.5 31.5H7.5ZM8.1 9.00001H27.9L26.625 7.50001H9.375L8.1 9.00001ZM15 12V19.125L18 17.625L21 19.125V12H15Z"
          fill="black"
        />
      </svg>
    ),
    p: 'Контроль качества на каждом этапе',
  },
  {
    id: 6,
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 6.54541L13.5 13.1563V26.1163L24 32.7272L34.5 26.1163V13.1563M24 10.3254L29.7 13.909L24 17.4927L18.315 13.909M0 11.4545V14.7272H10.5V11.4545M16.5 16.5436L22.5 20.3236V27.9981L16.5 24.2345M31.5 16.5436V24.2345L25.5 27.9981V20.3236M3 18V21.2727H10.5V18M6 24.5454V27.8181H10.5V24.5454"
          fill="black"
        />
      </svg>
    ),
    p: 'Упаковка, маркировка и отгрузка',
  },
];

export default function Main() {
  return (
    <main>
      <About />
      <Parallax
        bgImage={require('../../assets/bg-lines.avif')}
        bgImageAlt="Картинка на фоне"
        strength={600}
      >
        <div className="parallax">
          <div className="parallax-items">
            {firstParallax.map((img) => (
              <ParallaxEffect key={img.id} image={img.image} alt={img.alt} />
            ))}
          </div>
        </div>
      </Parallax>
      <section className="sewing">
        <div className="sewing-items">
          {sewingArr.map((sewing) => (
            <Sewing key={sewing.id} svg={sewing.svg} p={sewing.p} />
          ))}
        </div>
        <h2>
          Мы сотрудничаем с брендами по договору, в котором прописаны все
          условия сотрудничества.
        </h2>
      </section>
      <Parallax
        bgImage={require('../../assets/bg-lines.avif')}
        bgImageAlt="Картинка на фоне"
        strength={600}
      >
        <div className="parallax">
          <div className="parallax-items">
            {secondParallax.map((img) => (
              <ParallaxEffect key={img.id} image={img.image} alt={img.alt} />
            ))}
          </div>
        </div>
      </Parallax>
      <Services />
      <Parallax
        bgImage={require('../../assets/bg-lines.avif')}
        bgImageAlt="Картинка на фоне"
        strength={600}
      >
        <div className="parallax">
          <button>Получить консультацию</button>
          <div className="parallax-items">
            {thirdParallax.map((img) => (
              <ParallaxEffect key={img.id} image={img.image} alt={img.alt} />
            ))}
          </div>
        </div>
      </Parallax>
      <About />
    </main>
  );
}