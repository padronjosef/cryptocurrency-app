import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
  font-family: "Bebas Neue";
`;

const Info = styled.p`
  font-size: 1rem;
  margin-top: 0rem;
  margin-bottom: .5rem;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    font-weight: bold;
  }
`;

function Quote({ result, coin, crypto }) {
  if (!Object.keys(result).length) return null;
  return (
    <ResultDiv>
      <Price>
        1 {crypto} cost: <span>{result.PRICE} {coin}</span>{" "}
      </Price>
      <Info>
        Highest price of the day: <span>{result.HIGHDAY}</span>{" "}
      </Info>
      <Info>
        Lowest price of the day: <span>{result.LOWDAY}</span>{" "}
      </Info>
      <Info>
        Variation in the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>{" "}
      </Info>
      <Info>
        Last Update: <span>{result.LASTUPDATE}</span>{" "}
      </Info>
    </ResultDiv>
  );
}

export default Quote;
