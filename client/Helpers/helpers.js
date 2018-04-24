import React from "react";

const ArrowSvg = ({ children, right }) => {
	return (
		<svg
			width="116px"
			height="45px"
			style={{padding: "2 2"}}>
			<path
				width="1px"
				fill="white"
				stroke="#ccc"
				d={
					right
						? "M116 0 L22 0 L2 18 C2 18 0 25 3 30 L22 44 L116 44 Z"
						: "M0 0 L95 0 L115 18 C115 18 117 25 114 30 L95 44 L0 44 Z"
				}/>
			{children}
		</svg>
	);
};

const InsideText = props => {
	const { children, right, top, buy, sell } = props;

	const SText = props => {
		const { y, fsize, offset, fbold, ...rest } = props;
		let offSetValue = parseInt(offset) + 33;

		return (
			<text
				{...rest}
				x={
					right && top
						? "78px"
						: right && buy
							? `${offSetValue}px`
							: `${offset}px`
				}
				y={y}
				fill={sell ? "crimson" : "green"}
				style={{
					fontSize: fsize,
					fontWeight: fbold ? "bold" : null,
					textShadow: "rgba(0,0,0,.01) 0 0 1px"
				}}
			/>
		);
	};

	const styledText = string => {
		if (top) {
			return (
				<SText y="12" offset="4" fsize="9px" fbold>
					{string}
				</SText>
			);
		}

		return (
			<React.Fragment>
				<SText y="38" offset="4" fsize="18px">
					{string.substring(0, 4)}
				</SText>
				<SText y="38" offset="39" fsize="26px" fbold>
					{string.substring(4, 6)}
				</SText>
				<SText y="27" offset="70" fsize="16px">
					{string.substring(6, 7)}
				</SText>
			</React.Fragment>
		);
	};

	return styledText(children);
};

export { ArrowSvg, InsideText };
