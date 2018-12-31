import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  padding: 1rem;

  @media screen and (min-width: 1000px) {
    padding: 1rem 0;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .app-footer-left,
  .app-footer-right {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 100%;

    @media screen and (min-width: 1000px) {
      width: 50%;
    }
  }

  .app-footer-left .description {
    margin: 0 1rem;
    color: #999;

    strong {
      color: #333;
      font-weight: 700;
    }
  }

  .app-footer-right {
    align-items: flex-start;
    justify-content: flex-end;

    .footer-nav {
      margin-left: 1rem;
    }
  }
`;

export default FooterWrapper;