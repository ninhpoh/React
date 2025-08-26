import React, { Component } from "react";

interface State{
    content: string
}

export default class Exercise03 extends Component<{},State>{

    constructor(props:{}){
        super(props)
        this.state={
            content: "Rikkei Academy"
        }
    }
    
        handleChage = () => {
            if(this.state.content == "Rikkei Academy"){
                this.setState({content: "RikkeiSoft"})
            }else{
                this.setState({content: "Rikkei Academy"})
            }
        }

    render(){
        return( 
            <>
                <h1>{this.state.content}</h1><br></br>
                <button onClick={this.handleChage}>Chage</button>
            </>
        )
    }
}