import React from 'react'

const HeaderWrapper = ({children}) => {
	return (
		<div className="app-main">
			<Header />
			<div className="app-content">
				<div className="app-content--inner">
					<div className="app-content--inner__wrapper">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderWrapper;