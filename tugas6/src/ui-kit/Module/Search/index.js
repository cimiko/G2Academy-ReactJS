import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Input } from 'ui-kit/Atom'

function Search() {
    return (
        <Form inline className="">
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Input type="text" placeholder="Search" className="mr-sm-2 form-control" width="60"/>
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search
