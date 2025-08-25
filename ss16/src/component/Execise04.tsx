import{ Component } from "react";

interface State{
    count: number
}

export default class Execise04 extends Component<{},State>{

    constructor(props:{}){
        super(props)
        this.state={
            count: 0
        }
    }

    clickMe = ()=>{
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));

    }

    render(){
        return(
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.clickMe}>Click me</button>
            </div>
        )
    }
}