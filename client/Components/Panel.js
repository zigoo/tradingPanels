import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../Styles/styles";
import { ArrowSvg, InsideText } from "../Helpers/helpers";

class Panel extends PureComponent {
	render() {
		const { currencyPair, buy, sell } = this.props;

		const buyStringValue = buy.toString().padEnd(7, 0);
		const sellStringValue = sell.toString().padEnd(7, 0);
		const buyCurr = currencyPair.substring(0, 3);
		const sellCurr = currencyPair.substring(4, 7);

		const CurrencyHeader = props => (
			<div {...props} style={styles.pairHeader}>
				{currencyPair}
			</div>
		);

		const buyOverSell = buy > sell;
		return (
			<div style={styles.wrapper}>
				<div style={{ border: "1px #ccc solid", height: "100%" }}>
					<CurrencyHeader />
					<div style={styles.content}>
						<div style={styles.panel}>
							<ArrowSvg>
								<InsideText sell top>
									Sell {sellCurr}
								</InsideText>
								<InsideText sell>{sellStringValue}</InsideText>
							</ArrowSvg>
						</div>
						<div
							style={{
								...styles.triangle,
								borderBottomColor: buyOverSell ? "green" : "red",
								transform: !buyOverSell ? "rotate(180deg)" : null
							}}
						/>
						<div style={{ ...styles.panel, ...styles.buyPanel }}>
							<ArrowSvg right>
								<InsideText top right>
									Buy {buyCurr}
								</InsideText>
								<InsideText buy right>
									{buyStringValue}
								</InsideText>
							</ArrowSvg>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Panel.propTypes = {
	currencyPair: PropTypes.string.isRequired,
	buy: PropTypes.number.isRequired,
	sell: PropTypes.number.isRequired
};

export default Panel;
