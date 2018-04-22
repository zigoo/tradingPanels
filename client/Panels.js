import React, { PureComponent } from "react";
import Panel from "./Components/Panel";

const currenciesPairs = [
	{ pair: "USD CHF", buy: 0.99143, sell: 0.99043 },
	{ pair: "GBP USD", buy: 1.28495, sell: 1.2836 },
	{ pair: "GBP CHF", buy: 1.27378, sell: 1.27147 },
	{ pair: "EUR SEK", buy: 9.632, sell: 9.6055 },
	{ pair: "USD JPY", buy: 110.467, sell: 110.417 },
	{ pair: "EUR JPY", buy: 120.589, sell: 120.491 }
];

class Panels extends PureComponent {
	render() {
		return (
			<div>
				{currenciesPairs.map((currPair, index) => (
					<Panel
						key={index}
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
