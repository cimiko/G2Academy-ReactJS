import React from 'react'
import { Header, Body, Footer } from 'ui-kit/Organism'
import { connect } from 'react-redux'
import { increment, decrement } from 'action'
import Todo from 'Todo'

function Home({ currCounter, incrementCounter, decrementCounter }) {

    const localDecrement = () => {
        if (currCounter > 0) {
            decrementCounter()
        }
    }

    return (
        <div>
            <Header />
            <Body>
                <button onClick={incrementCounter}>+</button>
                <button onClick={localDecrement}>-</button>
                <p>Current counter : {currCounter}</p>
                <Todo />
            </Body>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currCounter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(increment()),
        decrementCounter: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
