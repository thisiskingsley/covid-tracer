import React from 'react';

const HomePage = (props) => {
    return (
        <div className="ui sizer vertical segment">
            <div className="ui huge center aligned header">Covid Data By State</div>
            <div>{props.children}</div>
            <img alt="Map of US" className="ui fluid image" src="/images/usa.jpg" />
        </div>
    )
}

export default HomePage;