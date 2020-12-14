import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Row, Spinner } from 'reactstrap'

const formatNumber = (num) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const propertyType = {
	SingleFamilyHome: "Single Family Home"
}

const List = (props) => {
	const history = useHistory();
	const { list } = props
	return (
		<div className="py-3 px-5">
			{props.loading && <Spinner />}
			<div className="d-flex flex-row flex-wrap justify-content-center">
				{list.map((i, j) => (
					<Button key={j} color="" className="" onClick={() => history.push("/PropertyDetails/"+i.id)}>
						<Card className="card-box align-self-center overflow-hidden d-flex flex-column" style={{minWidth: "10em", width: "24vw"}}>
							<div style={{height: (195/430*27)+"vw", minHeight: (195/430*20)+"em", display: 'flex', overflow: 'hidden', alignItems: 'center', minWidth: '20em', width: '27vw'}} className="bg-warning">
								<img alt="..." src={i.property.primaryImageUrl} style={{minHeight: "100%", width: "100%", minWidth: '100%'}} />
							</div>
							<div className="p-3 text-left">
								<div className="d-flex justify-content-between">
									<div className="text-danger font-weight-bold">{formatNumber(i.price)} $</div>
									<div className="text-dark font-size-sm">{propertyType[i.property.propertyType]}</div>
								</div>
								<div className="font-size-lg mt-1 font-weight-bold">{i.property.description}</div>
								<div className="text-dark"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} />{' '}{i.property.address.city}, {i.property.address.state}</div>
							</div>
							<div className="d-flex justify-content-between font-weight-bold py-2 px-4 bg-primary text-secondary">
								<div><FontAwesomeIcon icon={['fas', 'arrows-alt']} />{' '}{i.property.squareFeet} sqft</div>
								<div><FontAwesomeIcon icon={['fas', 'bath']} />{' '}{i.property.numberBaths}</div>
								<div><FontAwesomeIcon icon={['fas', 'bed']} />{' '}{i.property.numberBedrooms}</div>
							</div>
						</Card>
					</Button>
				))}
				{!list.length && 
					<div className="font-size-xxl text-center text-dark opacity-5 font-weight-bold mt-5">
						<FontAwesomeIcon icon={['fas', 'exclamation-triangle']} /><br />
						No Items Found<br /><span className="font-size-lg font-weight-normal">Try a different filter combination.</span>
					</div>
				}
			</div>
		</div>
	)
}

const mapStateToProps = ({homes, homesMisc}) => {
	let list = [];
	for(let i of homesMisc.filtered){
		list.push(homes[i]);
	}
	return {list, loading: homesMisc.loading}
}

export default connect(mapStateToProps)(List);