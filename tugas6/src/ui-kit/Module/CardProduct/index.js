import React, { Component } from 'react';
import { Skeleton, Card } from 'antd';
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
        const { img, title, description } = this.props

        return (
            <>
                <Card
                    style={{ width: '100%', marginTop: 16 }}
                    cover={
                        <Img
                            alt="example"
                            //   src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            src={img}
                            width='200'
                            height='200'
                        />
                    }
                // actions={[
                //     <SettingOutlined key="setting" />,
                //     <EditOutlined key="edit" />,
                //     <EllipsisOutlined key="ellipsis" />,
                // ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            
                            // avatar={
                            //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            // }
                            // title="Card title"
                            // description="This is the description"
                            title={title}
                            description={description}
                        />
                    </Skeleton>
                </Card>
            </>
        );
    }
}

export default CardProduct