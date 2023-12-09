import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;

  border-bottom: solid 2px red;
`;

export const Link = styled(RouterLink)`
  display: flex;
  width: fit-content;
  margin: 5px;
  padding: 4px;

  color: black;
  text-decoration: none;
  border: solid 1px black;
  border-radius: 4px;
`;

export const AdditionalWrapper = styled.div`
  padding: 10px;

  border-bottom: solid 2px red;

  & li:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
