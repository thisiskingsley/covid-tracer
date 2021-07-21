import React from 'react';
import '../App.css';

class HomePage extends React.Component {
	render() {
		return (
			<div className="ui sizer vertical segment">
				<div className="ui huge center aligned header">Covid Data By State</div>
				<div>{this.props.children}</div>
				<img alt="Map of US" className="ui fluid image" src="/images/usa.jpg" />
			</div>
		);
	}
}

export default HomePage;
