import {Component} from "react";

/*------------- React Timer APP --------------*/
export class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isCounting: false
        };
    };

    handleStart = () => {
        this.setState({isCounting: true});
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000);
    };

    handleStop = () => {
        this.setState({isCounting: false});
        clearInterval(this.timerId);
    };

    handleReset = () => {
        this.setState({isCounting: false, count: 0});
        clearInterval(this.timerId);
    };

    componentDidMount() {
      const userCount = localStorage.getItem("timer")
      if (userCount){
          this.setState({count: + userCount});
      }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem("timer", this.state.count);
    };

    render(){
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center text-info">Timer</h3>
                                </div>
                                <div className="card-body">
                                    <h1 className="text-center text-primary">{this.state.count}</h1>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    {!this.state.isCounting ? (
                                        <button type="button" className="btn btn-outline-success" onClick={this.handleStart}>Start</button>
                                    ) : (
                                        <button type="button" className="btn btn-outline-danger" onClick={this.handleStop}>Stop</button>
                                    )}

                                    <button type="button" className="btn btn-outline-dark" onClick={this.handleReset}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}