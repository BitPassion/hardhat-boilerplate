import React from "react";

export function NoTokensMessage({ selectedAddress }) {
  return (
    <>
      <p>You don't have tokens to transfer</p>
      <p>
        To get some tokens, open a temrinal in the root of the repository and run: 
        <br />
        <br />
        <code>npx buidler --network localhost faucet {selectedAddress}</code>
      </p>
    </>
  );
}
