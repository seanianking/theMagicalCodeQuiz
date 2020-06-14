import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HC1 from '../assets/images/HC1.JPG'
import HC2 from '../assets/images/HC2.JPG'
import HC3 from '../assets/images/HC3.JPG'



function BootstrapCarousel() {

    return (
        < div >
            < div className='container-fluid' >
                < div className="row title" style={{ marginBottom: "20px" }} >
                    < div class="col-sm-12 btn btn-warning" >
                        How To Use Bootstrap Carousel In ReactJS
                         </div >
                </div >
            </div >
            < div className='container-fluid' >
                < Carousel >
                    < Carousel.Item style={{ 'height': "300px" }} >
                        < img style={{ 'height': "300px" }}
                            className="d-block w-100"
                            src={HC1} />
                        < Carousel.Caption >
                            < h3 > First Demo </h3 >
                        </Carousel.Caption >
                    </Carousel.Item >
                    < Carousel.Item style={{ 'height': "300px" }}>
                        < img style={{ 'height': "300px" }}
                            className="d-block w-100"
                            src={HC2} />
                        < Carousel.Caption >
                            < h3 > Second Demo</h3 >
                        </Carousel.Caption >
                    </Carousel.Item >
                    < Carousel.Item style={{ 'height': "300px" }}>
                        < img style={{ 'height': "300px" }}
                            className="d-block w-100"
                            src={HC3} />
                        < Carousel.Caption >
                            < h3 > Third Demo</h3 >
                        </Carousel.Caption >
                    </Carousel.Item >
                </Carousel >
            </div >
        </div >
    )
}


export default BootstrapCarousel 