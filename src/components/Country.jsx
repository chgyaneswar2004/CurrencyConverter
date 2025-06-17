import styled from "styled-components"
import { countryList } from "../code"
import { FaExchangeAlt } from "react-icons/fa";

const Country = ({tempToCountry, tempFromCountry, setTempToCountry, setTempFromCountry}) => {
  return (
   <CountryChange>
          <div className='country from'>
             <img id='flag-from' src={`https://flagsapi.com/${countryList[tempFromCountry] || "US"}/flat/64.png`} />
             <select  className='select-from' value={tempFromCountry} onChange={(e) => setTempFromCountry(e.target.value)}>
                  {Object.keys(countryList).map((code) => (
                   <option key={code} value={code}>{code}</option>
                   ))}
             </select>
            </div>
             <div className='exchange-icon'><FaExchangeAlt color='white' fontSize='24px'/>
              </div>
          <div className='country to'>
              <img id='flag-to' src={`https://flagsapi.com/${countryList[tempToCountry] || "US"}/flat/64.png`} />
              <select  className='select-to' value={tempToCountry} onChange={(e) => setTempToCountry(e.target.value)}>
                  {Object.keys(countryList).map((code) => (
                  <option key={code} value={code}>{code}</option>
                  ))}
              </select>
            </div>
        </CountryChange>
  )
}

export default Country

const CountryChange = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
    
  .exchange-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    @media (max-width: 480px) {
      transform: rotate(90deg);
    }

    svg {
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .country{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 5px;
    min-width: 120px;

    @media (max-width: 768px) {
      min-width: 100px;
      gap: 6px;
    }

    @media (max-width: 480px) {
      min-width: 140px;
      gap: 10px;
    }

    select{
      min-width: 70px;
      height: 45px;
      font-size: 16px;
      padding: 5px;
      background-color: transparent;
      color: white;
      border-radius: 7px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;

      @media (max-width: 768px) {
        height: 40px;
        font-size: 14px;
        min-width: 65px;
      }

      @media (max-width: 480px) {
        height: 42px;
        font-size: 16px;
        min-width: 75px;
      }

      option{
        background-color: #1a1a1a;
        color: white;
      }

      &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.8);
      }
    }

    img{
      height: 45px;
      width: auto;
      border-radius: 4px;

      @media (max-width: 768px) {
        height: 40px;
      }

      @media (max-width: 480px) {
        height: 42px;
      }
    }
  }
`