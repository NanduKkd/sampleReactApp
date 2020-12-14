import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {} from 'reactstrap'

import List from '../../components/Home/List'
import Filter from '../../components/Home/Filter'
import {homeActions} from '../../actions'

const HomePage = (props) => {
	useEffect(() => {
		props.refreshHomes();
	}, [])
	return (
		<div>
			<Filter />
			<List />
		</div>
	)
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, homeActions)(HomePage);