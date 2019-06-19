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
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import pokeImage from './PokeImages'
import { connect } from 'react-redux'
import { cupai } from '../actions/index'

const PlayerA = ({poker,i=0}) => (
   <View style={styles.player}>
        <View style={styles.player}>
		<Image  source={require('../img/dizhu.jpg')}  style={{width:80,height:100,left:0,borderRadius:5}}/>
		</View>
		<View style={styles.playerimg}>{
						poker.map((pp)=>
				<Image  source={pokeImage()[pp.poke]} style={{position:'absolute',width:45,height:60,left:15*i++}}/>
					
		)      }   
		 </View>		
   </View>
);

const styles = StyleSheet.create({
  player: {
	flexDirection: "row",
	justifyContent: 'space-around',
	flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  playerimg: {
	flexDirection: "row",
	alignItems:'center',
	justifyContent : 'center',
	flex: 2,
    fontSize: 20,
    margin: 10,
  },
});
const mapStateToProps = state => ({
  poker: state.poker?state.poker[2]:[]
})
const mapDispatchToProps = dispatch => ({
  init: data => dispatch(cupai(data))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerA)
