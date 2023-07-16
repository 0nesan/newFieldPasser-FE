interface propsTypes {
  size?: string
  color?: string
}

export const SearchIcon = (props: propsTypes) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
        stroke={props.color ? props.color : 'black'}
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const SearchToggleIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5554 9.77778C15.5554 10.5142 14.9585 11.1111 14.2221 11.1111C13.4857 11.1111 12.8888 10.5142 12.8888 9.77778C12.8888 9.0414 13.4857 8.44444 14.2221 8.44444C14.9585 8.44444 15.5554 9.0414 15.5554 9.77778Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="0.888889"
      />
      <line x1="8" y1="9.77778" x2="13.3333" y2="9.77778" stroke="black" strokeOpacity="0.7" strokeWidth="0.888889" />
      <path
        d="M8.44455 14.2222C8.44455 13.4858 9.04151 12.8889 9.77789 12.8889C10.5143 12.8889 11.1112 13.4858 11.1112 14.2222C11.1112 14.9586 10.5143 15.5556 9.77789 15.5556C9.04151 15.5556 8.44455 14.9586 8.44455 14.2222Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="0.888889"
      />
      <line x1="16" y1="14.2222" x2="10.6667" y2="14.2222" stroke="black" strokeOpacity="0.7" strokeWidth="0.888889" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E3E3E3" />
    </svg>
  )
}

export const CalendarIcon = (props: propsTypes) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99933 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V10H16V8H2V18H9V20H2ZM19.125 15L17 12.875L17.725 12.15C17.9083 11.9667 18.1417 11.875 18.425 11.875C18.7083 11.875 18.9417 11.9667 19.125 12.15L19.85 12.875C20.0333 13.0583 20.125 13.2917 20.125 13.575C20.125 13.8583 20.0333 14.0917 19.85 14.275L19.125 15ZM11 21V18.875L16.3 13.575L18.425 15.7L13.125 21H11ZM2 6H16V4H2V6Z"
        fill={props.color}
      />
    </svg>
  )
}

export const BadmintonIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.9996 15C19.0604 15 20.0779 15.4214 20.828 16.1716C21.5781 16.9217 21.9996 17.9392 21.9996 19C21.9996 20.0609 21.5781 21.0783 20.828 21.8284C20.0779 22.5786 19.0604 23 17.9996 23C16.9387 23 15.9213 22.5786 15.1711 21.8284C14.421 21.0783 13.9996 20.0609 13.9996 19C13.9996 17.9392 14.421 16.9217 15.1711 16.1716C15.9213 15.4214 16.9387 15 17.9996 15ZM17.9996 17C17.4691 17 16.9604 17.2107 16.5854 17.5858C16.2103 17.9609 15.9996 18.4696 15.9996 19C15.9996 19.5305 16.2103 20.0392 16.5854 20.4142C16.9604 20.7893 17.4691 21 17.9996 21C18.53 21 19.0387 20.7893 19.4138 20.4142C19.7889 20.0392 19.9996 19.5305 19.9996 19C19.9996 18.4696 19.7889 17.9609 19.4138 17.5858C19.0387 17.2107 18.53 17 17.9996 17ZM6.04957 14.54C6.04957 14.54 7.45957 13.12 7.46957 10.3C7.10957 8.11002 7.96957 5.54002 9.93957 3.58002C12.8696 0.650021 17.1396 0.170021 19.4996 2.50002C21.8296 4.86002 21.3496 9.13002 18.4196 12.06C16.4596 14.03 13.8896 14.89 11.6996 14.53C8.87957 14.54 7.45957 15.95 7.45957 15.95L3.21957 20.19L1.80957 18.78L6.04957 14.54ZM18.0696 3.93002C16.4996 2.37002 13.4996 2.84002 11.3496 5.00002C9.20957 7.14002 8.72957 10.15 10.2896 11.71C11.8596 13.27 14.8596 12.79 16.9996 10.65C19.1596 8.50002 19.6296 5.50002 18.0696 3.93002Z"
        fill={props.color}
      />
    </svg>
  )
}

