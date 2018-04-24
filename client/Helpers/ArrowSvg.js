import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const styles = {
	svg: {
		width: "116px",
		height: "45px",
		padding: "2 2",
		cursor: "pointer"
	}
};

class ArrowSvg extends PureComponent {
	state = { fill: "white", stroke: "#ccc" };

	handleHover = () => {
		const fill = this.props.sell ? "salmon" : "lightgreen";

		return this.setState({
			stroke: "lightblue",
			fill
		});
	};

	resetToDefaults = () =>
		this.setState({
			stroke: "$ccc",
			fill: "white"
		});

	render() {
		const { children, right } = this.props;
		const { fill, stroke } = this.state;
		return (
			<svg
				style={styles.svg}
				onMouseEnter={() => this.handleHover()}
				onMouseLeave={() => this.resetToDefaults()}
			>
				<path
					width="2px"
					fill={fill}
					stroke={stroke}
					d={
						right
							? "M116 0 L22 0 L2 18 C2 18 0 25 3 30 L22 44 L116 44 Z"
							: "M0 0 L95 0 L115 18 C115 18 117 25 114 30 L95 44 L0 44 Z"
					}
				/>
				{children}
			</svg>
		);
	}
}

ArrowSvg.propTypes = {
	children: PropTypes.array.isRequired,
	right: PropTypes.bool,
	sell: PropTypes.bool
};

export default ArrowSvg;
 