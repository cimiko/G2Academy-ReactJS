import React from 'react'
import {Data} from 'ui-kit/Molecule'

function Body({ page, person, fetchApi, onPrev, onNext, dataLength}) {
    return (
        <>
            <Data person={person} page={page} fetchApi={fetchApi} Prev={onPrev} Next={onNext} dataLength={dataLength} />
        </>
    )
}

export default Body
