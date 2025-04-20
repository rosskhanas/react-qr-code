// Styled components for the Demo component
import styled from "styled-components";

export const ListContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;