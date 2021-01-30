import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationBtn = ({ className, page, onPrev, onNext, dataLength }) => {
    const first = page === 1 
    const last = page === dataLength
    return (
        <Pagination className={className}>
            <Pagination.Prev disabled={first} onClick={onPrev} />

            <Pagination.Item disabled={first} hidden={first} onClick={onPrev}>{page - 1}</Pagination.Item>
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Item disabled={last} hidden={last} onClick={onNext}>{page + 1}</Pagination.Item>

            <Pagination.Next disabled={last} onClick={onNext}/>
        </Pagination>
    )
}

export default PaginationBtn
