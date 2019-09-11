import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '../../Routes/Student/index';
import StudentMenu from './Menu/index';


class Student extends Component {
    showRoutes = (routes) =>{
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index)=>{
				return(
					<Route 
						key={index}
						path={route.path} 
						exact={route.exact}
						component={route.main} 
					/>
				)
			})
		}
		return result;
	}
    render() {
        return (
            <Router>
				<StudentMenu />
                <Switch>
                    {this.showRoutes(routes)}
                </Switch>
            </Router>
        );
    }
}

export default Student;
