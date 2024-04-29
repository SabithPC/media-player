
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
    // useNavigate() is a hook
    const navigate=useNavigate()
    const handleNavigate=()=>{
        // navigate to home page
        navigate('/home')
    }
  return (
    <div>
        <Row className='align-items-center'>
            <Col></Col>
            <Col lg={6}>
                <h1>Welcome to Videoo.com</h1>
                <p>where user can use theirfavorite videos user can upload any youtube videos by copy
                    and paste their url.videoo.com will allow to add and remove their uploaded videos 
                    and also arrange them in different categories by drag and drop.it is free.try it
                    now!!!!
                </p>
                <button onClick={handleNavigate} className='btn btn-primary'>Click here to know more!!</button>
            </Col>
            <Col lg={4}>
                <img className='img-fluid' src="data:image/jpeg;base64,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" alt="" />
            </Col>
            <Col></Col>

        </Row>
    </div>
  )
}

export default Landingpage