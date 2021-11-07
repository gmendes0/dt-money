import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem; //

  div {
    background: var(--shape);
    padding: 1.574375rem 2rem;
    border-radius: 0.3125rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 1rem;
    }

    strong {
      display: inline-block;
      margin-top: 1.88125rem;
      font-size: 2.25rem;
      line-height: 3.375rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--white);
    }
  }
`;
