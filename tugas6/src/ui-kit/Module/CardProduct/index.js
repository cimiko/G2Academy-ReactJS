import React, { Component } from 'react';
import { Skeleton, Card} from 'antd';
// import { Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Img } from 'ui-kit/Atom'

const { Meta } = Card;

class CardProduct extends Component {
    state = {
        loading: this.props.loading,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;
        const { img, title, description, children } = this.props

        return (
            <>
                <Card
                    style={{ width: '100%', marginTop: 16 }}
                >
                    <Skeleton loading={loading} avatar active>
                        <Img
                            alt="example"
                            //   src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            src={img}
                            width='200'
                            height='150'
                        />
                        <Meta
                            title={title}
                            description={description}
                        />
                        {children}
                    </Skeleton>
                </Card>
            </>
        );
    }
}

export default CardProduct