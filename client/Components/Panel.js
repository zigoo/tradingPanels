import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../Styles/styles";
import { ArrowSvg, InsideText } from "../Helpers/";

class Panel extends PureComponent {
	state = { upArrow: this.props.buy > this.props.sell };

	componentDidUpdate(prevProps) {
		if (prevProps.buy < this.props.buy) {
			this.setState({ upArrow: true });
		}

		if (prevProps.buy > this.props.buy) {
			this.setState({ upArrow: false });
		}
	}

	render() {
		const { currencyPair, buy, sell } = this.props;
		const { upArrow } = this.state;

		const buyStringValue = buy.toString().padEnd(7, 0);
		const sellStringValue = sell.toString().padEnd(7, 0);
		const buyCurr = currencyPair.substring(0, 3);
		const sellCurr = currencyPair.substring(4, 7);

		const CurrencyHeader = props => (
			<div {...props} style={styles.pairHeader}>
				{currencyPair}
			</div>
		);

		return (
			<div style={styles.wrapper}>
				<div style={styles.innerBorder}>
					<CurrencyHeader />
					<div style={styles.content}>
						<div style={styles.panel}>
							<ArrowSvg sell>
								<InsideText sell top>
									Sell {sellCurr}
								</InsideText>
								<InsideText sell>{sellStringValue}</InsideText>
							</ArrowSvg>
						</div>
						<div
							style={{
								...styles.triangle,
								borderBottomColor: upArrow ? "green" : "red",
								transform: !upArrow ? "rotate(180deg)" : null
							}}
						/>
						<div style={{ ...styles.panel, ...styles.buyPanel }}>
							<ArrowSvg buy right>
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
