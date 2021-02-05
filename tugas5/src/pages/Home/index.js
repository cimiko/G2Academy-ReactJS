import React from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { Row, Col, Card } from 'antd'
import { Jumbotron, Container } from 'react-bootstrap'
import indo1 from 'ui-kit/Files/video/Indo1.mp4'
import { Treking, Digital, Couple, Toba, RajaAmpat, Semarang, Solo, Bali, LabuanBajo, Lombok, Yogya } from 'ui-kit/Files/Img'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Video, Img, H1 } from 'ui-kit/Atom'
import style from './style.module.css'
import { Link } from 'react-router-dom'

function Home() {

    const animate = () => {
        AOS.init({
            duration: 2000
        })
    }
    animate()

    return (
        <div>
            <Header />
            <Body>
                <Video file={indo1} />
                {/* <div className={style.headBack}>
                </div> */}
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
