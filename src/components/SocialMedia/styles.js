import styled from 'styled-components';

export const SocialList = styled.ul`
  li {
    display: inline-block;
    margin: 0 .25rem;

    a {
      color: #333;
      display: flex;
      align-items: center;
      font-size: 13px;
    }

    .svg-inline--fa {
      margin-right: .25rem;
      font-size: 18px;
    }

    .fa-facebook {
      color: #3b5998;
    }

    .fa-twitter-square {
      color: #1dcaff;
    }
  }
`;