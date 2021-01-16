import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {black, count} = this.props
        const test = () => {
            let sk = document.querySelector('.skill-indicator');
            
            for (let i = 0; i < count.length; i++) {
                if(i < black){
                    sk.innerHTML += `<div class="circle blackCircle"></div>`
                }else{
                    sk.innerHTML += `<div class="circle whiteCircle"></div>`
                }
            }

        }
        return (
            <>
                <div class="col-6 skill-indicator">
                    {test()}
                </div>
            </>
        );
    }
}

export default Skill;