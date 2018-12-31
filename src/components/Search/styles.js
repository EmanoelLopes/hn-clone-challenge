import styled from 'styled-components';

export const SearchInput = styled.div`
  position: relative;
  margin: 0 .5rem;

  .fa-search {
    color: #ccc;
    position: absolute;
    left: 10px;
    top: 14px;
  }
`;

export const Input = styled.input`
  background-color: #eee;
  border: 1px solid #eee;
  font-size: 16px;
  height: 42px;
  width: 100%;
  max-width: 400px;
  padding-left: 2rem;

  &:hover,
  &:focus {
    border: 1px solid #ddd
  }
`;
