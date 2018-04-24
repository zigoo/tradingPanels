import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../Styles/styles";
import { ArrowSvg, InsideText } from "../Helpers/helpers";


class Panel extends PureComponent {
	render() {
		const { currencyPair, buy, sell } = this.props;

		const buyStringValue = buy.toString().padEnd(7, 0)
		const sellStringValue = sell.toString().padEnd(7, 0)
		const buyCurr = currencyPair.substring(0, 3);
		const sellCurr = currencyPair.substring(4, 7);

		const CurrencyHeader = props => (
			<div {...props} style={styles.pairHeader}>
					{currencyPair}
			</div>)
		
		return (
			<div style={styles.wrapper}>
				<CurrencyHeader/>
				<div style={styles.content}>
					<div style={styles.panel}>
						<ArrowSvg>
							<InsideText sell top>
								Sell {sellCurr}
							</InsideText>
							<InsideText sell>
								{sellStringValue}
							</InsideText>
						</ArrowSvg>
					</div>
					<div style={{...styles.panel, ...styles.buyPanel }}>
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
		);
	}
}

Panel.propTypes = {
	currencyPair: PropTypes.string.isRequired,
	buy: PropTypes.number.isRequired,
	sell: PropTypes.number.isRequired
};

export default Panel;
