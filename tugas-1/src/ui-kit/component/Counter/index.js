import React, { Component } from 'react';
// import Input from 'ui-kit/Atom/Input';
import style from './style.module.css';
import { Button, Icon, P, H5 } from 'ui-kit/Atom';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 10,
            min: 1,
            stock: 490,
            harga: 20900,
            warna: "Putih"
        }
    }

    onAdd = () => {
        if (this.state.stock > 0) {
            this.setState(state => ({ counter: state.counter + 1, stock: state.stock - 1 }))
        } else {
            return;
        }

    }

    onSubtract = () => {
        if (this.state.counter > 0) {
            this.setState(state => ({ counter: state.counter - 1, stock: state.stock + 1 }))
        } else {
            return;
        }
    }

    chooseColor = e => {
        this.setState({ warna: e.target.value })
    }

    render() {
        const { counter, stock, harga, warna } = this.state
        let total = harga * counter
        return (
            <>
                <div>
                    <H5>Pilih Varian</H5>
                    <P>Warna: {warna}</P>
                    <select className="form-control" onChange={this.chooseColor} name="warna">
                        <option value="Putih">Putih</option>
                        <option value="Hitam">Hitam</option>
                        <option value="Kuning">Kuning</option>
                    </select>
                </div>
                <hr/>
                <H5>Atur jumlah dan catatan</H5>
                <div className={`${style.flex} mt-2`}>
                    <Button className={style.bg_none} onClick={this.onSubtract}><Icon className={style.icon} icon={faMinusCircle} /></Button>
                    {/* <Input type="number" value={counter} className={`w-25 form-control text-center ${style.input}`} min={min} /> */}
                    <P className={`text-center ${style.inputP}`}>{counter}</P>
                    <Button className={style.bg_none} onClick={this.onAdd}><Icon className={style.icon} icon={faPlusCircle} /></Button>
                    <P className={style.p} >Stock <b>{stock}</b></P>
                </div>
                <div className={`${style.price} mt-2`}>
                    <div className="row">
                        <div className="col-6">
                            <P>Subtotal</P>
                        </div>
                        <div className="col-6">
                            <P className={style.harga}><b>Rp.{total}</b></P>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={`${style.flex} mt-2`}>
                    <Button className={`${style.btn} ${style.primary}`}>Beli Sekarang</Button>
                    <Button className={`${style.btn} ${style.second}`}>+ Keranjang</Button>
                </div>
            </>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number,
    min: PropTypes.number,
    stock: PropTypes.number,
    harga: PropTypes.number,
    warna: PropTypes.string
}

export default Counter;