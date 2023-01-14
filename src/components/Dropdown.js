import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCovid, selectedState, openDropdown } from '../actions';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		const onBodyClick = event => {
			if (this.myRef.current && this.myRef.current.contains(event.target)) {
				return;
			}
			this.props.openDropdown(false);
		};

		document.body.addEventListener('click', onBodyClick);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}

	onDropdownClick = () => {
		this.props.openDropdown(!this.props.open);
	};

	renderList() {
		return this.props.options.map(option => {
			const onStateClick = () => {
				this.props.selectedState(option.stateName);
				this.props.onSelectedState(option.stateOutline, option.stateFlag);
				this.props.fetchCovid(option.value);
			};

			return (
				<div className="item" key={option.value} onClick={onStateClick}>
					{option.stateName}
				</div>
			);
		});
	}

	render() {
		return (
			<div
				id="dropdown"
				onClick={this.onDropdownClick}
				className={`ui selection dropdown ${
					this.props.open ? 'visible active' : ''
				}`}
				ref={this.myRef}
			>
				<input type="hidden" name="user" />
				<i className="dropdown icon"></i>
				<div
					className={`text ${
						this.props.selection === this.props.placeholder ? 'default' : ''
					}`}
				>
					{this.props.selection}
				</div>
				<div className={`menu ${this.props.open ? 'visible transition' : ''}`}>
					{this.renderList()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selection: state.selection,
		open: state.open,
	};
};

export default connect(mapStateToProps, {
	fetchCovid,
	selectedState,
	openDropdown,
})(Dropdown);
