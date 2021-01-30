import React from 'react'
import {Data} from 'ui-kit/Molecule'

function Body({ page, person, fetchApi, onPrev, onNext, dataLength, number}) {
    return (
        <>
            <Data person={person} page={page} fetchApi={fetchApi} Prev={onPrev} Next={onNext} dataLength={dataLength} number={number} />
        </>
    )
}

export default Body
