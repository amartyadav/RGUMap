import React, { PureComponent, ReactNode } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import 'bootstrap/dist/css/bootstrap.min.css';

import siwbImg from '../assets/siwbsharpen.png';
import igbImg from '../assets/ishbelsharpen.png';
import annexImg from '../assets/annexesharpen.png';
import grayImg from '../assets/rayschoolsharpen.png';
//import rguLogo from '../assets/rguLogo.svg';
interface Props { }
interface State { }

class Welcome extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <Container>
                    <div className='stickyTitle'>
                        <Row >
                            <Col xs={8}>
                                <h4 style={{color: "white", paddingLeft: "20px"}}>RGU Map</h4>
                            </Col>
                            <Col xs={4} >
                                {/* <img src={rguLogo} width="30" height="30" style={{paddingRight: "20px"}} /> */}
                            </Col>
                        </Row>
                    </div>

                    <div className='contentScrollWelcome'>
                    <br />
                    <Row className='buildingIconImage'>
                        <Col>
                            <p>Sir Ian Wood Building</p>
                            <button style={{border: "none", background: "none", boxShadow: "2px 2px 2px 3px #d3d3d3"}}
                            onClick={() => {
                                window.location.href = '/siwb'
                            }}>
                                <img src={siwbImg} width="300" />
                            </button>
                        </Col>
                    </Row>
                    <br />
                    <Row className='buildingIconImage'>
                        <Col>
                            <p>Ishbel Gordon Building</p>
                            <button style={{border: "none", background: "none", boxShadow: "2px 2px 2px 3px #d3d3d3"}}
                            onClick={() => {
                                window.location.href = '/siwb'
                            }}>
                                <img src={igbImg} width="300" height="200" />
                            </button>
                        </Col>
                    </Row>
                    <br />
                    <Row className='buildingIconImage'>
                        <Col>
                            <p>Garthdee House Annexe</p>
                            <button style={{border: "none", background: "none", boxShadow: "2px 2px 2px 3px #d3d3d3"}}
                            onClick={() => {
                                window.location.href = '/siwb'
                            }}>
                                <img src={annexImg} width="300" height="190" />
                            </button>
                        </Col>
                    </Row>
                    <br />
                    <Row className='buildingIconImage'>
                        <Col>
                            <p>Gray's School Of Art</p>
                            <button style={{border: "none", background: "none", boxShadow: "2px 2px 2px 3px #d3d3d3"}}
                            onClick={() => {
                                window.location.href = '/siwb'
                            }}>
                                <img src={grayImg} width="300" height="180" />
                            </button>
                        </Col>
                    </Row>
                    </div>

                </Container>
            </>
        )
    }
}

export default Welcome
