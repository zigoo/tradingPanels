import React, { Component } from "react";
import Panel from "./Panel";

class Panels extends Component {
	state = {
		interval: null,
		data: [
			{ pair: "USD CHF", buy: 0.99443, sell: 0.99343 },
			{ pair: "GBP USD", buy: 1.28495, sell: 1.2876 },
			{ pair: "GBP CHF", buy: 1.27378, sell: 1.29147 },
			{ pair: "EUR SEK", buy: 9.632, sell: 9.6055 },
			{ pair: "USD JPY", buy: 110.467, sell: 111.417 },
			{ pair: "EUR JPY", buy: 120.589, sell: 120.491 }
		]
	};

	componentDidMount() {
		const interval = setInterval(this.changePrices, 1200);
		this.setState({ interval });
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}

	changePrices = () => {
		const { data } = this.state;

		data.map(dataRow => {
			const increase = Math.round(Math.random()) > 0;
			const elementToChange = Math.round(Math.random() * 5);
			const differencePercent = Math.round(Math.random() * 10);
			const newPrice = increase
				? dataRow.buy * (1 + differencePercent / 100)
				: dataRow.buy * (1 - differencePercent / 100);

			dataRow.buy = newPrice;
		});

		this.setState({ data });
	};

	render() {
		const { data } = this.state;
		return (
			<div>
				{data.map((currentDataRow, index) => (
					<Panel
						key={index}
						currencyPair={currentDataRow.pair}
						buy={currentDataRow.buy}
						sell={currentDataRow.sell}
					/>
				))}
			</div>
		);
	}
}

export default Panels;
