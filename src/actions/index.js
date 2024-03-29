import axios from 'axios';
import history from '../history';

const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 100);
// const datetime = yesterday.toISOString().slice(0, 11) + '00:00:00.000';

export const fetchCovid = value => async dispatch => {
	if (!value) {
		return null;
	} else {
		const response = await axios.get(
			// `https://data.cdc.gov/resource/pwn4-m3yp.json?date_updated=${datetime}&state=${value}`
			`https://data.cdc.gov/resource/pwn4-m3yp.json?date_updated=2023-05-11T00:00:00.000&state=${value}`
		);

		dispatch({ type: 'FETCH_COVID', payload: response.data[0] });

		history.push('/data');
	}
};

export const selectedState = value => {
	return {
		type: 'SELECTED_STATE',
		payload: value,
	};
};

export const openDropdown = value => {
	return {
		type: 'OPEN_DROPDOWN',
		payload: value,
	};
};
