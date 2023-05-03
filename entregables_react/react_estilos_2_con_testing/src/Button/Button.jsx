import styled from "styled-components";

const Button = styled.button`
    background: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
`;

export const getButtonStyles = (type) => {
    switch(type) {
        case 'success':
            return styled(Button)`
            background-color: green;
            color: white;
          `;
        case 'error':
          return styled(Button)`
            background-color: red;
            color: white;
          `;
        case 'warning':
          return styled(Button)`
            background-color: yellow;
            color: black;
          `;
        case 'info':
          return styled(Button)`
            background-color: blue;
            color: white;
          `;
        default:
          return Button;
      }
}