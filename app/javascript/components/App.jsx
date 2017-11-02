import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			locations: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/api/v1/locations.json')
			.then(response => {
				console.log(response)
				this.setState({locations: response.data})
			})

		    .catch(error => console.log(error))
	}

	render(){
		return(
			<div>
				<h1>Redux-Rails-RESTFUL API</h1>
				<div>
					{
						this.state.locations.map((location, index) => {
							return(
								<div className="tile" key={index}>
									<h3>{location.name}</h3>
									<p>{location.body}</p>
								</div>
								)
						})
					}
				</div>
			</div>
			)
	}
}

export default App;