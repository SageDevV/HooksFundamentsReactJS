import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0

    // cart: [{}],
    // products: [{}, {}],
    // user: null,
    // number: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "x7":
            return { ...state, number: (state.number + action.payload) * 7 };

        case "/25":
            return { ...state, number: parseInt((state.number + action.payload) / 25) };

        case "n":
            return { ...state, number: state.number + action.payload };

        default:
            return { ...state }
    }

    // switch (action.type) {
    //     case 'numberAdd2':
    //         return {...state, number: state.number + 2}
    //     case 'login':
    //         return {...state, user: {name: action.payload}}
    //     default:
    //         return {...state}
}


const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(1)


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.number}</span>
                <button className="btn"
                    onClick={_ => dispatch({ type: "x7", payload: 1 })}>* por 7</button>

                <button className="btn"
                    onClick={_ => dispatch({ type: "/25", payload: 1 })}>/ por 25</button>

                <button className="btn"
                    onClick={_ => dispatch({ type: "n", payload: number})}>+ n</button>

                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)}  />

                {/* {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>}
                <span className="text">{state.number}</span> */}
                {/* <div>
                    <button className='btn'
                        onClick={_ => dispatch({type: "numberAdd2"})}>+2
                    </button>
                    <button className='btn'
                        onClick={_ => dispatch({type: "login", payload: "Maria"})}>Login
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default UseReducer
