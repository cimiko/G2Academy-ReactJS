import React, { Component } from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { NavBar, Slide, IconBadge, CardProduct } from 'ui-kit/Module'
import { NavLink } from 'ui-kit/Atom'
import { ShoppingTwoTone, BellTwoTone, MessageTwoTone } from '@ant-design/icons';
// import { createFromIconfontCN } from '@ant-design/icons';
import style from './style.module.css'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { fetchProduct, addProduct } from 'action'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetch()
        console.log(this.props.data);
    }

    render() {
        const { data } = this.props
        return (
            <div>
                <Header>
                    <NavBar>
                        {/* <NavLink href="/">
                        <IconBadge count="5">
                            <IconFont type="icon-shoppingcart" twoToneColor="#52c41a" className={style.icon} />
                        </IconBadge>
                    </NavLink> */}
                        <NavLink href="/">
                            <IconBadge count="5">
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
                            {/* <IconBadge count="5">
                            <MessageTwoTone twoToneColor="#52c41a" className={style.icon} />
                        </IconBadge> */}
                        </NavLink>
                    </NavBar>
                </Header>
                <Body>
                    <Slide />
                    <div className="container">
                        <Row justify="center" gutter={[16, 16]}>
                            {data.product.map((x, i) => (
                                <Col span={6} key={i}>
                                    <CardProduct img={x.image} title={x.title} description={`$${x.price}`} loading={data.isLoading} />
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
    data: store.product
})

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchProduct()),
    add: payload => dispatch(addProduct(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// function Home() {
//     // const IconFont = createFromIconfontCN({
//     //     scriptUrl: [
//     //         '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
//     //         '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
//     //     ],
//     // });
//     return (

//     )
// }