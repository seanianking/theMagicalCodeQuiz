import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HC1 from '../assets/images/HC1.JPG'
import HC2 from '../assets/images/HC2.JPG'
import HC3 from '../assets/images/HC3.JPG'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function BootstrapCarousel() {

    return (
        < div >
            <Row>
                <Col md={{span: 8, offset: 2}}>
                < Carousel >
                    < Carousel.Item>
                        < img fluid
                            className="d-block w-100"
                            src={HC1} />
                    </Carousel.Item >
                    < Carousel.Item>
                        < img fluid
                            className="d-block w-100"
                            src={HC2} />
                    </Carousel.Item >
                    < Carousel.Item>
                        < img fluid
                            className="d-block w-100"
                            src={HC3} />
                    </Carousel.Item >
                </Carousel >
                </Col>
            </Row>
        </div >

    )
}


export default BootstrapCarousel 