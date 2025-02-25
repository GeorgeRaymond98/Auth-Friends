import React, {useState}from 'react';
import axiosWithAuth from "../utils/axiosWithAuth"

function FriendForm(){
	const [newFriend, setNewFriend] = useState({
		name: '',
		age: '',
		email:'',
	})
	const handleChange = e =>{
		setNewFriend({
			...newFriend, 
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = e =>{
		axiosWithAuth()
			.post('/friends', newFriend)
			.then((res)=>{
				console.log(res)
			})
			.catch((err)=>{
                console.log(err)
			})
	}

	return(
		<div className='friends-form'>
			<form onSubmit ={handleSubmit}>
				<input type='text' name='name' placeholder='Name' value={newFriend.name} onChange ={handleChange}/> <br/>
				<input type='text' name='age' placeholder='Age' value={newFriend.age} onChange ={handleChange}/> <br/>
				<input type='text' name='email' placeholder='Email' value={newFriend.email} onChange ={handleChange}/> <br/>
				<button type='submit'> Add Friend </button>
			</form>
		</div>
		)
}

export default FriendForm; 