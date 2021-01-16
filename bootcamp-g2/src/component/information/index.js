import React, { Component } from 'react';

class Information extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        const {judul, isiJudul} = this.props
        return (
            <div class="information">
                <h6>{judul}</h6>
                <p>{isiJudul}</p>
            </div>
        );
    }
}

export default Information;
