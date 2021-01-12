import React from 'react'
import Header from '../component/Header_footer/Header'
import Footer from '../component/Header_footer/Footer'

class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="page_container">
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}

export default Layout;