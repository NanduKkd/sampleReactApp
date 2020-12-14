import React, { useState } from 'react';

import { InputGroupText, FormGroup, Input, Card, Spinner } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [persistence, setPersistence] = useState('')

  const handleEmailChange = e => setEmail(e.target.value)
  const handlePassChange = e => setPassword(e.target.value)
	const handlePersistenceChange = e => setPersistence(e.target.checked)
	
	const signup = () => {
		props.cancelError()
		props.history.replace("/Signup")
	}

  return (
    <div className="mx-auto w-50" style={{minWidth: '35rem'}}>
			<Card className="card-body my-5 mx-5">
				<div className="text-center">{props.loading && <Spinner size="sm" />}</div>

        <div className="card-header d-block bg-white pt-4 pb-4">
          <div className="text-dark text-center mb-3">
            <small>Log in with</small>
          </div>
          <div className="text-center">
            <Button disabled={props.loading} color="facebook" onClick={props.facebookSignIn}>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </span>
              <span className="btn-wrapper--label">Facebook</span>
            </Button>
            <Button disabled={props.loading} color="twitter" className="ml-2" onClick={props.twitterSignIn}>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </span>
              <span className="btn-wrapper--label">Twitter</span>
            </Button>
            <Button disabled={props.loading} color="google" className="ml-2" onClick={props.googleSignIn}>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fab', 'google']} />
              </span>
              <span className="btn-wrapper--label">Google</span>
            </Button>
          </div>
        </div>


        <div className=" px-5 mt-4">
          <div className="text-center text-dark mb-4">
            <small>Or log in with credentials</small>
          </div>
          <form>
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
            <FormGroup>
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                  </InputGroupText>
                </div>
                <Input placeholder="Password" type="password" onChange={handlePassChange} />
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
              <Button disabled={props.loading} color="second" onClick={() => props.login({ email, password, persistence })}>
                Log in
              </Button>
              </div>
            <div className="text-center">
              <Button disabled={props.loading} color="" onClick={signup} className="mt-2">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
const mapStateToProps = ({user}) => (user)
export default connect(mapStateToProps, userActions)(Login);
