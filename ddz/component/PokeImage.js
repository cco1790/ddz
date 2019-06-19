import React, {PropTypes, Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ImageBackground
} from 'react-native';
import pokeImage from './PokeImages'
import { toggle } from '../actions/index'
import { connect } from 'react-redux'



  class PokeImage extends Component {
  
   constructor(props) {
      super(props);  
   }
   
  render () {
	  return( <View style={styles.imgcontainer}>
		<ImageBackground  source={pokeImage()[this.props.img.poke]} style={{position:'absolute',width:60,height:80,top:this.props.img.visible?-60:-40,left:this.props.i*25}}>
			 <Text   style={{fontSize:80,opacity:0}} onPress={() => { this.props.toggle(this.props.img.poke) ;    }}>fff</Text>
		</ImageBackground>
		</View>
	 ) 
  }
}

var styles = StyleSheet.create({
  imgcontainer: {
	justifyContent: 'center',
	alignItems:'center',
	width:50
  },
})

const mapStateToProps = (state) => ({
  visible: state.poker.visible
})
const mapDispatchToProps = dispatch => ({
  toggle: data => dispatch(toggle(data))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeImage)
