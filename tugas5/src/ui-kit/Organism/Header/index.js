import React from 'react'
import { NavBar } from 'ui-kit/Molecule'

function Header({onInput, onSearch}) {
    return (
        <div>
            <NavBar onInput={onInput} onSearch={onSearch} />
        </div>
    )
}

export default Header
