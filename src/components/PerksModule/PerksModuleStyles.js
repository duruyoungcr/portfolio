import styled from "styled-components"

export const PerksModuleStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  color: #fff;
  background-color: #000;
  position: relative;

  h1 {
    margin-top: 0;
    margin-bottom: 4rem;
    font-weight: 700;
    font-size: var(--bannerTitle);
  }
  .perks__image--bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
  }

  > .container {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    position: relative;
    text-align: center;

    @media (max-width: 425px) {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap:2rem;
    }
  }
`

export const PerkStyles = styled.div`
  .gatsby-image-wrapper {
    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
    @media (max-width: 425px) {
      width: 80px;
      height: 60px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center center;
    }
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;

    @media (min-width: 375px) {
      font-size: 22px;
    }

    @media (min-width: 414px) {
      font-size: 27px;
    }

    @media (min-width: 768px) {
      font-size: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }

    @media (min-width: 1154px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 15px;

    @media (min-width: 375px) {
      font-size: 16px;
    }

    @media (min-width: 414px) {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      font-size: 19px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }

    @media (min-width: 1154px) {
      font-size: 18px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`
