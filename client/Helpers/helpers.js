import React from "react";

const ArrowSvg = ({ children, right }) => {
	return (
		<svg width="100px" height="36px">
			<path
				width="1px"
				fill="white"
				stroke="gray"
				d={
					right
						? "M100 0 L76 0  24 0 L 10 14 C 10 14 8 21 11 26 L 24 36 L 100 36 Z"
						: "M0 0 L76 0 L90 14 C90 14 92 21 89 26 L76 36 L0 36 Z"
				}/>
			{children}
		</svg>
	);
};

const InsideText = props => {
	const { children, right, top, buy, sell } = props;

	const SText = props => {
		const { y, fsize, offset, fbold, ...rest } = props;
		let offSetValue = parseInt(offset) + 45;

		return (
			<text
				{...rest}
				x={
					right && top
						? "60px"
						: right && buy
							? `${offSetValue}px`
							: `${offset}px`
				}
				y={y}
				fill={sell ? "red" : "green"}
				style={{
					fontSize: fsize,
					fontWeight: fbold ? "bold" : null
				}}
			/>
		);
	};

	const styledText = string => {
		if (top) {
			return (
				<SText y="10" offset="2">
					{string}
				</SText>
			);
		}

		return (
			<React.Fragment>
				<SText y="30" offset="2" fsize="12px">
					{string.substring(0, 4)}
				</SText>
				<SText y="30" offset="25" fsize="16px" fbold>
					{string.substring(4, 6)}
				</SText>
				<SText y="25" offset="45">
					{string.substring(6, 7)}
				</SText>
			</React.Fragment>
		);
	};

	return styledText(children);
};

export { ArrowSvg, InsideText };
