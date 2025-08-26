import React, { Component } from "react";

interface State{
    name: string
    email: string
}

export default class Form extends Component<{},State>{
    constructor (props:{}){
        super(props)
        this.state={
            name: "",
            email: ""
        }
    }

    submitForm = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <>
                <form action="" onSubmit={ this.submitForm}>
                    <label htmlFor="">ten</label>
                    <input type="text" name= "name" onChange={this.handleInput}/><br />
                    <label htmlFor="">email</label>
                    <input type="text" name="email" onChange={this.handleInput}/><br />
                    <button type="submit">summit</button>
                </form>
            </>
        )
    }
}