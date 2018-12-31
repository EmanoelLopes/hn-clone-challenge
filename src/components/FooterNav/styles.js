import styled from 'styled-components';

export const Navigation = styled.nav`
  a {
    color: #e74c3c;
    display: inline-block;
    font-size: 14px;
    margin: 0 .5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyrights = styled.p`
  color: #999;
  font-size: 14px;
  margin: .5rem 0;
  text-align: center;
`;