export const BasketballIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.2703 6.00002C13.7203 6.95002 14.0503 8.18002 15.0003 8.73002C15.9503 9.28001 17.1803 8.95002 17.7303 8.00002C18.2803 7.05002 17.9503 5.82002 17.0003 5.27002C16.0503 4.72002 14.8203 5.05002 14.2703 6.00002Z"
        fill={props.color}
      />
      <path
        d="M15.8402 10.41L13.2402 8.91001C12.2223 8.3149 11.4462 7.38072 11.0476 6.27101C10.6491 5.1613 10.6535 3.94676 11.0602 2.84001C11.1438 2.62011 11.1465 2.37763 11.0677 2.15594C10.9889 1.93426 10.8339 1.74783 10.6302 1.63001C10.1002 1.33001 9.41022 1.56001 9.20022 2.13001C8.25022 4.64001 8.85022 7.48001 10.6602 9.40001L6.01022 17.45C5.73022 17.93 5.90022 18.54 6.38022 18.82C6.86022 19.1 7.47022 18.93 7.75022 18.45L8.75022 16.72L10.4802 17.72L7.98022 22.05C7.70022 22.53 7.87022 23.14 8.35022 23.42C8.83022 23.7 9.44022 23.53 9.72022 23.05L15.5102 13.03C16.0019 13.7009 16.3195 14.4832 16.4347 15.3069C16.5499 16.1306 16.459 16.97 16.1702 17.75C16.0882 17.9954 16.1047 18.2631 16.2161 18.4967C16.3275 18.7302 16.5252 18.9114 16.7675 19.0022C17.0099 19.0929 17.278 19.086 17.5153 18.983C17.7527 18.88 17.9409 18.689 18.0402 18.45C19.0102 15.83 18.4502 12.61 15.8402 10.41ZM12.7502 3.80001C13.4702 4.21001 14.3802 3.97001 14.8002 3.25001C15.2102 2.53001 14.9702 1.62001 14.2502 1.20001C13.9059 1.00813 13.4998 0.959418 13.1199 1.06441C12.7399 1.16939 12.4165 1.41965 12.2195 1.76111C12.0225 2.10257 11.9677 2.50783 12.067 2.88933C12.1663 3.27083 12.4117 3.59794 12.7502 3.80001Z"
        fill={props.color}
      />
    </svg>
  )
}

export const FutsalIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C5 2 1 9 1 9L9.3 17.3C9.74 16.77 10.32 16.37 11 16.17L7.83 13L12 8.83L16.17 13L13 16.17C13.68 16.37 14.27 16.77 14.7 17.3L23 9C23 9 19 2 12 2ZM17.59 11.59L12 6L6.41 11.59L3.59 8.76C4.95 7 7.89 4 12 4C16.08 4 19.03 7 20.4 8.77L17.59 11.59ZM13 13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13C11 12.45 11.45 12 12 12C12.55 12 13 12.45 13 13ZM13.5 20L12 21L10.5 20V18H13.5V20Z"
        fill={props.color}
      />
    </svg>
  )
}

export const SoccerIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M1.07812 5.57812V18.4219H22.9219V5.57812H1.07812ZM1.92188 6.42188H11.5781V10.1258C10.7227 10.3196 10.0781 11.0884 10.0781 12C10.0781 12.9116 10.7227 13.6805 11.5781 13.8743V17.5781H1.92188V14.6719H4.92188V9.32812H1.92188V6.42188ZM12.4219 6.42188H22.0781V9.32812H19.0781V14.6719H22.0781V17.5781H12.4219V13.8743C13.2773 13.6804 13.9219 12.9116 13.9219 12C13.9219 11.0884 13.2773 10.3195 12.4219 10.1258V6.42188ZM1.92188 10.1719H4.07812V13.8281H1.92188V10.1719ZM19.9219 10.1719H22.0781V13.8281H19.9219V10.1719ZM11.5781 11.0059V12.9941C11.1905 12.8316 10.9219 12.4503 10.9219 12C10.9219 11.5497 11.1905 11.1684 11.5781 11.0059ZM12.4219 11.0059C12.8095 11.1684 13.0781 11.5497 13.0781 12C13.0781 12.4503 12.8095 12.8316 12.4219 12.9941V11.0059Z"
        fill={props.color}
      />
    </svg>
  )
}

