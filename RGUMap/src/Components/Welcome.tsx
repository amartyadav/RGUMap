import React, { PureComponent, ReactNode } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import 'bootstrap/dist/css/bootstrap.min.css';

import siwbImg from '../assets/siwb.png';

interface Props {}
interface State {}

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
                    <Row>
                        <Col xs={8}>
                            <h4>Welcome to the interactive RGU Map</h4>
                        </Col>
                        <Col xs={4}/>
                    </Row>
                    <Row>
                        <Col>
                            <p>Sir Ian Wood Building</p>
                            <button onClick={() => {
                                window.location.href = '/siwb'
                            }}>
                                <img src={siwbImg} width="60" height="30" />
                            </button>
                        </Col>
                    </Row>

                </Container>
            </>
        )
    }
}

export default Welcome
