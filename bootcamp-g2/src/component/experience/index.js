import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {judul, isi} = this.props
        return (
            <>
                <h6 class="judul-exp">{judul}</h6>
                <p class="content-exp">{isi}</p>
            </>
        );
    }
}

export default Experience;