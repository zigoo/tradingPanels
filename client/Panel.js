import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Panel extends PureComponent {
	state = { test: "test" };

	render() {
		return <div>{this.state.test}</div>;
	}
}

// Panel.propTypes = {

// }

export default Panel;
