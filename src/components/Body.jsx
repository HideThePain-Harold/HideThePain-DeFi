import React from "react";
import Card from "./Card";

export default function Body(props) {
	return (
		<div className="container text-center ">
			<p className="mb-2">HideThePain Harold TokenSale Dapp! Token price is {props.tokenPrice} Ether</p>
			<p>You currently have {props.tokenBalance} HTPH (HidethePain Harold) Tokens</p>
			<Card
				buyTokens={props.buyTokens}
				tokensSold={props.tokensSold}
				tokenPrice={props.tokenPrice}
				tokenSale={props.tokenSale}
			/>
			<p className="mt-3">
				Your address: <span className="font-weight-bold">{props.account}</span>
			</p>
		</div>
	);
}
