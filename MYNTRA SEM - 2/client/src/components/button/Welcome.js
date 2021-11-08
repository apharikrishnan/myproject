import React, { Component } from 'react'
import {Row,
    Container,
    Button,
    Col
    } from "react-bootstrap";

export default class Welcome extends Component {
    render() {
        return (

            <Container>
            <row>
            <h6>WELCOME</h6>
            </row>
            <Row>
            <Col><Button variant="outline-success" href="/register">SIGNUP</Button></Col>
            <Col></Col>
            <Col><Button variant="outline-danger" href="/login">LOGIN</Button></Col>
            </Row> 
            </Container>
        )
    }
}

