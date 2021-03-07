import React, { Component } from 'react';
import { Header, Body, Footer } from 'ui-kit/Organism'
import { NavBar, IconBadge } from 'ui-kit/Module'
import { NavLink, Img } from 'ui-kit/Atom'
import style from './style.module.css'
import { Row, Col, Card, Skeleton, InputNumber, Button } from 'antd'
import { ShoppingTwoTone, BellTwoTone, MessageTwoTone } from '@ant-design/icons';
import { PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux'
import { addOrder, plusProduct, minProduct, deleteOrder } from 'action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { submitOrder } from 'action/order';
import { Link } from 'react-router-dom'



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            totalOrder: 0,
            counter: 1,
            totalPrice: 0,
            search: ''
        }
    }

    componentDidMount() {
        this.sumPrice()
        this.sumCounter()
    }

    async componentDidUpdate(prevProps, prevState) {
        const { cart } = this.props
        if (prevProps.cart !== cart) {
            await this.sumPrice()
            await this.sumCounter()
        }
    }

    sumPrice() {
        const { cart } = this.props
        const price = cart.map(x => x.totalPrice)

        const sumPrice = price.reduce((val, harga) => {
            return val + harga
        }, 0)

        this.setState({ totalPrice: sumPrice })
    }

    sumCounter() {
        const { cart } = this.props
        const count = cart.map(x => x.counter)

        const sumCount = count.reduce((val, harga) => {
            return val + harga
        }, 0)

        this.setState({ counter: sumCount })
    }

    onChange(e) {
        this.setState({ search: e.target.value })
        console.log(this.state.search);
    }

    render() {
        const { Meta } = Card
        const { loading, counter, totalPrice, search } = this.state
        const { cart, plusProduct, minProduct, deleteOrder, submitOrder } = this.props




        return (
            <>
                <Header>
                    <NavBar onChange={this.onChange} name='search' value={search} >
                        <NavLink href="/">
                            <IconBadge count={cart.length}>
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
                    <Row className={`container`}>
                        <Col span={16} className={style.list}>
                            <h3 className={`mb-5`}>Keranjang</h3>
                            {cart.map((x, i) => (
                                <Skeleton loading={loading} avatar active key={i}>
                                    <div style={{ width: '80%', border: '1px solid lightgrey' }} className='my-2'></div>
                                    <Row className='py-2'>
                                        <Col span={6}>
                                            <Img src={x.img} width='150'
                                                height='100' />
                                        </Col>
                                        <Col span={18}>
                                            <Meta
                                                title={x.title}
                                                description={`$${x.price}`}
                                            />
                                            <MinusCircleTwoTone style={{ fontSize: '20px' }} onClick={() => minProduct(i)} />
                                            <InputNumber style={{ width: '50px' }} value={x.counter} bordered={false} min={1} max={999} />
                                            <PlusCircleTwoTone style={{ fontSize: '20px' }} onClick={() => plusProduct(i)} />
                                            <FontAwesomeIcon icon={faTrashAlt} className='ml-3' size='lg' color='red' onClick={() => deleteOrder(i)} cursor='pointer' /> Hapus
                                        </Col>
                                    </Row>
                                </Skeleton>
                            ))}
                        </Col>
                        <Col span={8} className={style.fixed}>
                            <h5>Ringkasan Belanja</h5>
                            <Row>
                                <Col span={18}>
                                    <p>{`Total Harga (${counter} Barang)`}</p>
                                </Col>
                                <Col span={6}>
                                    <p>{`$${totalPrice}`}</p>
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col span={16}>
                                    <h5>{`Total Harga`}</h5>
                                </Col>
                                <Col span={8}>
                                    <h5>{`$${totalPrice}`}</h5>
                                </Col>
                            </Row>
                            <Link to='/' style={{ color: '#52c41a' }}>
                                <Button onClick={() => submitOrder()} style={{ backgroundColor: '#52c41a', borderRadius: '8px' }} block>{`Beli (${counter})`}</Button>
                            </Link>
                        </Col>
                    </Row>
                </Body>
                <Footer></Footer>
            </>
        );
    }
}

const mapStateToProps = store => ({
    cart: store.order
})

const mapDispatchToProps = dispatch => ({
    addOrder: payload => dispatch(addOrder(payload)),
    plusProduct: payload => dispatch(plusProduct(payload)),
    minProduct: payload => dispatch(minProduct(payload)),
    deleteOrder: payload => dispatch(deleteOrder(payload)),
    submitOrder: _ => dispatch(submitOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);