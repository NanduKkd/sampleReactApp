import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Input, Modal, ModalHeader } from 'reactstrap'
import { homeActions } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const Filter = (props) => {
	const [filter, setFilter] = useState(false);
	const [state, setState] = useState({
		sizeRange: {min: 0, max: 4000},
		priceRange: {min: 0, max: 2000000},
		numberBaths: undefined,
		numberBedrooms: undefined
	});
	const changeState = (obj) => setState(olds => ({...olds, ...obj}));

	const refreshFilter = () => props.refreshHomes(state)

	const handleBathroomChange = e => {
		changeState({numberBaths: e.target.value === 'null' ? undefined : e.target.value})
	}
	const handleBedroomChange = e => {
		changeState({numberBedrooms: e.target.value === 'null' ? undefined : e.target.value})
	}

	const toggle = () => {
		if(filter) refreshFilter();
		setFilter(i => !i)
	}

	return (
		<>
			<div className="position-absolute">
      <Button onClick={() => setFilter(i => !i)} color="primary" className="m-2" size="lg">
          <FontAwesomeIcon icon={['fas', 'filter']} />
      </Button>
			</div>
			<Modal zIndex={2000} centered toggle={toggle} isOpen={filter} size="lg">
				<ModalHeader>Filter Options</ModalHeader>
				<div className="p-3 d-flex align-items-center">

					<div className="flex-grow-1" style={{width: "33.33%"}}>
						<div className="mb-3">Area <span className="opacity-7">(sqft)</span></div>
					<InputRange
						minValue={0}
						maxValue={4000} step={100}
						value={state.sizeRange}
						onChange={(v) => {changeState({sizeRange: v})}}
					/>
					</div>
					
					<div className="m-4" />

					<div className="flex-grow-1" style={{width: "33.33%"}}>
						<div className="mb-3">Price <span className="opacity-7">($)</span></div>
					<InputRange
						minValue={0}
						maxValue={2000000} step={100000}
						value={state.priceRange}
						onChange={(v) => {changeState({priceRange: v})}}
					/>
					</div>
					
					<div className="m-4" />

					<Input name="homeType" type="select" style={{width: "33.33%"}}>
						<option value="SingleHomeHouse">Single Family Home</option>
					</Input>
				</div>
					
					<div className="m-2" />

					<div className="p-3 d-flex">
					
					<Input name="bedrooms" onChange={handleBedroomChange} type="select" style={{width: "33.33%"}} value={state.numberBedrooms || 'null'}>
						<option value={'null'}>Any Bedrooms</option>
						<option value={"1"}>1 Bedroom</option>
						<option value={"2"}>2 Bedrooms</option>
						<option value={"3"}>3 Bedrooms</option>
						<option value={"4"}>4 Bedrooms</option>
						<option value={"5"}>5 Bedrooms</option>
						<option value={"6"}>6 Bedrooms</option>
					</Input>
					
					<div className="m-4" />

					<Input name="Bathrooms" onChange={handleBathroomChange} type="select" style={{width: "33.33%"}} value={state.numberBaths || 'null'}>
						<option value={'null'}>Any Bathrooms</option>
						<option value={"1"}>1 Bathroom</option>
						<option value={"2"}>2 Bathrooms</option>
						<option value={"3"}>3 Bathrooms</option>
						<option value={'4'}>4 Bathrooms</option>
						<option value={'5'}>5 Bathrooms</option>
						<option value={'6'}>6 Bathrooms</option>
					</Input>
					<div className="m-4" />
					<Button color="primary" onClick={toggle} style={{width: "33.33%"}}>Close</Button>
				</div>
					
			</Modal>
		</>
	)
}

export default connect(() => ({}), homeActions)(Filter)