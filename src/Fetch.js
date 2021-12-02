import React from 'react';
import firebase from './firebase'

const GetData = () => {
	useEffect(() => {
		const firestore=firebase.database().ref()
		firestore.on('value',(response)=>{
			const data = response.val();
			let userInfo = [];
			for(let id in data){
				
			}
		})
	}, [])

	return (
		<div>
		<h1>Data fetched jsdkjlkasjdlksahdlhsahdlkahsjdhsajkdhkjhasdkhdkjashkdhaskjhdksahdkjshdkjhaskjdhkshdkj</h1>
		</div>
);}

export default GetData;