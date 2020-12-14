import React, { Suspense, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './appRoutes'
import AuthRoutes from './authRoutes'
import { connect } from 'react-redux'
import { auth } from '../utils/firebase'
import { userActions } from '../actions'
import { Spinner } from 'reactstrap'
import Header from '../layout-components/Header'
import { Redirect, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
	useEffect(() => {
		auth.onAuthStateChanged(props.authStateChanged)
	}, [])
	return (
		<AnimatePresence>
			<Suspense fallback={
				<div className="text-center d-flex justify-content-center">
					Loading.. Please wait<br/>
					<Spinner />
				</div>
			}>
				{/* <div style={{overflow: "hidden", height: "100vh"}}>
				<Header />
				<div style={{height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", paddingBottom: "5em"}}>
					<div style={{overflow: "hidden", borderWidth: 2, flexGrow: 1}}>
						{props.user?.data? <AppRoutes /> : <AuthRoutes />}
					</div>
				</div>
				</div> */}
				<div className="app-main">
          <Header />
          <div className="app-content">
            <div className="app-content--inner">
              <div className="app-content--inner__wrapper">
								<Switch>
									<Route path={['/Home', '/PropertyDetails']} component={AppRoutes} />
									{props.user?.data? null : <Route path={['/Login', '/Signup']} component={AuthRoutes} />}
									<Redirect from="/" to="/Home" />
								</Switch>
							</div>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
			</Suspense>
		</AnimatePresence>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, userActions)(Routes);