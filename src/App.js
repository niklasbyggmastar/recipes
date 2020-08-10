import React, { useEffect } from 'react';
import './App.scss';
import Searchbar from './components/Searchbar';

const App = () => {
	
	useEffect(() => {
		console.log("mounted app.js");
	}, []);

	return <Searchbar />;

}

export default App;
