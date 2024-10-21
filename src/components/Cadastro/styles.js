import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  background-color: transparent;
  color: #FFFFFF;

  &:focus {
    border-color: #23DD7A;
    outline: none;
  }
`;
