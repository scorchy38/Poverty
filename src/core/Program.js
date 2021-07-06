import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Poor from '../core/Assests/poor3.jpg'
import Tri from '../images_icons/Protri.svg'
import Aos from 'aos';
import Poor2 from '../gal/1(1).JPG'
import Poor3 from '../gal/1(2).jpg'
import Poor4 from '../gal/1(3).JPG'
import Poor5 from '../gal/1(4).JPG'
import Poor6 from '../gal/1(5).JPG'
import Poor7 from '../gal/1(6).JPG'
import Poor8 from '../gal/1(7).JPG'
import Poor9 from '../gal/1(8).JPG'
import Poor10 from '../gal/1(9).jpg'
import Poor11 from '../gal/1(10).JPG'
import Poor12 from '../gal/1(11).JPG'
import Poor13 from '../gal/1(12).JPG'
import Poor14 from '../gal/1(13).JPG'
import Poor15 from '../gal/1(14).JPG'
import Poor16 from '../gal/1(15).JPG'
import Poor17 from '../gal/1(16).JPG'
import SLumm from './Slum'
import Studplay from './Studplay'

const Program = () => {

    Aos.init({
        offset: 300,
        duration: 500,
        delay: 12
    });

    return (
        <>
            <div className="abo4">
                <div data-aos="zoom-in" className="abo">
                    <h2>Right To Dance</h2>
                </div>
                <div data-aos="fade-up" className="pro1">
                    <Container fluid>
                        <Row>
                            <Col lg={7} sm={12} xs={12}>
                                <div className="pro2">
                                    <p>Right to Dance advocates for equal right to get dance education for all, irrespective of their backgrounds. Under this, we give free dance education to all the students who wish to learn dance but have no prior knowledge of dance.</p>

                                    <p>By organizing workshops within the slum areas, we try to use dance as a therapy to channelize their energy and teach them life skills. For they are more receptive to knowledge while they are happy and happiness comes naturally with dance.</p>

                                    <p>At Dance out of Poverty we take auditions to select children who have talent and passion for dance. In the process, a lot of kids get left out because they never had the opportunity to get any sort of dance training. Through RTD, we provide basic dance education to all the children who wish to learn Dance, and let them discover their creative side.</p>

                                    <p>This resonates with our belief that every kid has a right to dance, a right to perform and most importantly, a right to express. Due to shortage or unavailability of resources, children from underprivileged backgrounds are unable to exercise this right.</p>
                                </div>
                            </Col>
                            <Col lg={5} sm={12} xs={12}>
                                <div className="pro3">
                                    <img src={Poor} alt="altimage" />
                                </div>
                                <img className="pro33" src={Tri} alt="altimage" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="port6">
                    <h4 style={{ fontWeight: 'bolder', fontSize: '2rem' }}>Gallery</h4>
                    <Container fluid>
                        <Row>
                            <Col data-aos="flip-left" sm={6} md={4} lg={3} >
                                <div className="port7">
                                    <a href={Poor2} target="_black" rel="noopener noreferrer"><img src={Poor2} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor3} target="_black" rel="noopener noreferrer"><img src={Poor3} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor4} target="_black" rel="noopener noreferrer"><img src={Poor4} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor5} target="_black" rel="noopener noreferrer"><img src={Poor5} alt="altimage" /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid data-aos="zoom-in">
                        <Row>
                            <Col sm={6} md={4} lg={3} >
                                <div className="port7">
                                    <a href={Poor6} target="_black" rel="noopener noreferrer"><img src={Poor6} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor7} target="_black" rel="noopener noreferrer"><img src={Poor7} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor8} target="_black" rel="noopener noreferrer"><img src={Poor8} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor10} target="_black" rel="noopener noreferrer"><img src={Poor10} alt="altimage" /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col data-aos="flip-right" sm={6} md={4} lg={3} >
                                <div className="port7">
                                    <a href={Poor11} target="_black" rel="noopener noreferrer"><img src={Poor11} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor12} target="_black" rel="noopener noreferrer"><img src={Poor12} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor13} target="_black" rel="noopener noreferrer"><img src={Poor13} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor14} target="_black" rel="noopener noreferrer"><img src={Poor14} alt="altimage" /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid data-aos="zoom-in">
                        <Row>
                            <Col sm={6} md={4} lg={3} >
                                <div className="port7">
                                    <a href={Poor15} target="_black" rel="noopener noreferrer"><img src={Poor15} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor16} target="_black" rel="noopener noreferrer"><img src={Poor16} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor17} target="_black" rel="noopener noreferrer"><img src={Poor17} alt="altimage" /></a>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <div className="port7">
                                    <a href={Poor9} target="_black" rel="noopener noreferrer"><img src={Poor9} alt="altimage" /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <SLumm />
                <Studplay />
                <div className="aboo">
                    <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
                </div>
            </div>
        </>
    );
};

export default Program;