import React from 'react';
import Poor from './Assests/poor5.png'
import { Row, Col, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AOS from 'aos';

const Blogs = () => {

    const changeScreen = () => {
        const proo = document.querySelector('.gal2')
        proo.style.marginLeft = '0vw';

        var element = document.querySelector(".pro10");
        element.classList.add("acctive");
        var element1 = document.querySelector(".pro11");
        element1.classList.remove("acctive");
        var element2 = document.querySelector(".pro12");
        element2.classList.remove("acctive");
        var element3 = document.querySelector(".pro13");
        element3.classList.remove("acctive");
    }
    const changeScreen1 = () => {
        const prooo = document.querySelector('.gal2')
        prooo.style.marginLeft = '-100vw';

        var element = document.querySelector(".pro10");
        element.classList.remove("acctive");
        var element1 = document.querySelector(".pro11");
        element1.classList.add("acctive");
        var element2 = document.querySelector(".pro12");
        element2.classList.remove("acctive");
        var element3 = document.querySelector(".pro13");
        element3.classList.remove("acctive");
    }
    const changeScreen2 = () => {
        const proooo = document.querySelector('.gal2')
        proooo.style.marginLeft = '-200vw';

        var element = document.querySelector(".pro10");
        element.classList.remove("acctive");
        var element1 = document.querySelector(".pro11");
        element1.classList.remove("acctive");
        var element2 = document.querySelector(".pro12");
        element2.classList.add("acctive");
        var element3 = document.querySelector(".pro13");
        element3.classList.remove("acctive");
    }
    const changeScreen3 = () => {
        const prooooo = document.querySelector('.gal2')
        prooooo.style.marginLeft = '-300vw';

        var element = document.querySelector(".pro10");
        element.classList.remove("acctive");
        var element1 = document.querySelector(".pro11");
        element1.classList.remove("acctive");
        var element2 = document.querySelector(".pro12");
        element2.classList.remove("acctive");
        var element3 = document.querySelector(".pro13");
        element3.classList.add("acctive");
    }

    AOS.init({
        offset: 200,
        duration: 500,
        delay: 0
    });

    return (
        <div style={{overflow:'hidden'}}>
            <div className="gal1">
                <h2>Blogs / Stories of Change</h2>
            </div>
            <div data-aos="zoom-in" className="gal22">
                <div className="gal2">
                    <div className="gal3">
                        <div className="gal4">
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3" id="a1">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button><Link to={'/blog/a1'}>Read More</Link></button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6} >
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="gal3">
                        <div className="gal4">
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="gal3">
                        <div className="gal4">
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="gal3">
                        <div className="gal4">
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className="blog1">
                                            <div className="blog2">
                                                <img src={Poor} alt="altimage" />
                                            </div>
                                            <div className="blog3">
                                                <h5>Enabling Self-Expression & Instilling Life Skills</h5>
                                                <p>Consequuntur deserunt est eum. Sed quibusdam repellat molestias et excepturi. Voluptas quis vitae . . .</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-out" className="pro3">
                <ul className="pro4">
                <li onClick={changeScreen} className="galll18"><i className="fa fa-arrow-left"></i></li>
                    <li onClick={changeScreen}><button className="pro10 acctive">1</button></li>
                    <li onClick={changeScreen1}><button className="pro11">2</button></li>
                    <li onClick={changeScreen2}><button className="pro12">3</button></li>
                    <li onClick={changeScreen3}><button className="pro13">4</button></li>
                <li onClick={changeScreen3} className="galll18"><i className="fa fa-arrow-right"></i></li>
                </ul>
            </div>
            <div className="aboo">
                <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
            </div>
        </div>
    );
};

export default Blogs;