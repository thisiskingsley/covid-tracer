import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class StateData extends React.Component {
	componentDidMount() {
		window.history.pushState(null, document.title, window.location.href);
		window.addEventListener('popstate', function (event) {
			window.history.pushState(null, document.title, window.location.reload());
		});
	}

	render() {
		if (!this.props.stateOutline && !this.props.covid.state) {
			return <Redirect to="/" />;
		} else if (!this.props.covid.state) {
			return (
				<div>
					{this.props.children[0]}
					Retrieving Data...
				</div>
			);
		} else {
			return (
				<div className="ui sizer vertical segment">
					{this.props.children[1]}
					<img
						id="state-flag"
						alt="Map of Selected State"
						className="ui fluid image segment"
						src={this.props.stateFlag}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return { covid: state.covid };
};

export default connect(mapStateToProps)(StateData);
