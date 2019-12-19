import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth"
import FriendForm from './FriendsForm'

function FriendsList(){
	const [friends, setFriends] = useState([])
	useEffect(()=>{
		axiosWithAuth().get('/friends')
			.then((res)=>{
				setFriends(...friends, res.data)
			})
			.catch((err)=>{
				console.log(err)
			})
	}, [])

	return(
		<div className='friends-list'>
			<h1>Friends!</h1>
			<FriendForm />
			{friends.length ? (friends.map((friend)=>{
                return(
				<div key={friend.id} className='friend'>
					<h3>Name: {friend.name}</h3>
					<p>Age: {friend.age}</p>
					<p>Email: {friend.email}</p>
				</div>
				)})):(<div>Add some friends</div>)}
		</div>
	)
}
export default FriendsList; 