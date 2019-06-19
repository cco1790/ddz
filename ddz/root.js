import React, {Component} from 'react';
import{ 
} from 'react-native';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import App from './app_'
import rootReducer from './reducers/Index'
import Orientation from 'react-native-orientation';

const store = createStore(rootReducer)

class rootApp extends Component {
	
	componentDidMount() {
       Orientation.lockToLandscape();
}
	render() {
		return (
			<Provider store={store}>
               <App/>
            </Provider>
		   )
	}
}
export default rootApp;