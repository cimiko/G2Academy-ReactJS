import React from 'react';
import {Counter, ListPeople} from 'ui-kit/component'
import SlideImg from 'ui-kit/component/SlideImg'
import StyleBody from './style.module.css'
import { H3, P, Span, Icon, H1 } from 'ui-kit/Atom'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const Body = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="imgProduct col-4 p-5 mt-5">
                    <SlideImg className="w-100" />
                </div>
                <div className="info col-4 mt-5" data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                    <div className="judulBrand">
                        <H3>Damai fashion jakarta - baju atasan KAOS JUMBO - big size GITA GITA</H3>
                    </div>
                    <div className="rateBrand">
                        <P>Terjual <Span>428</Span> •
                            <Span type='icon'>&#32;<Icon icon={faStar} />&#32;</Span>
                            4.5 <Span>(143 ulasan)</Span> • Diskusi <Span>(39)</Span></P>
                    </div>
                    <div className="hargaBrand">
                        <H1>Rp20.900</H1>
                        <small className={StyleBody.small}><b>Cashback 5%</b></small>
                    </div>
                    <hr />
                    <nav id="navbar-example2" className="navbar navbar-light">
                        <ul className={`nav nav-pills ${StyleBody.navProduct}`}>
                            <li className="nav-item">
                                <a className="nav-link" href="#fat">Detail</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#mdo">Info Penting</a>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                        <div id="fat">
                            <P><Span>Kondisi:</Span> Baru</P>
                            <P><Span>Berat:</Span> 250 Gram</P>
                            <P><Span>Kategori:</Span> Kaos Wanita</P>
                            <P><Span>Etalase:</Span> Semua Etalase</P>
                        </div>
                        <div id="mdo"></div>
                    </div>
                </div>
                <div className={`${StyleBody.cart} col-4 mt-5`}>
                    <Counter />
                </div>
            </div>
            <ListPeople/>
        </div>
    )
}

export default Body
