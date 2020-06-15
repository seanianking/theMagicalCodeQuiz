import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import K from '../assets/images/LetterK.jpg'
import B from '../assets/images/LetterB.jpg'

function Announcement() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src={B} style={{width: "100%", height: "100%"}} alt='initials'/>
                    </Col>
                    <Col>
                        <h1>Hey all you people,</h1>
                        <h2>Hey all you people,</h2>
                        <h3>Hey all you people,</h3>
                        <h2>Won't you listen to me?</h2>
                        <h1>I just had a sandwich,</h1>
                        <h2>Not an ordinary sandwich,</h2>
                        <h2>A sandwich filled with Jellyfish Jelly!</h2>
                    </Col>
                    <Col>
                    <img src={K} style={{width: "100%", height: "100%"}} alt='initials'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Announcement
