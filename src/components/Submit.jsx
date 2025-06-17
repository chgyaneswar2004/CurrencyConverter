import styled from "styled-components"

const Submit = () => {
  return (
    <SubmiT>Submit</SubmiT>
  )
}

export default Submit

const SubmiT = styled.button`
  width: 100%;
  padding: 12px 18px;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 7px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 11px 16px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 16px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.8);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`