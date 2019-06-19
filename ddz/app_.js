import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import Orientation from 'react-native-orientation';
import PlayerA from './component/PlayerA';
import PlayerB from './component/PlayerB';
import PlayerC from './component/PlayerC';

export default class App extends React.Component<Props> {
	 constructor(props) {
      super(props); 
	}
	componentDidMount() {
       Orientation.lockToLandscape();
}
   
  render() {
    return (
      <View style={styles.container}  >
	   <StatusBar hidden={true} />
        <View  style={styles.playerContainer}>
		<View style={styles.player}>
		<PlayerA/> 
         <PlayerB/> 
		  </View>
         <PlayerC/> 			 
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  player: {
	flexDirection: "row",
	justifyContent: 'space-around',
	flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
	backgroundColor:'rgba(0,0,0,0)'
  },
 playerContainer: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#025B7E'
  }
});
