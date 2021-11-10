import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33cc95;
    --red: #e52e4d;
    --white: #ffffff;

    --text-title: #363f5f;
    --text-body: #969cb2;

    --shape: #ffffff;

    --input-border-color: #d7d7d7;

    --border-radius: 0.3125rem;
  }

  html {
    /* font-size padrão = 16px */
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16px = 100% | 15px = 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16px = 100% | 14px = 87.5%
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    /* O tamanho fica em 100% abaixo de 576px */
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 4rem 3rem;
    position: relative;
    border-radius: var(--border-radius);
  }

  .react-modal-close {
    background: transparent;

    position: absolute;
    top: .5rem;
    right: .5rem;
    padding: .8125rem;

    border: 0;
    display: flex;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }
`;
