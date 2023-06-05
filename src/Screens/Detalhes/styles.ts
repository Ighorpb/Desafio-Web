import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;


export const Content = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 20px;
  flex-grow: 1;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    item.compromisso {
      font-size: 24px;
    }

    p {
      margin: 0;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-right: 16px;
`;
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonDelete = styled.button`
  padding: 8px 16px;
  background-color: #960000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fe0000;
  }
`;

export const ButtonEdit = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;



