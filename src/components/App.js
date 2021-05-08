import React from 'react';
import Dropdown from './Dropdown';
import Header from './Header';
import HomePage from './HomePage';
import options from '../options';
import LoadPage from './LoadPage';
import StateData from './StateData';
import DataTable from './DataTable';
import PageDoesNotExist from './PageDoesNotExist';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
    state = { usState: null, stateFlag: null }

    render() {
        const onSelectedState = (stateOutline, stateFlag) => {
            this.setState({ usState: stateOutline, stateFlag: stateFlag });
        }

        return (
            <div className="ui container">
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route exact path="/" >
                            <HomePage >
                                <Dropdown
                                    options={options}
                                    placeholder="Select A State"
                                    onSelectedState={onSelectedState}
                                />
                            </HomePage>
                        </Route>
                        <Route exact path="/data" >
                            <StateData stateFlag={this.state.stateFlag}>
                                <LoadPage stateOutline={this.state.usState} />
                                <DataTable />
                            </StateData>
                        </Route>
                        <Route path="/:id" >
                            <PageDoesNotExist />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;