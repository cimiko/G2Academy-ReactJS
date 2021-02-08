import React from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { NavBar, Slide, IconBadge } from 'ui-kit/Module'
import { NavLink } from 'ui-kit/Atom'
import { createFromIconfontCN, ShoppingTwoTone, BellTwoTone, MessageTwoTone } from '@ant-design/icons';
import style from './style.module.css'

function Home() {
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });
    return (
        <div>
            <Header>
                <NavBar>
                    <NavLink href="/">
                        <IconBadge count="5">
                            <IconFont type="icon-shoppingcart" twoToneColor="#52c41a" className={style.icon} />
                        </IconBadge>
                    </NavLink>
                    <NavLink href="/">
                        <IconBadge count="5">
                            <ShoppingTwoTone twoToneColor="#52c41a" className={style.icon} />
                        </IconBadge>
                    </NavLink>
                    <NavLink href="/">
                        <IconBadge count="5">
                            <BellTwoTone twoToneColor="#52c41a" className={style.icon} />
                        </IconBadge>
                    </NavLink>
                    <NavLink href="/">
                        <IconBadge count="5">
                            <MessageTwoTone twoToneColor="#52c41a" className={style.icon} />
                        </IconBadge>
                    </NavLink>
                </NavBar>
            </Header>
            <Body>
                <Slide />
            </Body>
            <Footer />
        </div>
    )
}

export default Home
