import React from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { NavBar } from 'ui-kit/Molecule'
import { BrowserRouter as Route, Link, Switch, useRouteMatch} from "react-router-dom";
import { NavLink, H1, H3 } from 'ui-kit/Atom'
import AOS from 'aos'
import 'aos/dist/aos.css';
import style from './style.module.css'
import { Jumbotron } from 'react-bootstrap'
import { Row, Col } from 'antd'
import {Bromo} from 'pages'

function Destinasi() {
    const animate = () => {
        AOS.init({
            duration: 2000
        })
    }
    animate()

    let { url, path } = useRouteMatch()

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
                <Jumbotron className={`${style.jumboHead1}`}>
                    <Row className={style.jumboText}>
                        <Col span={12}>
                            <Link to={`${url}/bromo`}>
                                <H1 anim="fade-up" className={style.wht}>Gunung Bromo</H1>
                            </Link>
                            {/* <H1 className={style.h1}>Gunung berapi di Jawa Timur</H1> */}
                            <H3 anim="fade-right" className={style.wht}>Gunung Bromo atau dalam bahasa Tengger dieja "Brama", adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia. Gunung ini memiliki ketinggian 2.329 meter di atas permukaan laut dan berada dalam empat wilayah kabupaten, yakni Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan Kabupaten Malang.</H3>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron className={`${style.jumboHead2}`}>
                    <Row className={style.jumboText}>
                        <Col span={12}>
                            <H1 anim="fade-left" className={style.wht}>Raja Ampat</H1>
                            {/* <H1 className={style.h1}>Gunung berapi di Jawa Timur</H1> */}
                            <H3 anim="fade-down" className={style.wht}>Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang berdekatan dan berlokasi di barat bagian Kepala Burung Pulau Papua. Secara administrasi, gugusan ini berada di bawah Kabupaten Raja Ampat, Provinsi Papua Barat.</H3>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron className={`${style.jumboHead3}`}>
                    <Row className={style.jumboText}>
                        <Col span={12}>
                            <H1 anim="fade-up-left" className={style.wht}>Lombok</H1>
                            {/* <H1 className={style.h1}>Gunung berapi di Jawa Timur</H1> */}
                            <H3 anim="fade-down-right" className={style.wht}>Pulau Lombok adalah sebuah pulau di kepulauan Sunda Kecil atau Nusa Tenggara yang terpisahkan oleh Selat Lombok dari Bali di sebelah barat dan Selat Alas di sebelah timur dari Sumbawa. Pulau ini kurang lebih berbentuk bulat dengan semacam "ekor" di sisi barat daya yang panjangnya kurang lebih 70 km.</H3>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron className={`${style.jumboHead4}`}>
                    <Row className={style.jumboText}>
                        <Col span={12}>
                            <H1 anim="flip-left" className={style.wht}>Bandung</H1>
                            {/* <H1 className={style.h1}>Gunung berapi di Jawa Timur</H1> */}
                            <H3 anim="flip-right" className={style.wht}>Kota Bandung adalah kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi ibu kota provinsi tersebut. Kota ini terletak 140 km sebelah tenggara Jakarta, dan merupakan kota terbesar di wilayah Pulau Jawa bagian selatan.</H3>
                        </Col>
                    </Row>
                </Jumbotron>

                <Jumbotron className={`${style.jumboHead5}`}>
                    <Row className={style.jumboText}>
                        <Col span={12}>
                            <H1 anim="flip-up" className={style.blk}>Bali</H1>
                            {/* <H1 className={style.h1}>Gunung berapi di Jawa Timur</H1> */}
                            <H3 anim="flip-down" className={style.blk}>Bali adalah sebuah pulau di Indonesia yang dikenal karena memiliki pegunungan berapi yang hijau, terasering sawah yang unik, pantai, dan terumbu karang yang cantik. Terdapat banyak tempat wisata religi seperti Pura Uluwatu yang berdiri di atas tebing. Di Selatan, kota pesisir pantai Kuta menawarkan wisata hiburan malam yang tak pernah sepi, sementara Seminyak, Sanur, dan Nusa Dua dikenal dengan suguhan resort yang populer. Pulau Bali juga dikenal sebagai tempat untuk relaksasi dengan yoga dan meditasi.</H3>
                        </Col>
                    </Row>
                </Jumbotron>

                <Jumbotron className={`${style.jumboHead6}`}>
                    <Row className={style.jumboText}>
                        <Col span={12}>
                            <H1 anim="zoom-in-down" className={style.wht}>Labuan Bajo</H1>
                            {/* <H1 className={style.h1}>Gunung berapi di Jawa Timur</H1> */}
                            <H3 anim="zoom-in-up" className={style.wht}>Labuan Bajo merupakan salah satu desa dari 19 desa dan kelurahan yang berada di kecamatan Komodo, Kabupaten Manggarai Barat, provinsi Nusa Tenggara Timur, Indonesia.</H3>
                        </Col>
                    </Row>
                </Jumbotron>

                <Switch>
                    <Route path={`${path}/:name`}>
                        <Bromo/>
                    </Route>
                    <Route path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                </Switch>
            </Body>
            <Footer />
        </div>
    )
}

export default Destinasi
