import styled from 'styled-components';

export const ButtonDefault = styled.button`
  background-color: ${props => !props.default ? '#fff' : '#e74c3c'};
  border: 1px solid #ddd;
  color: #333;
  cursor: pointer;
  font-size: 20px;
  padding: .5rem .75rem;

  &:hover {
    background-color: #eee;
  }

  &.primary {
    background-color: #e74c3c;
    border: 1px solid #e74c3c;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;

    &:hover {
      opacity: .85;
    }

    span {
      font-size: 16px;
      margin: 0 .5rem;
      font-weight: 700;
    }
  }
`;