import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
	onYearBtnClick(e){
		this.props.setYEar(+e.target.innerText)
	}
	render(){
		const {year, photos, fetching} = this.props
		return <div className="ib page">
			<p>
				<button onClick={()=>{this.onYearBtnClick}}>2016</button>
				<button onClick={()=>{this.onYearBtnClick}}>2015</button>
				<button onClick={()=>{this.onYearBtnClick}}>2014</button>
			</p>
			<h3>{year} год</h3>{
            fetching ?
            <p>Loading...</p>
            :
            <p>You have {photos.length} photos.</p>
            }
		</div>
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	setYear: PropTypes.func.isRequired
}