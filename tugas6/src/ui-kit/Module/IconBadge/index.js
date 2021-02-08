import React, { Component } from 'react';
import { Badge } from 'antd';

class IconBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
    }


    render() {
        const { children } = this.props
        return (
            <div>
                <div>
                    <Badge count={this.state.count}>
                        {children}
                    </Badge>
                </div>
            </div>
        );
    }
}

export default IconBadge;