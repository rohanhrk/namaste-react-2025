import {Component} from "react";

class LifeCycleMethod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        console.log("constructor called");
    }

    componentDidMount() {
        console.log("component did mount called");

        this.timer = setInterval(() => {
            console.log("set timer");
        }, 1000);
    }

    componentDidUpdate() {
        console.log("component did update called");
    }

    componentWillUnmount() {
        console.log("component will unmount called");

        clearInterval(this.timer);
    }

    render() {
        console.log("render called");
        return (
            <div className = "component-container">
                <h1>{this.state.count}</h1>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
            </div>
        )
    }
}

export default LifeCycleMethod;