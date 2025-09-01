import React, { useReducer } from "react"

interface State{
    count: number
    name: string
}

type Action = {type: "INCREASE"} | {type: "DECREASE"}

function reducer
 (state: State,action: Action){
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
        default: 
            return{
                state
            }
    }
}

function Counter(){
    const[state,dispacth]= useReducer(reducer,{count: 0,name:``})
    return(
        <>
            <h1>useReducer</h1>
            <p>{state.count}</p>
            <p>{state.name}</p>
            <button onClick={()=>{dispacth({type:`INCREASE`})}}>Tang</button>
            <button onClick={()=>{dispacth({type:`DECREASE`})}}>Giam</button>
        </>
    )
}
export default Counter