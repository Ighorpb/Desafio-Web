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

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  input[type="search"] {
    width: 300px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
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
    item.compromisso{
      font-size: 24px;
    }

    p {
      margin: 0;
    }
  }
`;

export const Button = styled.div`
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
`;

