import styled from "styled-components"

export const ContactStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  max-width: 750px;
  box-sizing: content-box;
  margin: 0 auto;

  input {
    height: 50px;
    margin-bottom: 1.25rem;

    @media (min-width: 1200px) {
      margin-bottom: 1.875rem;
    }
  }
  input,
  textarea {
    background-color: #33333380;
    color: #fff;
    border: none;
    border-bottom: 3px solid var(--inActive);
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: border-bottom-color 0.3s;
    border-radius: 8px;

    &:focus {
      border-bottom-color: var(--primary);
    }

    &::-webkit-input-placeholder {
      color: #bdbdbd;
    }

    &::-moz-placeholder {
      color: #bdbdbd;
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
  textarea {
    margin-bottom: 2.125rem;
  }
`
