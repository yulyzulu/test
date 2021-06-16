import React from 'react';
import toggle from '../images/toggle.png';
import house1 from '../images/1.png';
import house2 from '../images/4.png';
import house3 from '../images/11.png';
import Panel from './Panel.js';

class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            house: ''
        }
        this.handleHouse1 = this.handleHouse1.bind(this);
        this.handleHouse2 = this.handleHouse2.bind(this);
        this.handleHouse3 = this.handleHouse3.bind(this);
    }

    handleHouse1 = () => {
        this.setState({ house: 1});
        console.log(this.state);
    };
    handleHouse2 = () => {
        this.setState({ house: 2});
        console.log(this.state);
    };
    handleHouse3 = () => {
        this.setState({ house: 3});
        console.log(this.state);
    };

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
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col m-0 p-0">
                        <img className="h-50 mt-5" src={house1} onClick={this.handleHouse1} alt="house1" />
                    </div>
                    <div className="col m-0 p-0">
                        <img className="h-50 mt-5" src={house2} onClick={this.handleHouse2} alt="house2" />
                    </div>
                    <div className="col m-0 p-0">
                        <img className="h-50 mt-5" src={house3} alt="house3" onClick={this.handleHouse3}/>
                    </div>
                </div>
                <div className="text-center">
                    <div>
                        <img className="h-25 toggle-button" src={toggle} alt="toggle" onClick={this.handleButton} />
                    </div>
                    {
                        this.state.show ?
                        <div>
                        <Panel house={this.state.house}  />
                        </div> :
                        ''
                    }
                </div>
            </div>
        )
    }
}


export default Init;
