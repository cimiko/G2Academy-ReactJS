import React from 'react'
import indo from 'ui-kit/Files/Video/Indonesia3.mp4'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { Video, NavLink, H1, Img } from 'ui-kit/Atom'
import { NavBar } from 'ui-kit/Molecule'
import { Row, Col, Card } from 'antd';
import { Jumbotron, Container } from 'react-bootstrap'
import style from './style.module.css'
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Digital, Treking, Couple, Toba, Lombok, RajaAmpat, Solo, Semarang, Bali, Yogya, LabuanBajo } from 'ui-kit/Files/Img'

function Home() {

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
                <Video file={indo} />
                <div className={style.headBack}>
                    {/* <Row>
                        <Col span={12} className={`${style.jumboHead}`}>
                            <H1 anim="fade-up" className={style.h1}>Welcome To</H1>
                            <H1 className={style.h1}>CIMIKO PROJECTS</H1>
                        </Col>
                        <Col span={12}></Col>
                    </Row> */}
                </div>
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
                <div className={style.lastBody}>
                    <Jumbotron fluid className={style.destinasi}>
                        <Container>
                            <H1 anim="zoom-out-down" className={`text-center ${style.h1}`}>Destinasi Pilihan</H1>
                        </Container>
                    </Jumbotron>
                    <div className="site-card-wrapper text-center" data-aos="fade-right">
                        <Row>
                            <Col span={4} offset={2}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Toba" className="img-fluid" src={Toba} />}
                                    >
                                        <Card.Meta title="Danau Toba" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col span={4} offset={1}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Inspirasi" className="img-fluid" src={RajaAmpat} />}
                                    >
                                        <Card.Meta title="Inspirasi Seru" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col span={4} offset={1}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Perjalanan" src={Solo} />}
                                    >
                                        <Card.Meta title="Rencanakan Perjalanan" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col span={4} offset={1}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Perjalanan" src={Bali} />}
                                    >
                                        <Card.Meta title="Rencanakan Perjalanan" />
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4} offset={2}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Toba" src={Lombok} />}
                                    >
                                        <Card.Meta title="Danau Toba" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col span={4} offset={1}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Inspirasi" src={Semarang} />}
                                    >
                                        <Card.Meta title="Inspirasi Seru" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col span={4} offset={1}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Perjalanan" src={Yogya} />}
                                    >
                                        <Card.Meta title="Rencanakan Perjalanan" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col span={4} offset={1}>
                                <Link to="/destinasi">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Img alt="Perjalanan" src={LabuanBajo} />}
                                    >
                                        <Card.Meta title="Rencanakan Perjalanan" />
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Body>
            <Footer />
        </div>
    )
}

export default Home
