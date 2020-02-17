import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe';
import '../scss/G2OnlineVideo.scss';


export default class G2OnlineVideo extends Component {
    render() {
        return (
            <div>
                <Container className="main-content">
                    <h1 className="main-title">G2 Online Video</h1>
                    <Row>
                        <Col md="12">
                            <div id="video-01">
                                <Iframe url="https://drive.google.com/file/d/1pCag8RnO6zLqtrltbcTfIw7IrTLA0d2h/preview"
                                    id="video-01"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-02">
                                <Iframe url="https://drive.google.com/file/d/1XqZgiAB-AGQ_Bhw6iFHcE0Q8BFPVvKVQ/preview"
                                    id="video-02"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-03">
                                <Iframe url="https://drive.google.com/file/d/1R_PAiTuQh9fzB9kafunZbLLWGdsLnJii/preview"
                                    id="video-03"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-04">
                                <Iframe url="https://drive.google.com/file/d/1m78V41PirAjb8H6aXkfaxqPRd9fCuo_O/preview"
                                    id="video-04"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-05">
                                <Iframe url="https://drive.google.com/file/d/1w3_rmhmDDYxAVV33Icd97l4mPOmXq1w9/preview"
                                    id="video-05"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-06">
                                <Iframe url="https://drive.google.com/file/d/17fALsqLfslRvOeBQabDYB8M30q6v8tii/preview"
                                    id="video-06"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-07">
                                <Iframe url="https://drive.google.com/file/d/1xg7_wqLgGknb9mT8REu6K96_fXqfekKY/preview"
                                    id="video-07"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                        <Col md="12">
                            <div id="video-08">
                                <Iframe url="https://drive.google.com/file/d/1pCag8RnO6zLqtrltbcTfIw7IrTLA0d2h/preview"
                                    id="video-08"
                                    width="100%"
                                    height='600px'
                                    position="relative"></Iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}