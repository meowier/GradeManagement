import React  from 'react';
import Login from './components/Login';
import Student from './components/Student';

const routes = [
	{
		path : '/login',
		exact : true,
		main : ({location, match})=><Login location={location} match={match}/>
    },
    {
		path : '/student/home',
		exact : true,
		main : ({location, match})=><Student location={location} match={match}/>
	},
]

export default routes;