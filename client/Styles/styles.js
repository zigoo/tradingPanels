const styles = {
	wrapper: {
			display: "inline-block",
		width: "200px",
		height: "80px",
		backgroundColor: "#e8e5e5",
		border: "1px #ccc solid"
	},
	pairHeader: {
		height: "20px",
		textAlign: "center",
		fontSize: "16px",
		color: "white",
		backgroundColor: "#777"
	},
	content: {
		display: "flex",
		flexWrap: "nowrap",
		padding: 5
	},
	sellPanel: {
		flex: "50%",
		fontSize: "10px",
		height: "35px",
		color: "red",
		border: "1px red solid",
		marginRight: "5px"
	},
	buyPanel: {
		flex: "50%",
		fontSize: "10px",
		height: "35px",
		color: "green",
		border: "1px red solid",
		textAlign: "right"
	}
};

export default styles;