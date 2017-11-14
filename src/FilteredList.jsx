import React, { Component } from 'react';
import { DropdownButton, MenuItem, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
	constructor(props) {
		super(props);

		// The state is just a list of key/value pair (like a hashmap)
		this.state = {
			btnTitle: "Region",
			btnTitle2: "Age Range",
			btnTitle3: "Founding Date",
			search: "",
			region: "", 
			age: "",
			founded: ""
		};
	}

	//Sets the state whenever the user types on the search bar
	onSearch = (event) => {
		this.setState({search: event.target.value.toLowerCase()});
	}
	//	

	filterItem = (item) => {
		// Checks if the current search term is contained in this item
		if (this.state.region === "" && this.state.age === "") {
			return item.name.toLowerCase().search(this.state.search) !== -1;
		}
		if (this.state.region === "") {
			return item.name.toLowerCase().search(this.state.search) !== -1 && item.age === this.state.age;
		}
		if (this.state.age === "") { 
			return item.name.toLowerCase().search(this.state.search) !== -1 && item.region === this.state.region;
		}
		return item.name.toLowerCase().search(this.state.search) !== -1 && (item.region === this.state.region && item.age === this.state.age);

	}
	
	filterRegion = (eventKey) => {
		this.setState({region: eventKey});
		var val = eventKey;
		if (eventKey === "") {
			val = "Region";
		}
    	this.setState({btnTitle: val}); 
	}

	filterAge = (eventKey) => {
		this.setState({age: eventKey});
		var val = eventKey;
		if (eventKey === "") {
			val = "Age Range";
		}
    	this.setState({btnTitle2: val}); 
		
	}

	sortDate = (eventKey) => {
		var val = eventKey;
    	this.setState({btnTitle3: val});
    	if(eventKey === "Descending") {
    		this.props.items.sort((a, b) => b.founded - a.founded); 
    	} else if (eventKey === "Ascending") {
    		this.props.items.sort((a, b) => a.founded - b.founded); 
    	}
		
		return this.props.items;
	}

	clearSearch = () => {
		this.setState({age: "", region: ""});
		this.setState({btnTitle: "Region"}); 
		this.setState({btnTitle2: "Age Range"}); 
	}

	render() {
		return (
			<div className="filter-list">
				<h1>United World Colleges</h1>
				<p><b>What is the UWC? </b>The United World College is a global education movement that makes education a force to unite people, nations and cultures
				for peace and a sustainable future. Central to the ethos of UWC is the belief that education can bring together young people 
				from all backgrounds on the basis of their shared humanity, to engage with the possibility of social change through courageous 
				action, personal example and selfless leadership.Today, UWC has 17 schools and colleges on 4 continents, the majority of which focus exclusively on the 16-19 year-old age group: 
				a time when young people’s energy and idealism can be guided towards empathy, responsibility and lifelong action.</p>
				<hr></hr>
				<ButtonToolbar style={{ 
					width: '1200px',
                    marginLeft  : 10,
                    marginRight : 10,
                    display : 'flex',
                    padding: '20px'
                }}>
				<b style={{align:"text-bottom"}}>Filter By:</b>
				<ButtonGroup style={{marginLeft:30}}>
				<DropdownButton id="typeDropdown" title={this.state.btnTitle} bsStyle="warning" onSelect={this.filterRegion} >
					<MenuItem eventKey="">All</MenuItem>
					<MenuItem eventKey="Europe">Europe</MenuItem>
					<MenuItem eventKey="Americas">Americas</MenuItem>
					<MenuItem eventKey="Asia-Pacific">Asia-Pacific</MenuItem>
					<MenuItem eventKey="Africa">Africa</MenuItem>
				</DropdownButton>
				</ButtonGroup>

				<ButtonGroup style={{marginLeft:50}}>
				<DropdownButton id="typeDropdown" title={this.state.btnTitle2} bsStyle="warning" onSelect={this.filterAge}>
					<MenuItem eventKey="">All</MenuItem>
					<MenuItem eventKey="2-18">2-18</MenuItem>
					<MenuItem eventKey="11-20">11-20</MenuItem>
					<MenuItem eventKey="15-19">15-19</MenuItem>
					<MenuItem eventKey="16-19">16-19</MenuItem>
				</DropdownButton>
				</ButtonGroup>
				<ButtonGroup style={{marginLeft:50}}>
				<Button type="reset" bsStyle="info" onClick={this.clearSearch}>Clear Filters
				</Button>
				</ButtonGroup>
			<b style={{marginLeft:50, align:"text-bottom"}}>Sort By Founding Date:</b>
			<ButtonGroup style={{marginLeft:30}}>
			</ButtonGroup>
			<DropdownButton id="typeDropdown" title={this.state.btnTitle3} bsStyle="warning" onSelect={this.sortDate}>
					<MenuItem eventKey="Ascending">Ascending</MenuItem>
					<MenuItem eventKey="Descending">Descending</MenuItem>
				</DropdownButton>
			<b style={{marginLeft:50, align:"text-bottom"}}>Direct Search:</b>
			<input style={{marginLeft:50}} type="text" placeholder="Search" onChange={this.onSearch} />
			</ButtonToolbar>

			<List style={{marginLeft:200}} items={this.props.items.filter(this.filterItem)} />
			</div>
				

		);
	}
}

export default FilteredList;