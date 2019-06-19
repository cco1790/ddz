const poker = (state = null, action) => {console.log(state)
  switch (action.type) {
    case 'CHUPAI':
      return action.data  
	  break;
	case 'TOGGLE':
	return getPoke(state,action)
	   break;
   default:
      return state
	
  }
}
function getPoke(poker,action){
	return [poker[0].map(poke_ =>((poke_.poke==action.data)?
	{...poke_,visible:!poke_.visible}:{...poke_})),
     [...poker[1]],[...poker[2]]
	]
}
export default poker
