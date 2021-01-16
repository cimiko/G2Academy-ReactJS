import React, { Component } from 'react';

class InformationLink extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        const {judul, isiJudul, isiHref} = this.props
        return (
            <div class="information">
                <h6>{judul}</h6>
                <a href={isiHref}>{isiJudul}</a>
            </div>
        );
    }
}

export default InformationLink;