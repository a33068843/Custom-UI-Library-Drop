import styled from 'styled-components';

const StyledButton = styled.button``;
const Container = styled.div`
  color: white;
  background: blue;
  padding: 0.5rem 1.2rem;
  user-select: none;
  cursor: pointer;
`;
/*
 * abxc
 */
export const Button = ({ label }) => {
  return <Container>{label}</Container>;
};
