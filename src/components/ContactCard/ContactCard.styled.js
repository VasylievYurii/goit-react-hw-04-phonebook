import styled from '@emotion/styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const ContactList = styled.li`
  display: block;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
`;

export const ContactCard = styled.a`
  position: relative;
  display: block;
  padding: 0.8em;
  border-radius: 5px;
  background-color: var(--color-contacts);
  box-shadow: auto;
  transition: background-color 250ms var(--timing-function),
    box-shadow 250ms var(--timing-function);

  &:hover {
    background-color: var(--color-main-three);
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  }

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:link:hover,
  &:visited:hover {
    text-decoration: none;
  }
`;

export const ContactName = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  text-align: right;
  margin-left: auto;
`;
export const RiDeleteBinLineSvg = styled(RiDeleteBinLine)`
  position: absolute;
  right: 0.2em;
  top: 0.2em;
  color: var(--color-main-three);
  background-color: white;
  border-radius: 50%;
  border: 3px solid white;
  width: 14px;
  height: 14px;
`;

export const ContactUl = styled.ul`
  width: 100%;
`;
