import React, { useState, useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery'
import jwt_decode from 'jwt-decode'
import { Form, InputGroup, FormControl, Button, Modal, Container, Card, Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify';

toast.configure();
export default function Address(props) {
const [address, setAddress] = useState([]);
const [upAddress, setUpAddress] = useState([]);
const [extra, setExtra] = useState([]);
const [value, setValue] = useState([]);
const [item, setItem] = useState([]);
const [item1, setItem1] = useState([]);
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const [removeAdd, setRemoveAdd] = useState([]);
const [cartData, setCartData] = useState([]);
const delivery = ["Home", "Work-Working Days", "Work-Any Day"];
var bagPrice = 0;
var wooBagPrice = 0;
var offer = 0;
var bagCount = 0;
var deliveryAmount = 0;
var lastPrice = 0;
const cartId = [];
const [addressId, setAddressId] = useState([]);


    useEffect(() => {
        var token = localStorage.usertoken;
        const decoded = jwt_decode(token)
        var userid = decoded._id;
        axios.post("http://localhost:5000/card/getuser", { id: userid })
            .then(res => {
                setCartData(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [item])

    const numberFormat = value =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0
        }).format(value);

    const orderPro = () => {
        if (addressId.length !== 0) {
            console.log('hi1', bagPrice)
            console.log('hi12', cartId)
            console.log('hi123', addressId.address)
            var token = localStorage.usertoken;
            const decoded = jwt_decode(token)
            var userid = decoded._id;
            axios.post('http://localhost:5000/order/add', { id: userid, address: addressId.address, cart: cartId, price: wooBagPrice })
                .then(order => {
                    props.history.push(`/cart/order`)
                    toast.success(`Ordered Successfully`,{});
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const onPrice = () => {
        cartData.map(cart => {
            bagCount = bagCount + 1;
            wooBagPrice = ((cart.product.price * cart.qty) + wooBagPrice);
            bagPrice = (((cart.product.price - ((cart.product.price / 100) * cart.product.offer)) * cart.qty) + bagPrice);
            offer = ((((cart.product.price / 100) * cart.product.offer) * cart.qty) + offer);
            if (bagPrice >2000) {
                deliveryAmount = 49;
            }
            else {
                // deliveryAmount = 49;
            }
            lastPrice = (wooBagPrice + deliveryAmount);
            return (1)
        })
    }
    const onOrder = () => {
        return cartData.map(cart => {
            return cartId.push(cart._id)
        })
    }
    const deliverCharge = () => {
        if (deliveryAmount === 0) {
            return (<span><span style={{ textDecoration: "line-through" }}>{numberFormat(49)}</span><span style={{ color: "#ff3f6c" }}>FREE DELIVERY</span></span>)
        }
        else {
            return (<span>{numberFormat(49)}</span>)
        }
    }
    useEffect(() => {
        var token = localStorage.usertoken;
        const decoded = jwt_decode(token)
        var userid = decoded._id;
        let data = {
            user: userid,
            name: address.name,
            phone: address.phone,
            pincode: address.pincode,
            address: address.address,
            locality: address.locality,
            city: address.city,
            state: address.state,
            country: address.country,
            addresstype: address.addresstype
        }
        if (address.length !== 0) {

            if (data.name === undefined || data.name.length < 3) {
                $("#name1").css("box-shadow", "1px 1px 10px red");
            }
            else {
                $("#name1").css("box-shadow", "0px 0px 0px #ffffff00");
                if (data.phone === undefined || data.phone.length < 10) {
                    $("#phone1").css("box-shadow", "1px 1px 10px red");
                }
                else {
                    $("#phone1").css("box-shadow", "0px 0px 0px #ffffff00");
                    if (data.pincode === undefined || data.pincode.length < 6) {
                        $("#pincode1").css("box-shadow", "1px 1px 10px red");
                    }
                    else {
                        $("#pincode1").css("box-shadow", "0px 0px 0px #ffffff00");
                        if (data.address === undefined) {
                            $("#address1").css("box-shadow", "1px 1px 10px red");
                        }
                        else {
                            $("#address1").css("box-shadow", "0px 0px 0px #ffffff00");
                            if (data.locality === undefined) {
                                $("#locality1").css("box-shadow", "1px 1px 10px red");
                            }
                            else {
                                $("#locality1").css("box-shadow", "0px 0px 0px #ffffff00");
                                if (data.city === undefined) {
                                    $("#city1").css("box-shadow", "1px 1px 10px red");
                                }
                                else {
                                    $("#city1").css("box-shadow", "0px 0px 0px #ffffff00");
                                    if (data.state === undefined) {
                                        $("#state1").css("box-shadow", "1px 1px 10px red");
                                    }
                                    else {
                                        $("#state1").css("box-shadow", "0px 0px 0px #ffffff00");
                                        if (data.country === undefined) {
                                            $("#country1").css("box-shadow", "1px 1px 10px red");
                                        }
                                        else {
                                            $("#country1").css("box-shadow", "0px 0px 0px #ffffff00");
                                            if (data.addresstype === undefined) {
                                                $("#addresstype1").css("box-shadow", "1px 1px 10px red");
                                            }
                                            else {
                                                $("#addresstype1").css("box-shadow", "0px 0px 0px #ffffff00");
                                                axios.post("http://localhost:5000/address/add", data)
                                                    .then(res => {
                                                        toast.success(`Address Added Successfully`,{autoClose:1500});
                                                        setExtra({ "data": res });
                                                        setShow(false);
                                                    })
                                                    .catch(err => {
                                                        console.log(err);
                                                    })
                                            }
                                        }

                                    }

                                }
                            }
                        }

                    }

                }
            }
        }
    }, [item])

    const userAddress = (value) => {
        if (value.length < 1) {
            return (
                <Row className="card" style={{ margin: "5px 1px 5px 1px", padding: "20px 130px 20px 130px" }}>
                    <div style={{ textAlign: "center" }}>
                        <h3>ADD ADDRESS HERE</h3>
                    </div>
                    <div style={{ padding: "0px 30px 0px 30px" }}>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>FULLNAME</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="name" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>MOBILE NO</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="phone" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: Number(e.target.value) }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>PINCODE</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="pincode" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: Number(e.target.value) }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>FULL ADDRESS</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="address" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>LOCALITY</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="locality" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>CITY</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="city" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>STATE</InputGroup.Text>
                                {/* <div style={{ position: "relative", left: "120px", top: "-40px" }}>
                            <div style={{ margin: "5px" }}><b><Form.Check name="addresstype" value="home" label="Home" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            </div> */}
                            </InputGroup.Prepend>
                            <FormControl name="state" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>COUNTRY</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="country" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>ADDRESS TYPE</InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                        <div style={{ position: "relative", left: "120px", top: "-40px" }}>
                            <div style={{ margin: "5px" }}><b><Form.Check name="addresstype" value="HOME" label="HOME" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            <div style={{ margin: "5px" }}><b><Form.Check name="addresstype" value="WORK" label="WORK" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            <div style={{ margin: "5px" }}><b><Form.Check name="addresstype" value="OTHERS" label="OTHERS" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                        </div>
                        {/* <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>PAYMENT TYPE</InputGroup.Text>
                        <div style={{ position: "relative", left: "120px", top: "-40px" }}>
                            <div style={{ margin: "5px" }}><b><Form.Check name="paymenttype" value="Cash On Delivery" label="Cash On Delivery" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            <div style={{ margin: "5px" }}><b><Form.Check name="paymenttype" value="UPI Payments" label="UPI Payments" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            <div style={{ margin: "5px" }}><b><Form.Check name="paymenttype" value="Debit & Credit Cards" label="Debit & Credit Cards" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                        </div> */}
                    </div>
                    <Button style={{ width: "100%" }} variant="danger" name="hi" value="Submit" onClick={(e) => { setItem({ ...address, [e.target.name]: e.target.value }) }}>
                        ADD ADDRESS
                </Button>
                </Row>
            )
        }
        else {
            return (
                value.map(addressd => (
                    <Card key={addressd._id} style={{ padding: "15px", margin: "5px 0px 5px 0px" }}>
                        <Container>
                            <Row>
                                <Col lg={1}>
                                    <div><b><Form.Check name="selectedaddress" value={addressd._id} type="radio" onChange={(e) => { setAddressId({ address: e.target.value }) }} /></b></div>
                                </Col>
                                <Col lg={11}>
                                    <span><span style={{ fontSize: "20px", fontWeight: "700" }}>{addressd.name}</span><span> ({addressd.addresstype}) </span></span><br />
                                    <span>{addressd.address}</span><span>,{addressd.locality},</span><span>{addressd.city},</span><br /><span>{addressd.state}</span>
                                    <span>-{addressd.pincode}.</span><br /><span>{addressd.state}.</span><br /><span>MOBILE NO:<b>{addressd.phone}.</b></span><br />
                                    <span> </span><br />
                                    <Container style={{ margin: "25px 15px 0px 15px" }}>
                                        <Row>
                                            <Col lg={6}>
                                                <Button style={{ width: "80%" }} variant="outline-danger" onClick={() => { setRemoveAdd({ id: addressd._id }) }}>REMOVE</Button>
                                            </Col>
                                            <Col lg={6}>
                                                <Button style={{ width: "80%" }} variant="outline-success" onClick={() => { setUpAddress(addressd); setShow1(true); }}>EDIT</Button>
                                            </Col>
                                        </Row>
                                    </Container><br />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                ))
            )
        }
    }

    useEffect(() => {
        var token = localStorage.usertoken;
        const decoded = jwt_decode(token)
        var userid = decoded._id;
        let data = {
            user: userid,
        }
        axios.post("http://localhost:5000/address/read", data)
            .then(res => {
                setValue(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [extra])

    useEffect(() => {
        if (removeAdd.length !== 0) {
            var token = localStorage.usertoken;
            const decoded = jwt_decode(token)
            var userid = decoded._id;
            let data = {
                user: userid,
                id: removeAdd.id
            }
            axios.post("http://localhost:5000/address/drop", data)
                .then(res => {
                    console.log(res.data)
                    toast.info(`Address Successfully Dropped`,{autoClose:1500});
                    setExtra(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [removeAdd])

    useEffect(() => {
        if (item1.length !== 0) {
            var token = localStorage.usertoken;
            const decoded = jwt_decode(token)
            var userid = decoded._id;
            var data = {
                id: upAddress._id,
                user: userid,
                name: upAddress.name,
                phone: upAddress.phone,
                pincode: upAddress.pincode,
                address: upAddress.address,
                locality: upAddress.locality,
                city: upAddress.city,
                state: upAddress.state,
                country: upAddress.country,
                addresstype: upAddress.addresstype
            }
            axios.put("http://localhost:5000/address/update", data)
                .then(res => {
                    toast.success(`Address Successfully Updated`,{});
                    console.log(res.data)
                    setExtra(res.data)
                    setShow1(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [item1])

    const final = (cartData) => {
        if(cartData.length !== 0){
            return(<span><h3 style={{ padding: "5px 5px 5px 16px" }}>COUPONS</h3>
                        <Row style={{ padding: "5px 5px 5px 16px" }}>
                            <Col>
                                <h6>APPLY COUPONS</h6>
                            </Col>
                            <Col><Button variant="outline-danger">APPLY</Button></Col>
                        </Row>
                        <hr />
                        <p style={{ padding: "5px 5px 5px 16px" }}><b>GIFTING & PERSONILISATION</b></p>
                        <hr />
                        <b style={{ padding: "5px 5px 5px 16px",textAlign:"centre"}}>PRICE DETAILS</b>
                        <Container fluid={true}>
                            <Row style={{ padding: "5px 5px 5px 0px" }}>
                                <Col>CART TOTAL</Col>
                                <Col>{numberFormat(wooBagPrice)}</Col>
                            </Row>
                            {/* <Row style={{ padding: "5px 5px 5px 0px" }}>
                                <Col style={{ color: "green" }}>Bag Discount</Col>
                                <Col style={{ color: "green" }}><span>-{numberFormat(offer)}</span></Col>
                            </Row> */}
                            {/* <Row style={{ padding: "5px 5px 5px 0px" }}>
                                <Col><b>COUPON DISCOUNT</b></Col>
                                <Col style={{ color: "#ff3f6c" }}><span></span></Col>
                            </Row> */}
                            {/* <Row style={{ padding: "5px 5px 5px 0px" }}>
                                <Col><b>ORDER TOTAL</b></Col>
                                <Col>{numberFormat(wooBagPrice)}</Col>
                            </Row> */}
                            <Row style={{ padding: "5px 5px 5px 0px" }}>
                                <Col>SHIPPING CHARGES</Col>
                                <Col>{deliverCharge()}</Col>
                            </Row>
                            <hr />
                            <Row style={{ padding: "5px 5px 5px 0px" }}>
                                <Col><b>GRANT TOTAL</b></Col>
                                <Col><b>{numberFormat(lastPrice)}</b></Col>
                            </Row>
                            <br />
                              <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "120px" }}>PAYMENT TYPE</InputGroup.Text> <br></br>
                        <div style={{ position: "relative", left: "120px", top: "-40px" }}>
                            <div style={{ margin: "5px" }}><b><Form.Check name="paymenttype" value="Cash On Delivery" label="Cash On Delivery" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            <div style={{ margin: "5px" }}><b><Form.Check name="paymenttype" value="UPI Payments" label="UPI Payments" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                            <div style={{ margin: "5px" }}><b><Form.Check name="paymenttype" value="Debit & Credit Cards" label="Debit & Credit Cards" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                        </div>
                            <Row>
                                <Col><Button onClick={() => { orderPro() }} href=""variant="danger" style={{ width: "90%", height: "50px", padding: "10px", margin: "5%" }}><h5><b>CONFIRM ORDER</b></h5></Button></Col>
                            </Row>
                        </Container></span>)
        }
        else{
            return(
        <Container>
          {/* <Row>
            <Col className="card" style={{padding:"200px 0px 100px 90px",height:"600px"}}>
            <i className="fa fa-5x fa-cart-plus" style={{color:"rgb(247, 103, 103)",position:"relative",left:"40px"}} aria-hidden="true"></i>
              <h4 style={{ fontVariant: "small-caps",color:"rgb(247, 103, 103)"}}><b> OFFERS ARE WAITING FOR YOU SHOP SOON....</b></h4>
              <Button  href='/mens-t-shirt' variant="danger" style={{width:"50%",position:"relative",left:"20px"}} className="addBut">ADD MORE PRODUCT GET ADDITIONAL DISCOUNTS </Button>
            </Col>
          </Row> */}
        </Container>
            )
        }

    }

    return (
        <React.Fragment>
            {onPrice()}
            {onOrder()}
            <Container style={{ marginTop: "100px" }}>
                <Row>
                    <Col lg={8}>
                        <Card style={{ padding: "8px 10px" }}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h3><b>SHOPPING DELIVERY ADDRESS</b></h3>
                                    </Col>
                                    <Col>
                                        <span style={{ float: "right" }}>
                                            <Button variant="primary" onClick={() => setShow(true)}>
                                                ADD YOUR ADDRESS HERE
                                            </Button>
                                        </span>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        {userAddress(value)}
                    </Col>
                    <Col lg={4} style={{ padding: "10px", borderLeft: "1px solid #e5e5e5" }}>
                       {final(cartData)}
                    </Col>
                </Row>
            </Container>

            <Modal style={{ marginTop: "55px" }} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <span style={{ paddingLeft: "150px" }}>
                        <Modal.Title>ADDITIONAL ADDRESS</Modal.Title>
                    </span>
                </Modal.Header>
                <Modal.Body style={{ padding: "10px 50px" }}>
                    <InputGroup id="name1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-sm">FULLNAME</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="name" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup id="phone1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-sm">MOBILE NO</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="phone" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: Number(e.target.value) }) }} />
                    </InputGroup>
                    <InputGroup id="pincode1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>PINCODE</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="pincode" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: Number(e.target.value) }) }} />
                    </InputGroup>
                    <InputGroup id="address1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>FULLADDRESS</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="address" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup id="locality1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>LOCALITY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="locality" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup id="city1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>CITY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="city" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup id="state1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>STATE</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="state" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup id="country1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>COUNTRY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="country" placeholder="" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup id="addresstype1" size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>ADDRESSTYPE</InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <div id="addresstype1" style={{ position: "relative", left: "120px", top: "-40px" }}>
                        <div><b><Form.Check name="addresstype" value="HOME" label="HOME" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                        <div><b><Form.Check name="addresstype" value="WORK" label="WORK" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                        <div><b><Form.Check name="addresstype" value="OTHERS" label="OTHERS" type="radio" onChange={(e) => { setAddress({ ...address, [e.target.name]: e.target.value }) }} /></b></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ width: "100%" }} variant="primary" name="hi" value="Submit" onClick={(e) => { setItem({ ...address, [e.target.name]: e.target.value }) }}>
                        ADD ADDRESS
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal style={{ marginTop: "55px" }} show={show1} onHide={() => setShow1(false)}>
                <Modal.Header closeButton>
                    <span style={{ paddingLeft: "150px" }}>
                        <Modal.Title>EDIT ADDRESS</Modal.Title>
                    </span>
                </Modal.Header>
                <Modal.Body style={{ padding: "10px 50px" }}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>FULLNAME</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.name} name="name" placeholder="" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>MOBILENO</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.phone} name="phone" placeholder="" onChange={(e) => { setUpAddress({ ...address, [e.target.name]: Number(e.target.value) }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>PINCODE</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.pincode} name="pincode" placeholder="" onChange={(e) => { setUpAddress({ ...address, [e.target.name]: Number(e.target.value) }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-sm">ADDRESS</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.address} name="address" placeholder="" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>LOCALITY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.locality} name="locality" placeholder="" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>CITY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.city} name="city" placeholder="" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>STATE</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.state} name="state" placeholder="" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>COUNTRY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={upAddress.country} name="country" placeholder="" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "100px" }}>ADDRESS TYPE</InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <div style={{ position: "relative", left: "120px", top: "-40px" }}>
                        {delivery.map(addressd => {
                            if (upAddress.addresstype === addressd) {
                                return (<div key={addressd}><b><Form.Check name="addresstype" selected value={addressd} label={addressd} type="radio" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} /></b></div>)
                            }
                            else {
                                return (<div key={addressd}><b><Form.Check name="addresstype" value={addressd} label={addressd} type="radio" onChange={(e) => { setUpAddress({ ...upAddress, [e.target.name]: e.target.value }) }} /></b></div>)
                            }
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ width: "100%" }} variant="primary" name="hi" value="Submit" onClick={(e) => { setItem1({ ...address, [e.target.name]: e.target.value }) }}>
                        CONFIRM ADDRESS
                </Button>
                </Modal.Footer>
            </Modal>
            <div style={{ marginBottom: "50px" }}></div>
        </React.Fragment>
    )
}
