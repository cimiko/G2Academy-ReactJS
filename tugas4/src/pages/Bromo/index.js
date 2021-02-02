import React from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { NavBar } from 'ui-kit/Molecule'
import { Link } from "react-router-dom";
import { NavLink, H1, Img } from 'ui-kit/Atom'
import { Row, Col, Card } from 'antd'
import { Jumbotron } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css';
import style from './style.module.css'
import { Treking, Couple, Digital } from 'ui-kit/Files/Img'

function Bromo() {
    const animate = () => {
        AOS.init({
            duration: 2000
        })
    }
    animate()
    return (
        <div>
            <Header>
                <NavBar>
                    <NavLink url="#">
                        <Link className={style.navLink} to="/">Home</Link>
                    </NavLink>
                    <NavLink url="#">
                        <Link className={style.navLink} to="/destinasi">Destinasi</Link>
                    </NavLink>
                    <NavLink url="#">
                        <Link className={style.navLink} to="/promo">Promo</Link>
                    </NavLink>
                </NavBar>
            </Header>
            <Body>
                <Jumbotron className={`${style.jumboHead} text-center`}>
                    <div className={style.jumboText}>
                        <H1 anim="fade-up" className={style.wht}>Packages We Offer To You</H1>
                    </div>
                </Jumbotron>

                <div className={style.cardWrap} data-aos="fade-down">
                    <Row>
                        <Col span={6} offset={4}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<Img className={style.cardShadow} alt="Atraksi" src={Treking} />}
                            >
                                <Card.Meta title="Tempat & Atraksi" />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<Img className={style.cardShadow} alt="Inspirasi" src={Couple} />}
                            >
                                <Card.Meta title="Inspirasi Seru" />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<Img className={style.cardShadow} alt="Perjalanan" src={Digital} />}
                            >
                                <Card.Meta title="Rencanakan Perjalanan" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Body>
            <Footer />
        </div>
    )
}

export default Bromo
