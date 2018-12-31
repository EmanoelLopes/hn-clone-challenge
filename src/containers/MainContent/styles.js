import styled from 'styled-components';

const MainWrapper = styled.main`
  padding: 0 1rem;
  margin: 1rem 0;

  .post-item-enter {
    opacity: 0.01;
  }

  .post-item-enter.post-item-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .post-item-leave {
    opacity: 1;
  }

  .post-item-leave.post-item-leave-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in;
  }
`;

export default MainWrapper;

