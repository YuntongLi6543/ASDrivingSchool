import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe';
import '../scss/G2OnlineVideo.scss';


export default class GOnlineVideo extends Component{
    render(){
        return(
            <div>
                <Container className = "main-content">
                    <h1 className = "main-title">G2 Online Video</h1>
                    <Row>
                        <Col md = "6">
                            <div id = "video-01">
                            <Iframe url="https://drive.google.com/file/d/1nTyAN7MDWApHEIBXZqSXV63kBbRsFns7/preview" 
                            id = "video-01"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            </div>
                        </Col>
                        <Col md = "6">
                            <div id = "video-02">
                            <Iframe url="https://drive.google.com/file/d/1Qlp9-R18f_nN3m2T1IRg-L248NAyDfMQ/preview" 
                            id = "video-02"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = "6">
                            <div id = "video-03">
                            <Iframe url="https://drive.google.com/file/d/19SjFVxMN3atU6_SudMdaLfD2T03iER2v/preview" 
                            id = "video-03"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            </div>
                        </Col>
                        <Col md = "6">
                            <div id = "video-04">
                            <Iframe url="https://drive.google.com/file/d/1pCag8RnO6zLqtrltbcTfIw7IrTLA0d2h/preview" 
                            id = "video-04"
                            width = "100%"
                            height = "480px"
                            position = "relative"></Iframe>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

            </div>

        );
    }
}