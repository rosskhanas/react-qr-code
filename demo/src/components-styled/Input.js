import styled from "styled-components";

export default styled.input`
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 8px 0;
  outline: none;
  padding: 12px 20px;
  transition: all 0.1s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;
