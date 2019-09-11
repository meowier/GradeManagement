import React, { Component } from 'react';
import './styles.css';

import {Link, Route} from 'react-router-dom';

const menus = [
	{
		name : 'Home',
		to : '/student/home',
		exact : true
	},
	{
		name : 'Transcript',
		to : '/student/transcript',
		exact : true
	}
]

const MenuLink = ({label, to, activeOnlyWhenExact})=>{
	return (
		<Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
			var active = match ? 'active_link' : '';
			return (
				<li className={`my_li ${active}`}>
			 		<Link to={to}>
			 			{label}
			 		</Link>
			 	</li>
			)
		}}/>
	)
}

class StudentMenu extends Component {
	render() {
		return (
		 	<nav className="navbar navbar-inverse">
	 			<div className="container-fluid remove_paddingLeft">
	 				<ul className="nav navbar-nav">
	 					{this.showMenu(menus)} 				
	 				</ul>
	 			</div>
	 		</nav> 
		);
	}

	showMenu = (menus)=>{
		var result = null;
		if(menus.length > 0){
			result = menus.map((menu, index)=>{
				return(
					<MenuLink key={index} 
						label={menu.name} 
						to={menu.to} 
						activeOnlyWhenExact={menu.exact} 
					/>
				)
			})
		}
		return result;
	}
}

export default StudentMenu;
