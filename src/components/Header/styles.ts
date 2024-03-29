import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue-light);
    color: var(--white);

    border: none;
    padding: 0.75rem 2rem;
    border-radius: var(--border-radius);

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
