import styled from "styled-components";

const Message = ({print,
                  fromCountry,
                  amount,
                  toCountry
}) => {
  return (
    <Messag>{`${print} ${fromCountry} = ${amount} ${toCountry}`}</Messag>
  )
}

export default Message

const Messag = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 500;
  width: 100%;
  padding: 15px;
  text-align: center;
  word-break: break-word;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
    line-height: 1.4;
  }
`