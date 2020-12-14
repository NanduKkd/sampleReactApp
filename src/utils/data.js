const data = [
	{
		"id": 1,
		"property": {
			"id": 1,
			"address": {
				"id": 1,
				"addressLine1": "1234 7 St",
				"addressLine2": null,
				"city": "San Diego",
				"state": "California",
				"zip": "92103"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 2000,
			"numberBedrooms": 4,
			"numberBaths": 3,
			"description": "Beautiful country home",
			"primaryOwner": {
				"id": 1,
				"user": {
					"id": 1,
					"firstName": "Lokesh",
					"lastName": "Gupta",
					"email": "abc@gmail.com",
					"phone": null,
					"status": "Active"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://dhp.dreeshomes.com/cms/images/EYrud-a6KJ-Ayt63GXIVxF"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Seaberg-House.jpg",
		},
		"state": "Pending",
		"price": 649999,
		"escrowCompany": {
			"id": 1,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 2,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [
			{
				"id": 1,
				"name": "dishwasher",
				"listing": null
			}
		],
		"excludedItems": []
	},
	{
		"id": 2,
		"property": {
			"id": 2,
			"address": {
				"id": 2,
				"addressLine1": "555 Highland Ave",
				"addressLine2": null,
				"city": "National City",
				"state": "California",
				"zip": "91950"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 1200,
			"numberBedrooms": 3,
			"numberBaths": 2,
			"description": "Beautiful city home",
			"primaryOwner": {
				"id": 2,
				"user": {
					"id": 3,
					"firstName": "Captain",
					"lastName": "America",
					"email": "cap@marvel.com",
					"phone": null,
					"status": "Active"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGeBf46BD6I3jGBo-tI613n2l5QI6RFPUhjw&usqp=CAU"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Modern-Lodge-House.jpg",
		},
		"state": "Active",
		"price": 520000,
		"escrowCompany": {
			"id": 1,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 2,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [
			{
				"id": 2,
				"name": "dryer",
				"listing": null
			}
		],
		"excludedItems": [
			{
				"id": 3,
				"name": "washer",
				"listing": null
			}
		]
	},
	{
		"id": 3,
		"property": {
			"id": 3,
			"address": {
				"id": 3,
				"addressLine1": "123 E St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 3500,
			"numberBedrooms": 6,
			"numberBaths": 5,
			"description": "Big home with great views",
			"primaryOwner": {
				"id": 3,
				"user": {
					"id": 4,
					"firstName": "Tony",
					"lastName": "Stark",
					"email": "tony@marvel.com",
					"phone": null,
					"status": "Pending"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://dhp.dreeshomes.com/cms/images/EYrud-a6KJ-Ayt63GXIVxF"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Tavern-Island-Norwalk.jpg",
		},
		"state": "PreSale",
		"price": 1250000,
		"escrowCompany": {
			"id": 1,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 2,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [],
		"excludedItems": []
	},
	{
		"id": 4,
		"property": {
			"id": 4,
			"address": {
				"id": 4,
				"addressLine1": "1234 7 St",
				"addressLine2": null,
				"city": "San Diego",
				"state": "California",
				"zip": "92103"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 2000,
			"numberBedrooms": 4,
			"numberBaths": 3,
			"description": "Beautiful country home",
			"primaryOwner": {
				"id": 1,
				"user": {
					"id": 1,
					"firstName": "Lokesh",
					"lastName": "Gupta",
					"email": "abc@gmail.com",
					"phone": null,
					"status": "Active"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://dhp.dreeshomes.com/cms/images/EYrud-a6KJ-Ayt63GXIVxF"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Seaberg-House.jpg",
		},
		"state": "Pending",
		"price": 649999,
		"escrowCompany": {
			"id": 1,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 2,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [
			{
				"id": 1,
				"name": "dishwasher",
				"listing": null
			}
		],
		"excludedItems": []
	},
	{
		"id": 5,
		"property": {
			"id": 5,
			"address": {
				"id": 5,
				"addressLine1": "123 E St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 3500,
			"numberBedrooms": 6,
			"numberBaths": 5,
			"description": "Big home with great views",
			"primaryOwner": {
				"id": 5,
				"user": {
					"id": 4,
					"firstName": "Tony",
					"lastName": "Stark",
					"email": "tony@marvel.com",
					"phone": null,
					"status": "Pending"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://dhp.dreeshomes.com/cms/images/EYrud-a6KJ-Ayt63GXIVxF"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Tavern-Island-Norwalk.jpg",
		},
		"state": "PreSale",
		"price": 1250000,
		"escrowCompany": {
			"id": 4,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 2,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [],
		"excludedItems": []
	},
	{
		"id": 6,
		"property": {
			"id": 6,
			"address": {
				"id": 6,
				"addressLine1": "555 Highland Ave",
				"addressLine2": null,
				"city": "National City",
				"state": "California",
				"zip": "91950"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 1200,
			"numberBedrooms": 3,
			"numberBaths": 2,
			"description": "Beautiful city home",
			"primaryOwner": {
				"id": 6,
				"user": {
					"id": 3,
					"firstName": "Captain",
					"lastName": "America",
					"email": "cap@marvel.com",
					"phone": null,
					"status": "Active"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGeBf46BD6I3jGBo-tI613n2l5QI6RFPUhjw&usqp=CAU"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Modern-Lodge-House.jpg",
		},
		"state": "Active",
		"price": 520000,
		"escrowCompany": {
			"id": 1,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 6,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [
			{
				"id": 2,
				"name": "dryer",
				"listing": null
			}
		],
		"excludedItems": [
			{
				"id": 3,
				"name": "washer",
				"listing": null
			}
		]
	},
	{
		"id": 7,
		"property": {
			"id": 7,
			"address": {
				"id": 7,
				"addressLine1": "123 E St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 3500,
			"numberBedrooms": 6,
			"numberBaths": 5,
			"description": "Big home with great views",
			"primaryOwner": {
				"id": 7,
				"user": {
					"id": 4,
					"firstName": "Tony",
					"lastName": "Stark",
					"email": "tony@marvel.com",
					"phone": null,
					"status": "Pending"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://dhp.dreeshomes.com/cms/images/EYrud-a6KJ-Ayt63GXIVxF"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Tavern-Island-Norwalk.jpg",
		},
		"state": "PreSale",
		"price": 1250000,
		"escrowCompany": {
			"id": 4,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 2,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [],
		"excludedItems": []
	},
	{
		"id": 8,
		"property": {
			"id": 8,
			"address": {
				"id": 8,
				"addressLine1": "555 Highland Ave",
				"addressLine2": null,
				"city": "National City",
				"state": "California",
				"zip": "91950"
			},
			"propertyType": "SingleFamilyHome",
			"squareFeet": 1200,
			"numberBedrooms": 3,
			"numberBaths": 2,
			"description": "Beautiful city home",
			"primaryOwner": {
				"id": 6,
				"user": {
					"id": 3,
					"firstName": "Captain",
					"lastName": "America",
					"email": "cap@marvel.com",
					"phone": null,
					"status": "Active"
				}
			},
			"ownerType": "Individual",
			"primaryImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGeBf46BD6I3jGBo-tI613n2l5QI6RFPUhjw&usqp=CAU"
			// "primaryImageUrl": "https://www.luxxu.net/blog/wp-content/uploads/2017/08/5-Waterfront-Homes-That-Will-Blow-Your-Mind-Away-Modern-Lodge-House.jpg",
		},
		"state": "Active",
		"price": 520000,
		"escrowCompany": {
			"id": 1,
			"name": "Escrow America",
			"phone": null,
			"email": null,
			"officerName": "John Doe",
			"address": {
				"id": 4,
				"addressLine1": "500 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Escrow"
		},
		"titleCompany": {
			"id": 8,
			"name": "First American Title",
			"phone": null,
			"email": null,
			"officerName": "George Washington",
			"address": {
				"id": 5,
				"addressLine1": "503 1st St",
				"addressLine2": null,
				"city": "Chula Vista",
				"state": "California",
				"zip": "91910"
			},
			"type": "Title"
		},
		"listingAgent": {
			"id": 1,
			"licenseNumber": "123456789",
			"licenseState": "California",
			"user": {
				"id": 2,
				"firstName": "Deja",
				"lastName": "Vu",
				"email": "xyz@email.com",
				"phone": null,
				"status": "Active"
			},
			"status": "Active"
		},
		"includedItems": [
			{
				"id": 2,
				"name": "dryer",
				"listing": null
			}
		],
		"excludedItems": [
			{
				"id": 3,
				"name": "washer",
				"listing": null
			}
		]
	},
]

export const dataList = async({priceRange, sizeRange, numberBaths, numberBedrooms, type}) => {
	let finalData = [];
	numberBaths = parseInt(numberBaths);
	numberBedrooms = parseInt(numberBedrooms);
	
	for(let i of data){
		if(sizeRange && (i.property.squareFeet > sizeRange.max || i.property.squareFeet < sizeRange.min)) {
			// console.log('exiting size')
			continue;
		}

		if(priceRange && (i.price > priceRange.max || i.price < priceRange.min)) {
			// console.log('exiting price', i.price, priceRange)
			continue;
		}

		if(numberBaths && i.property.numberBaths!==numberBaths) {
			console.log('exiting numBaths', typeof i.property.numberBaths, typeof numberBaths)
			continue;
		}

		if(numberBedrooms && i.property.numberBedrooms!==numberBedrooms) continue;
		
		if(type && i.property.propertyType!==type) continue;
		
		
		finalData.push({
			id: i.id,
			property: {
				description: i.property.description,
				propertyType: i.property.propertyType,
				address: {
					city: i.property.address.city,
					state: i.property.address.state,
				},
				numberBaths: i.property.numberBaths,
				numberBedrooms: i.property.numberBedrooms,
				squareFeet: i.property.squareFeet,
				primaryImageUrl: i.property.primaryImageUrl,
			},
			price: i.price,
			state: i.state,
		});
	}

	return finalData;
}

export const details = async(id) => {
	for (let i of data){
		if(i.id==id) {
			return i;
		}
	}
}