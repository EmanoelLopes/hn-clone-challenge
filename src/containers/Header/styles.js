import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 1.5rem 0;  
  border-bottom: 1px solid #ddd;

  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1rem;

    @media screen and (min-width: 1000px) {
      padding: 0;
    }
  }

  .container .app-header-left,
  .container .app-header-right {
    display: flex;
    align-items: center;
    width: 50%;

    .search {
      width: 100%;
    }

    .search,
    .add-post {
      display: none;
    }

    @media screen and (min-width: 1000px) {
      .search,
      .add-post {
        display: block;
      }
    }
  }

  .container .app-header-left {
    justify-content: flex-start;
  }

  .container .app-header-right {
    justify-content: flex-end;
  }

  .container .app-header-left .app-logo {
    padding: 0 1rem 0 0;
    margin: 0 1rem 0 0;
    border-right: 1px solid #ddd;

    & > a {
      display: block;
    }
  }

  .container .app-header-right .avatar {
    position: relative;

    .badge {
      position: absolute;
      top: 10px;
      left: 6px;
    }
  }
`;

export default HeaderWrapper;