import styled from 'styled-components';

export const LogoShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px; 
  height: 23.09px;
  background-color: #e74c3c;
  margin: 11.55px 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 11.55px solid #e74c3c;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 11.55px solid #e74c3c;
  }
`;

export const LogoContent = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
