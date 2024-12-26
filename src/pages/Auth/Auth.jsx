import { Button, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	async function createUser(e) {
		e.preventDefault();
		const newUser = await axios.post(
			'https://crudcrud.com/api/11971e8197d94716ac4ecc71b1a57c3f/user',
			{
				email: email,
				password: password,
			}
		);
		return newUser;
	}
	async function checkUser(e) {
		e.preventDefault();
		navigate('/admin/category/main');
		// const users = await axios
		// 	.get('https://crudcrud.com/api/11971e8197d94716ac4ecc71b1a57c3f/user')
		// 	.then(keganMalumotni => keganMalumotni.data);

		// const qidirganUserim = users.find(user => user.email === email);
		// if (!qidirganUserim) {
		// 	console.log('User not found');
		// } el3se if (qidirganUserim.password === password) {
		// 	navigate('/');
		// } else {
		// 	console.log('Parol notogri');
		// }
	}

	// return (
	// 	<div className='flex justify-center items-center h-80'>
	// 		<form
	// 			className='flex flex-col bg-slate-300 p-10 shadow-xl rounded-xl	mt-36 gap-2'
	// 			onSubmit={e => checkUser(e)}
	// 		>
	// 			<label htmlFor='email'>Email kirit:</label>
	// 			<Input
	// 				type='email'
	// 				color='blue'
	// 				className=''
	// 				id='email'
	// 				value={email}
	// 				onChange={event => setEmail(event.target.value)}
	// 				label='email'
	// 			/>
	// 			<label htmlFor='password'>Parol kirit:</label>
	// 			<Input
	// 				type='password'
	// 				color='blue'
	// 				label='password'
	// 				id='password'
	// 				value={password}
	// 				onChange={event => setPassword(event.target.value)}
	// 			/>
	// 			<Button type='submit'>Send</Button>
	// 			<div></div>
	// 		</form>
	// 	</div>
	// );
	return (
		<div className='flex justify-center items-center h-80 dark:bg-dark dark:shadow-gray-600'>
			<form
				className='flex flex-col bg-slate-300 p-10 shadow-lg gap-2'
				onSubmit={e => checkUser(e)}
			>
				<label htmlFor='email'>Email kirit:</label>
				<Input
					type='email'
					color='blue'
					className='dark:text-white'
					id='email'
					value={email}
					onChange={event => setEmail(event.target.value)}
					label='email'
				/>
				<label htmlFor='password'>Parol kirit:</label>
				<Input
					type='password'
					color='blue'
					label='password'
					id='password'
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<Button type='submit'>Send</Button>
				<div></div>
			</form>
		</div>
	);
};


export default Auth;
