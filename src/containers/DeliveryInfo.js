import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { placeOrder } from 'utils/redux/actions/cart'

const DeliveryInfo = ({ step }) => {
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const { name, email, token, items } = useSelector((state) => ({
    name: state.authReducers.user && state.authReducers.user.name,
    email: state.authReducers.user && state.authReducers.user.email,
    token: state.authReducers.user && state.authReducers.user.api_token,
    items: state.cartReducers.items,
  }))
  return (
    <div className="item">
      <div className="header">
        <div className="title">Delivery Info</div>
        {step > 2 && <FontAwesomeIcon icon={faCheckCircle} color="green" />}
      </div>
      {step === 2 && (
        <div className="content">
          <Form
            onSubmit={handleSubmit((values) =>
              dispatch(
                placeOrder(
                  token,
                  { customer_name: name, customer_email: email },
                  values,
                  items
                )
              )
            )}
          >
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Phone:</Label>
                  <Controller
                    as={Input}
                    control={control}
                    name="customer_phone"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Address:</Label>
                  <Controller
                    as={Input}
                    control={control}
                    name="customer_address_1"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Area:</Label>
                  <Controller
                    as={Input}
                    control={control}
                    name="customer_address_area"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Zip:</Label>
                  <Controller
                    as={Input}
                    control={control}
                    name="customer_address_zip"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Button color="primary" type="submit">
                Place Order
              </Button>
            </FormGroup>
          </Form>
        </div>
      )}
    </div>
  )
}

DeliveryInfo.propTypes = {
  step: PropTypes.number.isRequired,
}

export default DeliveryInfo
