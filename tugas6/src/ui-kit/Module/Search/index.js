import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Input } from 'ui-kit/Atom'

function Search({onChange, name}) {
    return (
        <Form inline className="">
            <Input type="text" name={name} placeholder="Search" className="mr-sm-2 form-control" width="60" onChange={onChange} />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search
