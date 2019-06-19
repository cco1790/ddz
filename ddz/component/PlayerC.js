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
import { NativeModules } from 'react-native';
import { connect } from 'react-redux'
import { cupai,submit } from '../actions/index'
import pokeImage from './PokeImages'
import PokeImage from './PokeImage'
import PokeList from './PokeList'


const PlayerC = ({poker,init,visiable,i=0}) => (
<View style={styles.container}>
    <PokeList  init= {init} poker={getVisiblePoke(poker,1)} />
   <View style={styles.player}>    
		<View style={styles.header}>
			   		  <Image  source={require('../img/dizhu.jpg')}   style={{width:80,height:100,top:-60,left:0,borderRadius:5}}/>			  
		 </View>
		 	 <View style={styles.imgcontainer}>
		 {	
         			getVisiblePoke(poker,visiable?0:2).map((poke)=>
						<PokeImage  img = {poke}  i={i++}  />)
		 }
		 </View>
   </View>
</View>
);

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems:'center',
  },
   imgcontainer: {
	flex: 5,
	justifyContent: 'flex-start',
	alignItems:'flex-start',
	marginLeft:10
  },
  player: {
	flexDirection: "row",
	justifyContent: 'center',
	alignItems:'center',
  },
  header:{
  flex: 1,
  left:40
  }
});
const getVisiblePoke = (poke,visiable) => {
switch(visiable){
  case(0):
	  return poke.filter(poke_ => !poke_.visible)
  case(1):
	  return poke.filter(poke_ => poke_.visible)
  default :
     return poke
  }
}
const mapStateToProps = state => ({
  poker: state.poker?state.poker[0]:[],
  visiable:state.pokeList?state.pokeList.visible:false
})

const mapDispatchToProps = dispatch => ({
  init: data => dispatch(cupai(data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerC)