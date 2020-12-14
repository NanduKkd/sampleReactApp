import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'
import { userActions } from '../../actions'
// import {} from 'reactstrap'

const Header = (props) => {
	const location = useLocation()
	return (
			// <div className="bg-primary text-white d-flex align-items-center w-100 " style={{height: '5em'}}>
			// 	<FontAwesomeIcon
			// 		icon={['fas', 'home']}
			// 		className="font-size-xxl mr-3 ml-5"
			// 		/>
			// 	<div className="flex-grow-1 pb-2">
			// 		<div className="font-size-xxl font-weight-bold">Homes</div>
			// 		<div className="font-size-sm">Find your dreams here</div>
			// 	</div>
			// 	<div className="text-right mr-5">
			// 		{props.data &&
			// 			<>
			// 				<div className="mb-1">Hello <span className="font-weight-bold">{props.data?.displayName}</span></div>
			// 				<Button onClick={props.logout} outline color="secondary" size="sm">Logout</Button>
			// 			</>
			// 		}
			// 	</div>
			// </div>
			<div className="app-header text-white">
				<div className="app-header--pane">
					<FontAwesomeIcon
						icon={['fas', 'home']}
						className="font-size-xxl mr-3 ml-5"
						/>
					<div className="pb-2">
						<div className="font-size-xxl font-weight-bold">Homes</div>
						<div className="font-size-sm">Find your dreams here</div>
					</div>
				</div>
				<div className="app-header--pane text-white">
						{props.data?
							<div className="text-right">
								<div className="mb-1">Hello, <span className="font-weight-bold">{props.data?.displayName}</span></div>
								<Button onClick={props.logout} outline color="secondary" size="sm">Logout</Button>
							</div>
						:location.pathname==="/Signup" || location.pathname==="/Login"?null:
							<>
								{/* <Button outline color="" size="sm"><span className="text-white">Login</span></Button>*/}
								<Link to="/Login"><span className="text-white border-white font-size-lg" style={{borderBottomWidth: 1, borderBottomStyle: "solid"}}>Login</span></Link>
								<div className="m-3 font-size-lg" >or</div>
								<Link to="/Signup"><span className="text-white border-white font-size-lg" style={{borderBottomWidth: 1, borderBottomStyle: "solid"}}>Signup</span></Link>
							</>
						}
				</div>
			</div>
	)
}

const mapStateToProps = ({user}) => (user)

export default connect(mapStateToProps, userActions)(Header);