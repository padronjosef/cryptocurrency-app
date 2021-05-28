import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Axios from "axios";

import useCoin from "../hooks/useCoin";
import useCryptocurrency from "../hooks/useCryptocurrency";
import Error from "../components/Error";

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

const Quantity = styled.input`
  width: 100%;
  display: block;
  padding: 0.8rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border-radius: none;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &::hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCoin, setCrypto, quantity, setQuantity }) => {
  // list of cryptocurrencies
  const [cryptoList, setCryptoList] = useState([]);

  const [error, setError] = useState(false);

  const COINS = [
    { code: "USD", name: "United State Dolar" },
    { code: "EUR", name: "Euro " },
    { code: "GBP", name: "Pound Sterling" },
    { code: "MXN", name: "Mexican Pesos" },
    { code: "COP", name: "Colombian Pesos" },
  ];

  // using useCoin
  const [coin, SelectCoin] = useCoin("Select your Coin", "", COINS);

  // using useCryptocurrency
  const [crypto, SelectCrypto] = useCryptocurrency(
    "Select your Cryptocurrency",
    "",
    cryptoList
  );

  useEffect(() => {
    const consultApi = async () => {
      const URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await Axios.get(URL);

      setCryptoList(result.data.Data);
    };

    consultApi();
  }, []);

  // when the user sumbit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate if all the filds are select
    if (!coin || !crypto || quantity <= 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }

    // set the dates to the principal component
    setError(false);
    setCoin(coin);
    setCrypto(crypto);
  };
  
  const handleChange = (e) => setQuantity(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All the Fields are required" /> : null}
      <Label>Quantity</Label>
      <Quantity
        type="number"
        onChange={handleChange}
        value={quantity}
      />
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="calculate">
        Calculate
      </Button>
    </form>
  );
};

Form.propTypes = {
  setCoin: PropTypes.func.isRequired,
  setCrypto: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default Form;
