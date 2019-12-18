import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

function SignUp(props){

	const [user, setUser] = useState({
		username: '',
		password: ''
	})
	const handleChange = e =>{
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = e =>{
		e.preventDefault()

		axiosWithAuth().post('/signup', user)

		props.history.go('/sigin')
	}

	return(
		<div className='sign-in'>
			<h2> Sign Up </h2>
			<form onSubmit ={handleSubmit}>
				<input type='email' name='email' placeholder='email' value='email' onChange={handleChange}/><br/>
				<input type='text' name='password' placeholder='password' value='password' onChange={handleChange}/><br/>
				<button type='submit'> Register </button>
			</form>
		</div>
		)
}

export default SignUp; 