import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #CCC;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p {
        margin: 0;
      }
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

export const Buttons = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  background-color: #fe0000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonDelete = styled.button`
  background-color: #fe0000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

;

export const Img = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;
