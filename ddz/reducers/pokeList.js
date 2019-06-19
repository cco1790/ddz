const pokeList = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {visible:!state.visible }
	  break;
   default:
      return state
	
  }
}

export default pokeList
