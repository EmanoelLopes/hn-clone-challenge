import styled from 'styled-components';

export const Loading = styled.div`
  align-items: center;
  background-color: #eee;

  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;

  > a {
    color: #e74c3c;

    &:hover {
      text-decoration: underline;
    }
  }

  > a > span {
    margin: 0 1rem;
  }
`;