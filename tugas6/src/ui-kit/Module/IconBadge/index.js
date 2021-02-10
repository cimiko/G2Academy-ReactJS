import React, { Component } from 'react';
import { Badge } from 'antd';

class IconBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const { children, count } = this.props
        return (
            <div>
                <div>
                    <Badge count={count}>
                        {children}
                    </Badge>
                </div>
            </div>
        );
    }
}

export default IconBadge;