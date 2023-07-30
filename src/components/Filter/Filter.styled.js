import styled from '@emotion/styled';
import { RiUserSearchLine } from 'react-icons/ri';

export const FilterLabel = styled.label`
  position: relative;
  width: 80%;
`;

export const FilterInput = styled.input`
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

export const RiUserSearchLineSvg = styled(RiUserSearchLine)`
  position: absolute;
  fill: var(--color-contacts);
  top: 55%;
  left: 95%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
`;
