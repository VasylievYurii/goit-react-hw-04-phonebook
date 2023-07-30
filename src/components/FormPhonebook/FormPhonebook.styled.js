import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  padding: 1em;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  width: 91%;
`;

export const Button = styled.button`
  background-color: var(--color-contacts);
  margin-top: 10px;
  border-radius: 28px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  transition: background-color 500ms var(--timing-function), font-weight 300ms var(--timing-function), color 300ms var(--timing-function);
  &:hover {
    font-weight: 700;
    color: var(--color-main-one);
    background-color: var(--color-line-hover);
  }
`;

export const LabelForm = styled.label`
  font-size: 1em;
  font-weight: 500;
  color: white;
`;

export const ErrorMessageForm = styled(ErrorMessage)`
font-size: .8em;
  margin-bottom: 1em;
  color: red;
`;
export const FieldForm = styled(Field)`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin: 8px 0;
  margin-bottom: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-right: 30px;
  &:focus {
    box-shadow: 0 0 8px 0 var(--color-contacts);
  }
`;
