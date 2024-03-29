import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'semantic-ui-react';

const today = new Date();
const datetime =
	today.toISOString().slice(0, 10).replace('2024-', '') + '-' + today.getFullYear();

class DataTable extends React.Component {
	state = { visible: false };

	componentDidMount() {
		this.setState({ visible: true });
	}

	render() {
		return (
			<Transition visible={this.state.visible} animation="scale" duration={2000}>
				<table
					id="data-table"
					className="ui collapsing large selectable definition table"
				>
					<tbody>
						<tr>
							<td className="three wide">State</td>
							<td className="three wide">{this.props.covid.state}</td>
						</tr>
						<tr>
							<td>Date</td>
							<td>{datetime}</td>
						</tr>
						<tr>
							<td>New Cases</td>
							<td>{this.props.covid.new_cases}</td>
						</tr>
						<tr>
							<td>Total Cases</td>
							<td>{this.props.covid.tot_cases}</td>
						</tr>
						<tr>
							<td>Total Death</td>
							<td>{this.props.covid.tot_deaths}</td>
						</tr>
					</tbody>
				</table>
			</Transition>
		);
	}
}

const mapStateToProps = state => {
	return { covid: state.covid };
};

export default connect(mapStateToProps)(DataTable);
