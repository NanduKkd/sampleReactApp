import React, { useState } from 'react';

import { InputGroupText, FormGroup, Input, Card, Spinner } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

const Signup = (props) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [verify, setVerify] = useState('')
  const [persistence, setPersistence] = useState('')

  const handleEmailChange = e => setEmail(e.target.value)
  const handleNameChange = e => setName(e.target.value)
  const handlePassChange = e => setPassword(e.target.value)
  const handleVerifyChange = e => setVerify(e.target.value)
	const handlePersistenceChange = e => setPersistence(e.target.checked)
	
	const back = () => {
		props.cancelError()
		props.history.replace("/Login")

	}

  return (
    <div className="mx-auto w-50" style={{minWidth: '35rem'}}>
			<Card className="card-body my-5 mx-5">
        <div className=" px-5 mt-4">
          <div className="text-center text-dark mb-4">
            <small>Create an account </small>{props.loading && <div className=""><Spinner size="sm" /></div>}
          </div>
          <form>
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['far', 'user']} />
                  </InputGroupText>
                </div>
                <Input placeholder="Full Name" onChange={handleNameChange} />
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </InputGroupText>
                </div>
                <Input placeholder="Email" type="email" onChange={handleEmailChange} />
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                  </InputGroupText>
                </div>
                <Input placeholder="Password" type="password" onChange={handlePassChange} />
              </div>
            </div>
            <FormGroup>
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                  </InputGroupText>
                </div>
                <Input placeholder="Verify password" type="password" onChange={handleVerifyChange} />
              </div>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id="customCheckLogin"
                type="checkbox"
                onChange={handlePersistenceChange}
              />
              <label
                className="custom-control-label"
                htmlFor="customCheckLogin">
                <span>Remember me</span>
              </label>
            </div>
            <label className="text-danger w-100 text-center mt-2">{props.error}</label>
            <div className="text-center mt-2">
              <Button disabled={props.loading} color="second" onClick={() => props.signup({ name, email, password, verify, persistence })}>
                Sign Up
              </Button>
              </div>
            <div className="text-center">
              <Button disabled={props.loading} color="" onClick={back} className="mt-2">
                Back
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
const mapStateToProps = ({user}) => (user)
export default connect(mapStateToProps, userActions)(Signup);
