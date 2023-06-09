import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 2px;
`;
