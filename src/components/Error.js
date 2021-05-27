import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ErrorMessage = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

Error.propTypes = {
  setCoin: PropTypes.string.isRequired,
};

export default Error;
