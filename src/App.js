import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Axios from "axios";

import image from "./cryptocurrencies.png";
import Form from "./components/Form";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;

const Heading = styled.h1`
  font-family: "bebas-Neue", cursive;
  text-align: left;
  font-weight: 700px;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 50px;

  &::after {
    margin-top: 0.4rem;
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const App = () => {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCrypto = async () => {
      // prevent ejecution in the first render
      if (!coin) return;

      // consulting API to get the quote
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${crypto},${coin}`;
      const result = await Axios.get(URL);

      // show Spinner
      setLoading(true);

      // hide spinner and show the result
      setTimeout(() => {
        setLoading(false);
        setResult(result.data.DISPLAY[crypto][coin]);
      }, 1000);
    };

    quoteCrypto();
  }, [coin, crypto]);

  // show spinner or quote
  const component = loading ? (
    <Spinner />
  ) : (
    <Quote result={result} setCoin={setCoin} coin={coin} crypto={crypto} />
  );

  return (
    <Wrapper>
      <div>
        <Imagen src={image} alt="cripto img" />
      </div>
      <div>
        <Heading>Quote Cryptocurrencies Instantly</Heading>
        <Form setCoin={setCoin} setCrypto={setCrypto} />
        {component}
      </div>
    </Wrapper>
  );
};

export default App;
