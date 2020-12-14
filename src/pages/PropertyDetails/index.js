import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap';
import { homeActions } from '../../actions';

const formatNumber = (num) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const propertyType = {
	SingleFamilyHome: "Single family home"
}

const PropertyDetails = (props) => {
	const {id} = useParams();
	const details = props.homes[id];
	useEffect(() => {
		if(!details?.details)
			props.homeDetails(id);
	}, [details])
	if(!details?.details) {
		return (
			<div className="justify-content-center d-flex align-items-center" style={{marginTop: "30vh"}}><Spinner /></div>
		)
	}
	return (
		<div className="p-2 d-flex align-items-center flex-column">
			<div className="d-flex align-items-start">
				<div className="bg-white px-5 py-4 rounded-lg mr-5">
					<div className="font-size-lg text-danger font-weight-bold">{formatNumber(details.price)}$</div>
					<div className="font-size-xl font-weight-bold">{details.property.description}</div>
					<div className="mb-3 mt-2 d-flex">
						<div className="mr-2 flex-grow-1"><FontAwesomeIcon icon={["fas", "map-marker-alt"]} className="mr-3" />{" "}{details.property.address.addressLine1}, {details.property.address.addressLine2 && details.property.address.addressLine2+", "}{details.property.address.city}, {details.property.address.state}</div>
						<div className=" flex-grow-1"><FontAwesomeIcon icon={["far", "envelope"]} className="mr-3" />{details.listingAgent.user.email}</div>
					</div>
					{/* </div> */}
					<div style={{width: "50vw"}}>
						<img src={details.property.primaryImageUrl} style={{height: "100%", width: "100%"}} />
					</div>
					<div className="rounded-lg border-1 mt-3 font-weight-bold border-primary text-primary d-flex">
						<div className="flex-grow-1 text-center py-2"><FontAwesomeIcon icon={["fas", "bath"]} className="mr-2" />Bathrooms: {details.property.numberBaths}</div>
						<div className="flex-grow-1 text-center py-2"><FontAwesomeIcon icon={["fas", "bed"]} className="mr-2" />Bedrooms: {details.property.numberBedrooms}</div>
						<div className="flex-grow-1 text-center py-2"><FontAwesomeIcon icon={["fas", "arrows-alt"]} className="mr-2" />Sqft: {details.property.squareFeet}</div>
					</div>
					<div className="mt-4">
						<div className="font-weight-bold font-size-lg mb-3 mt-5">KEY DETAILS</div>
						<div>{propertyType[details.property.propertyType]}</div>
						<div>Owned by {details.property.primaryOwner.user.firstName} {details.property.primaryOwner.user.lastName}</div>
						<div>Show other details here.</div>
					</div>
					<div className="text-dark mt-4">
					Other included items: {details.includedItems?.map(i => i.name).join(", ") || "none"}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({homes}) => ({homes})

export default connect(mapStateToProps, homeActions)(PropertyDetails)