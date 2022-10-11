import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState([])

    const count = useRef(null);
    const input1 = useRef(null);
    const input2 = useRef(null);

    const merge = (s1, s2) => {
        return [...s1].map((e, i) => `${e}${s2[i] || " "}`).join("")
    }

    useEffect(_ => {
        count.current++
        input2.current.focus()
    }, [value1])

    useEffect(_ => {
        count.current++
        input1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value3} [</span>
                    <span className="text red">{merge(value1, value2)}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="text"
                    ref={input1} value={value1}
                    onChange={e => setValue1(e.target.value)} />
            </div>

            <div className="center">
                <input type="text" className="text"
                    ref={input2} value={value2}
                    onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
