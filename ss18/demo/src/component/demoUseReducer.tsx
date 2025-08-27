import React, { useReducer } from "react"

interface State{
    count: number
    name: string
}

type Action = {type: "INCREASE"} | {type: "DECREASE"} | {type:"SET_NAME",payload: string}

function reducer (state: State,action: Action){
    switch (action.type){
        case "INCREASE":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREASE":
            return {
                ...state,
                count: state.count - 1
            }
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        default: 
            return{
                state
            }
    }
}

function Demo(){
    const[state,dispacth]= useReducer(reducer,{count: 0,name:``})
    return(
        <>
            <h1>demo useReducer</h1>
            <p>{state.count}</p>
            <p>{state.name}</p>
            <button onClick={()=>{dispacth({type:`INCREASE`})}}>Tang</button>
            <button onClick={()=>{dispacth({type:`DECREASE`})}}>Giam</button>
            <button onClick={()=>{dispacth({type:`SET_NAME`,payload:`tansdasd`})}}>NAME</button>
        </>
    )
}
export default Demo