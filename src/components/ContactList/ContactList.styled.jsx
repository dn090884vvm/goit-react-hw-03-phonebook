import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
`;

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;
  border: none;
  background-color: #889132;
  font-weight: 700;
`;