export const TennisIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.7176 20.713C11.0905 21.173 9.35671 21.0803 7.78794 20.4493C6.21917 19.8182 4.90407 18.6846 4.04868 17.226C3.1933 15.7674 2.84598 14.0662 3.06114 12.389C3.27629 10.7119 4.04178 9.15344 5.23764 7.95798L5.95764 7.23798C7.13052 6.06508 8.65314 5.30559 10.2956 5.07414C11.9381 4.8427 13.6113 5.15187 15.0626 5.95498L17.4496 3.60998C17.8298 3.23325 18.3405 3.01755 18.8756 3.00774C19.4107 2.99792 19.929 3.19475 20.3227 3.55729C20.7164 3.91983 20.9553 4.42017 20.9895 4.95427C21.0238 5.48837 20.8508 6.01512 20.5066 6.42498L20.3906 6.55098L18.0446 8.93798C18.82 10.3394 19.1356 11.949 18.9469 13.5395C18.7581 15.13 18.0745 16.621 16.9926 17.802"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2998 5.29999L18.6998 14.7M10.9998 18C10.9998 18.394 11.0774 18.7841 11.2282 19.148C11.3789 19.512 11.5999 19.8427 11.8785 20.1213C12.1571 20.3999 12.4878 20.6209 12.8518 20.7716C13.2157 20.9224 13.6058 21 13.9998 21C14.3938 21 14.7839 20.9224 15.1479 20.7716C15.5118 20.6209 15.8425 20.3999 16.1211 20.1213C16.3997 19.8427 16.6207 19.512 16.7714 19.148C16.9222 18.7841 16.9998 18.394 16.9998 18C16.9998 17.606 16.9222 17.2159 16.7714 16.8519C16.6207 16.488 16.3997 16.1572 16.1211 15.8787C15.8425 15.6001 15.5118 15.3791 15.1479 15.2283C14.7839 15.0776 14.3938 15 13.9998 15C13.6058 15 13.2157 15.0776 12.8518 15.2283C12.4878 15.3791 12.1571 15.6001 11.8785 15.8787C11.5999 16.1572 11.3789 16.488 11.2282 16.8519C11.0774 17.2159 10.9998 17.606 10.9998 18Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Harticon = (props: propsTypes) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.625 2.25C10.3694 2.25 9.255 2.74563 8.5 3.5975C7.745 2.74563 6.63062 2.25 5.375 2.25C4.28139 2.25132 3.23295 2.68635 2.45965 3.45965C1.68635 4.23295 1.25132 5.28139 1.25 6.375C1.25 10.8962 7.86312 14.5088 8.14437 14.6606C8.25367 14.7195 8.37586 14.7503 8.5 14.7503C8.62414 14.7503 8.74633 14.7195 8.85563 14.6606C9.13688 14.5088 15.75 10.8962 15.75 6.375C15.7487 5.28139 15.3137 4.23295 14.5404 3.45965C13.7671 2.68635 12.7186 2.25132 11.625 2.25ZM11.2819 11.1475C10.4114 11.8861 9.48091 12.5509 8.5 13.135C7.51909 12.5509 6.58858 11.8861 5.71812 11.1475C4.36375 9.98563 2.75 8.21375 2.75 6.375C2.75 5.67881 3.02656 5.01113 3.51884 4.51884C4.01113 4.02656 4.67881 3.75 5.375 3.75C6.4875 3.75 7.41875 4.3375 7.80562 5.28375C7.86193 5.42169 7.95805 5.53974 8.08172 5.62283C8.20539 5.70592 8.35101 5.7503 8.5 5.7503C8.64899 5.7503 8.79461 5.70592 8.91828 5.62283C9.04195 5.53974 9.13807 5.42169 9.19438 5.28375C9.58125 4.3375 10.5125 3.75 11.625 3.75C12.3212 3.75 12.9889 4.02656 13.4812 4.51884C13.9734 5.01113 14.25 5.67881 14.25 6.375C14.25 8.21375 12.6362 9.98563 11.2819 11.1475Z"
        fill="#AAAAAA"
      />
    </svg>
  )
}
