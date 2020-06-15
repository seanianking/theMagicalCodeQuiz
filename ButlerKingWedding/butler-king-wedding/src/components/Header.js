import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
        <div className="pt-3 pb-3 bg-warning">
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Thank you for celebrating with us!</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
