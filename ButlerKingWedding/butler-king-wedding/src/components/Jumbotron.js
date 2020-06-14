import React from 'react'
import BootstrapCarousel from './BootstrapCarousel'
import Jumbotron from 'react-bootstrap/Jumbotron'

function jumbotron() {
    return (
        <div>
            <Jumbotron style={{"height": "25%"}}>
            <BootstrapCarousel/>
            </Jumbotron>
        </div>
    )
}

export default jumbotron
