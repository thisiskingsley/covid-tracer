import React from 'react';


class LoadPage extends React.Component {
    render() {
        return (
            <div>
                <img alt="Outline of State" className="ui medium image" src={this.props.stateOutline} />
            </div>
        )
    }
}

export default LoadPage;