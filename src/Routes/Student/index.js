import React  from 'react';
import StudentHome from '../../components/Student/Home';
import StudentTranscript from '../..//components/Student/Transcript';

const routes = [
	{
		path : '/student/home',
		exact : true,
		main : ({location, match})=><StudentHome location={location} match={match}/>
    },
    {
		path : '/student/transcript',
		exact : true,
		main : ({location, match})=><StudentTranscript location={location} match={match}/>
	},
	
]

export default routes;