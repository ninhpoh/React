import React, { Component } from 'react'

interface State{
    name:string,
    email: string,
    age: number,
    error:string
}

export default class Execise05 extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state={
            name: '',
            email:'',
            age: -1,
            error: ''
        }
    }

    handleInput = ( event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name ,value} = event.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e:React.ChangeEvent) => {
        e.preventDefault();
        if(!this.state.email.includes("@")){
            this.setState({
                error: 'email ko hop le'
            })
        }else if(Number(this.state.age)<0){
            this.setState({
                error: 'email ko hop le'
            })
        }
        console.log(this.state);
        
    }

    render() {
        return (
            
        <form onSubmit={this.handleSubmit} style={{margin:`20px`, padding:`30px`}}>
            <h2>nhap du lieu</h2>
            <input type="text" style={{margin:`10px`, }} name='name' placeholder='ten' onChange={this.handleInput}/><br />
            <input type="text" style={{margin:`10px`, }} name='email' placeholder='email' onChange={this.handleInput}/><br />
            <input type="text" style={{margin:`10px`,}} name='age' placeholder='tuoi' onChange={this.handleInput}   /><br />
            <button type='submit'>Submit</button>
            <button>Xoa</button>
        </form>
      
    )
  }
}
