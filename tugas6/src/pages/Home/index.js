import React, { Component } from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { NavBar, Slide, IconBadge, CardProduct } from 'ui-kit/Module'
import { NavLink, Img } from 'ui-kit/Atom'
import { ShoppingTwoTone, BellTwoTone, MessageTwoTone } from '@ant-design/icons';
import style from './style.module.css'
import { Row, Col, Button, InputNumber, Modal } from 'antd'
import { PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux'
import { fetchProduct, addProduct, addOrder } from 'action'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            visible: false,
            confirmLoading: false,
            count: 0,
            id: 0,
            title: '',
            img: '',
            price: 0,
            description: ''
        }
    }

    componentDidMount() {
        this.props.fetch()
        console.log(this.props.fetch);
    }

    cartProduct = async a => {
        const { data } = this.props
        console.log(this.props.data.product[a]);
        await this.setState({
            id: data.product[a].id,
            img: data.product[a].image,
            title: data.product[a].title,
            description: data.product[a].description,
            price: data.product[a].price
        })
        this.showModal()
    }

    counterPlus() {
        this.setState({ counter: this.state.counter + 1 })
        console.log(this.state.counter);
    }

    counterMin() {
        this.setState({ counter: this.state.counter - 1 })
        console.log(this.state.counter);
    }

    showModal = () => {
        this.setState({ visible: true })
    };

    handleOk = async () => {
        const { img, title, description, price, id } = this.state
        const { addOrder } = this.props
        await this.setState({
            modalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
            count: this.state.count + 1
        })
        console.log(this.state.count);
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
                counter: 1
            })
        }, 2000);
        
        await addOrder({
            id,
            title,
            img,
            description,
            price
        })
        this.setState({
            id:0,
            img: '',
            description: '',
            price: 0,
            title: ''
        })
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({ visible: false, counter: 1 })
    };

    render() {
        const { data } = this.props
        const { counter, visible, confirmLoading, img, count } = this.state

        return (
            <div>
                <Header>
                    <NavBar>
                        <NavLink href="/">
                            <IconBadge count={count}>
                                <ShoppingTwoTone twoToneColor="#52c41a" className={style.icon} />
                            </IconBadge>
                        </NavLink>
                        <NavLink href="/">
                            <IconBadge count="0">
                                <BellTwoTone twoToneColor="#52c41a" className={style.icon} />
                            </IconBadge>
                        </NavLink>
                        <NavLink href="/">
                            <IconBadge count="0">
                                <MessageTwoTone twoToneColor="#52c41a" className={style.icon} />
                            </IconBadge>
                        </NavLink>
                    </NavBar>
                </Header>
                <Body>
                    <Slide />
                    <div className="container">
                        <Row justify="center" gutter={[16, 16]}>
                            {data.product.map((x, i) => (
                                <Col span={6} key={x.id}>
                                    <CardProduct img={x.image} title={x.title} description={`$${x.price}`} loading={data.isLoading} >
                                        <Row>
                                            <Col span={12} offset={12}>
                                                <Button type="primary" onClick={() => this.cartProduct(i)} >Order Now</Button>
                                                <Modal
                                                    title="Title"
                                                    visible={visible}
                                                    onOk={this.handleOk}
                                                    confirmLoading={confirmLoading}
                                                    onCancel={this.handleCancel}
                                                >
                                                    <Row>
                                                        <Col span={12}>
                                                            <Img
                                                                alt="example"
                                                                //   src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                                src={img}
                                                                width='200'
                                                                height='150'
                                                            />
                                                        </Col>
                                                        <Col span={12}>
                                                            <Row>
                                                                <Col span={24}>
                                                                    <h5>Jumlah Barang</h5>
                                                                    <MinusCircleTwoTone style={{ fontSize: '20px' }} onClick={() => this.counterMin()} />
                                                                    <InputNumber style={{ width: '50px' }} value={counter} bordered={false} min={1} max={999} />
                                                                    <PlusCircleTwoTone style={{ fontSize: '20px' }} onClick={() => this.counterPlus()} />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Modal>
                                            </Col>
                                        </Row>
                                    </CardProduct>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Body>
                <Footer />
            </div>
        );
    }
}


const mapStateToProps = store => ({
    data: store.product,
})

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchProduct()),
    add: payload => dispatch(addProduct(payload)),
    addOrder: payload => dispatch(addOrder(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)