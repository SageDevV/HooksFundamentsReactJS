import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButtons from './useCallBackButtons'

const UseCallback = _ => {

    const [count, setCount] = useState(0)

    const inc = useCallback((delta) => {setCount(count + delta)},
    [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
