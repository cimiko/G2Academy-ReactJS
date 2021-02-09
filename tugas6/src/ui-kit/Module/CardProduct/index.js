import React, { Component } from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Img } from 'ui-kit/Atom'

const { Meta } = Card;

class CardProduct extends Component {
    state = {
        loading: false,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                {/* <Switch checked={!loading} onChange={this.onChange} /> */}

                <Card
                    style={{ width: '100%', marginTop: 16 }}
                    cover={
                        <Img
                          alt="example"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                      }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </>
        );
    }
}

export default CardProduct