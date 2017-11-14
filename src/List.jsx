import React, { Component } from 'react';
/*
The list component will take the list of items passed in as a property
and create an HTML list with those item. In this example, we are passing in the
filtered produce list, but this component can be used for other types of items
as long as it has a name.
*/

class List extends Component {
	renderList() {
/*
Javascript map will let you iterate and modify each item in a list.
In this example, we are changing each item
(ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
*/		
		const items = this.props.items.map(item => {
			console.log(item.image);
			return <li style={{padding:"50px", display: 'inline-block'}} key={item.name}>
			<img key={item.image} src={item.image} width="300" height="200" alt={item.name}/><h3>{item.name}</h3>
			<p key={item.location}><b>Location:</b> {item.location} </p>
			<p key={item.founded}><b>Founded in:</b> {item.founded} </p>
			</li>
			
		});

		return items;
	}

	render() {
		return (
			<div>
			<ul>
			{this.renderList()}
			</ul>
			</div>
			
		);
	}
}

export default List;