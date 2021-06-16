import React from 'react';
import toggle from '../images/toggle.png';
import Panel from './Panel.js';


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    handleButton = () => {
        if (this.state.show) {
            this.setState({ show: false });
            console.log(this.state.show);
        }
        else {
            this.setState({ show: true });
            console.log(this.state.show)
        }
    }

    render() {
        return (
            <div className="text-center">
                <div>
                    <img className="h-25 toggle-button" src={toggle} alt="toggle" onClick={this.handleButton} />
                </div>
                {
                    this.state.show ?
                    <div>
                       <Panel house={this.props}  />
                    </div> :
                    ''
                }
            </div>
        )
    }
}

export default Toggle;