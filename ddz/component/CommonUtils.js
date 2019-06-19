'use strict';


export function isEmptyObject(obj) {
	for (var name in obj) {
		return false;
	}
	return true;
}
export function getData(data) {
	const dd = [];
	data.map((m)=>{
		const dd_= [] ;
		m.map((n)=>{
			dd_.push(n)
		}) ;
		dd.push(dd_)
	})
	console.log(dd)
	return dd;
}