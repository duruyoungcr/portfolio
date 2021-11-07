import styled from "styled-components"

export const ProjectsListStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  color: #fff;
  background-color: #000;
  h1 {
    margin-top: 0;
    margin-bottom: 4rem;
    font-weight: 700;
    font-size: var(--bannerTitle);
  }
  .features__container {
    /* max-width: 1230px; */
    margin: 0 auto;

    &--scroll {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      @media (min-width: 450px) {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
    }
    @media (max-width: 325px) {
        &--scroll {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
  }

  .features__item {
    flex: 0 0 80%;
    min-height: 408px;
    background-color: #000;
    overflow: hidden;

    @media (min-width: 1152px) {
      min-height: 500px;
    }

    &:hover,
    &:focus {
      cursor: pointer;

      h2,
      p {
        color: #fff;
      }

      .features__item--img {
        transform: scale(1.1);
      }
    }

    > a {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: flex-end;
      position: relative;
      text-decoration: none;
    }

    &--img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      transition: transform 0.3s ease;
    }

    &--content {
      width: 100%;
      position: relative;
      z-index: 2;
      padding: 20px;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );

      > * {
        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      > h2 {
        color: #fff;
        font-size: var(--h2);
        margin-bottom: 20px;
      }
      > p {
        color: #fff;
        font-size: var(--p);
        margin-bottom: 40px;
      }
    }
    &:last-child {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: transparent;
        right: -30px;
        bottom: 0;

        @media (min-width: 1024px) {
          right: -75px;
          width: 75px;
        }

        @media (min-width: 1152px) {
          display: none;
        }
      }
    }
  }
`
