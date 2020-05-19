import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUser } from 'utils/redux/actions/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Login = ({ step }) => {
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  return (
    <div className="item">
      <div className="header">
        <div className="title">Login</div>
        {step > 1 && <FontAwesomeIcon icon={faCheckCircle} color="green" />}
      </div>
      {step === 1 && (
        <div className="content">
          <Form
            onSubmit={handleSubmit((values) => dispatch(loginUser(values)))}
          >
            <FormGroup>
              <Label>Name:</Label>
              <Controller
                as={Input}
                control={control}
                name="name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email Address:</Label>
              <Controller
                as={Input}
                control={control}
                name="email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Login
              </Button>
            </FormGroup>
          </Form>
        </div>
      )}
    </div>
  )
}

Login.propTypes = {
  step: PropTypes.number.isRequired,
}

export default Login
