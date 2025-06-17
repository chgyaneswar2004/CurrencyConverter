import styled from 'styled-components';
import { useState } from 'react'
import Country from './components/Country';
import Message from './components/Message';
import Submit from './components/Submit';


const App = () => {

  const [print, setPrint] = useState(1);
  const [fromCountry, setFromCountry] = useState('USD');
  const [toCountry, setToCountry] = useState('INR')
  const [amount, setAmount] = useState(86.18454371);
  const [inputValue, setInputValue] = useState(1);
  const [tempFromCountry, setTempFromCountry] = useState('USD');
  const [tempToCountry, setTempToCountry] = useState('INR');
  
  const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
  

const handleSubmit = async (e) => {
  e.preventDefault();

  let value = inputValue;
  if (value === "" || value < 1) {
    value = 1;
  }
  setPrint(value);
  setFromCountry(tempFromCountry);
  setToCountry(tempToCountry);

  const URL = `${BASE_URL}${tempFromCountry.toLowerCase()}.json`;
  const response = await fetch(URL);
  const data = await response.json();
  const rate = data[tempFromCountry.toLowerCase()][tempToCountry.toLowerCase()];
  setAmount(rate * value);
};


  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <p>Enter the amount:-</p>
          <input
            value={inputValue}
            type="number"
            onChange={(e) => setInputValue(e.target.value)}/>
         <Country tempFromCountry={tempFromCountry}
                  tempToCountry={tempToCountry}
                  setTempFromCountry={setTempFromCountry}
                  setTempToCountry={setTempToCountry}/>
          <Message print={print}
                   fromCountry={fromCountry}
                   toCountry={toCountry}
                    amount={amount}/>
            <Submit/>
      </Form>
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("https://raw.githubusercontent.com/chgyaneswar2004/Currency-converter/main/public/images/background-img.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 100px auto 20px;
  padding: 18px 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    margin: 50px auto 20px;
    padding: 16px 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    margin: 20px auto;
    padding: 15px 10px;
    gap: 8px;
  }
  
  p{
    font-size: 24px;
    font-weight: 500;
    color: white;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  input{
    width: 100%;
    padding: 12px 18px;
    background-color: transparent;
    border: 1px solid white;
    font-size: 18px;
    color: white;
    border-radius: 7px;
    box-sizing: border-box;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
     -webkit-appearance: none;
      margin: 0;
  }

    @media (max-width: 768px) {
      padding: 10px 15px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      padding: 10px 12px;
      font-size: 16px;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.8);
    }
  }
`
