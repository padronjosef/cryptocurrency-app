import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 0.8rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border-radius: none;
  font-size: 1rem;
`;

const useCryptocurrency = (label, inititalState, options) => {
  // custom hook state
  const [state, setState] = useState(inititalState);

  // fuction that render
  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Select you Cryptocurrency -</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.Name} - {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  // return state, interface and function that set the state
  return [state, SelectCrypto];
};

export default useCryptocurrency;
