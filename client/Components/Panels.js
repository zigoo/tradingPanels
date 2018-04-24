import React, { Component } from "react";
import Panel from "./Panel";

const currenciesPairs = [
  {"pair":"USD CHF", "buy":0.99443, "sell":0.99343},
  {"pair":"GBP USD", "buy":1.28495, "sell":1.2876},
  {"pair":"GBP CHF", "buy":1.27378, "sell":1.29147},
  {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
  {"pair":"USD JPY", "buy":110.467, "sell":111.417},
  {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
];

class Panels extends Component {
	render() {
		return (
			<div>
				{currenciesPairs.map(currPair => (
					<Panel
						currencyPair={currPair.pair}
						buy={currPair.buy}
						sell={currPair.sell}
					/>
				))}
			</div>
		);
	}
}

export default Panels;
