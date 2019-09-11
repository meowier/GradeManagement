import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './components/Index';
import routes from './routes';

class App extends Component {

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
				<Index />
				{this.showRoutes(routes)}    
            </Router>
        );
    }
}

export default App;
