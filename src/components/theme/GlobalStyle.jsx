import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.font};
  }

  .sc-gtssRu div{
      background-color: ${({ theme }) => theme.icon};
  }

  .sc-bdnylx {
    background-color: ${({ theme }) => theme.header};
  }

  .sc-bdnylx li {
    color: ${({ theme }) => theme.font};
  }
 
  .swiper-pagination-bullet {
    border: 1px solid  ${({ theme }) => theme.swiperDotBorder};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.swiperActive};
  }

  .accordion>.card:not(:first-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.header};
  }

  .accordion > .card:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.header};
  }

  .card-body {
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.font};
  }

  .circle {
      background: ${({ theme }) => theme.header};
  }

  .moon svg path {
      fill: ${({ theme }) => theme.font};
  }

  .sun svg path {
    fill: ${({ theme }) => theme.font};
}
  `;
