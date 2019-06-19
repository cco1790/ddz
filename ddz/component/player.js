/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const PlayerA = ({poker,pokeImage}) => (
   <View style={styles.player}>
        <View style={styles.player}>
		<Image  source={require('../img/gui1.png')}/>
		</View>
		<View style={styles.player3}>
		   if(poker!=null)
		   {	   
						poker.map((pp)=>
				<Image  source={pokeImage[pp]} style={{position:'absolute',width:60,height:80,left:this.i++*20}}/>
					
		   )      }   
		 </View>		
   </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
	flexDirection: "row",
	justifyContent: 'space-around',
	flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  player3: {
	  width:Dimensions.get('window').width,
	flexDirection: "row",
	alignItems:'center',
	justifyContent : 'space-around',
	flex: 1,
    fontSize: 20,
    margin: 10,
  },
});
export default Player;
