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

const useCoin = (label, inititalState, options) => {
  // custom hook state
  const [state, setState] = useState(inititalState);

  // fuction that render
  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Select you Coin -</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.code} - {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  // return state, interface and function that set the state
  return [state, SelectCoin];
};

export default useCoin;
