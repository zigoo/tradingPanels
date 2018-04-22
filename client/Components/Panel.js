import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../Styles/styles";

const newLineSpan = {
	style: {
		display: "block"
	}
};

class Panel extends PureComponent {
	render() {
		const { currencyPair, buy, sell } = this.props;

		const buyCurr = currencyPair.substring(0, 3);
		const sellCurr = currencyPair.substring(4, 7);

		return (
			<div style={styles.wrapper}>
				<div style={styles.pairHeader}>
					{currencyPair}
				</div>
				<div style={styles.content}>
					<div style={styles.sellPanel}>
						<span {...newLineSpan}>
							Sell {sellCurr}
						</span>
						<span>{sell}</span>
					</div>
					<div style={styles.buyPanel}>
						<span {...newLineSpan}>
							Buy {buyCurr}
						</span>
						<span>{buy}</span>
					</div>
				</div>
			</div>
		);
	}
}

Panel.propTypes = {
	currencyPair: PropTypes.string.isRequired,
	buy:PropTypes.number.isRequired,
	sell:PropTypes.number.isRequired
}

export default Panel;
