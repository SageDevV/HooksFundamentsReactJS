import React, { useEffect, useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1)

    const [parOrImpar, setParOrImpar] = useState("Impar")

    function calcFatorial(num) {
        const n = parseInt(num)
        if (n < 0) return -1
        if (n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    const verificaParOuImpar = value => {
        return value % 2 == 0 ? "Par" : "Impar";
    }

    useEffect(_ => {
        setFatorial(calcFatorial(number))
        setParOrImpar(verificaParOuImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className='center'>
                <div>
                    <span className="text">É: </span>
                    <span className="text red">{parOrImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
