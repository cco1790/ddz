import React, {PropTypes, Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ImageBackground,
  NativeModules
} from 'react-native';
import pokeImage from './PokeImages'
import { submit } from '../actions/index'
import { connect } from 'react-redux'



  class PokeList extends Component {
  
   constructor(props) {
      super(props);  
   }
    componentDidMount(){ 
       NativeModules.DDZ.init(
			(poke)=>{
			this.props.init(poke)
			})
	}
  render (i=0) {
	  return(
		 <View style={styles.container}>
		  <TouchableOpacity onPress={() => {
		 NativeModules.DDZ.init(
			(poke)=>{
			this.props.init(poke)
			})
	 }} >
	    <ImageBackground   source={require('../img/btn.jpg')}   style={{width:this.props.visible?0:80,height:40,right:0,color:'white',fontSize:20,backgroundColor:'rgba(0,0,0,0)',marginLeft:20}}>
		  <Text style={{width:this.props.visible?0:100,height:40,left:-10,color:'gold',fontSize:20,textAlign:'center',textAlignVertical:'center',fontWeight:'bold',letterSpacing:10}}>发牌</Text>
		</ImageBackground>

	</TouchableOpacity> 
	 <TouchableOpacity onPress={() => {
		 NativeModules.DDZ.cupai([],(poke)=>{
						      this.props.init(poke)
						 })
	 }} >
	    <ImageBackground   source={require('../img/btn.jpg')}   style={{width:this.props.visible?0:80,height:40,right:0,color:'white',fontSize:20,backgroundColor:'rgba(0,0,0,0)',marginLeft:20}}>
		  <Text style={{width:this.props.visible?0:100,height:40,left:-10,color:'gold',fontSize:20,textAlign:'center',textAlignVertical:'center',fontWeight:'bold',letterSpacing:10}}>不出</Text>
		</ImageBackground>

	</TouchableOpacity> 
    
	<TouchableOpacity onPress={() => {console.log(this.props.poker)
		              this.props.submit({data:this.props.poker});
					  NativeModules.DDZ.cupai(this.props.poker.map(poke_=>poke_.poke),(poke)=>{
						      this.props.init(poke)
							  this.props.submit({data:this.props.poker});
						 })
	}} >
	    <ImageBackground   source={require('../img/btn.jpg')}   style={{width:this.props.visible?0:80,height:40,right:0,color:'white',fontSize:20,backgroundColor:'rgba(0,0,0,0)',marginLeft:20}}>
		  <Text style={{width:this.props.visible?0:100,height:40,left:-10,color:'gold',fontSize:20,textAlign:'center',textAlignVertical:'center',fontWeight:'bold',letterSpacing:10}}>出牌</Text>
		</ImageBackground>
	</TouchableOpacity> 
	 <View style={{height:this.props.visible?45:0}}>
	 {   
						this.props.poker.map((pp)=>
				<Image  source={pokeImage()[pp.poke]} style={{position:'absolute',width:this.props.visible?45:0,height:60,left:20*i++-50}}/>
					
		   )      }  
		   </View>
	</View>
		 
	 ) 
  }
}

var styles = StyleSheet.create({
    container: {
    flex: 1,
	flexDirection: "row",
	backgroundColor:'rgba(0,0,0,0)'
  }
})
const mapStateToProps = (state) => ({
  visible: state.pokeList?state.pokeList.visible:false
})
const mapDispatchToProps = dispatch => ({
  submit: data => dispatch(submit(data))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeList)
