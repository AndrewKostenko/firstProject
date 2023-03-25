

let state = {
	messagesPage: {
		dialogsData: [
			{
				id: 1,
				name: 'first'
			},
			{
				id: 2,
				name: 'Petro'
			},
			{
				id: 3,
				name: 'third'
			},
			{
				id: 4,
				name: 'fourth'
			},
			{
				id: 5,
				name: 'fifth'
			}
		],
		messagesData: [
			{
				id: 1,
				message: 'hi'
			},
			{
				id: 2,
				message: 'heyo'
			},
			{
				id: 3,
				message: 'clss'
			},
		]
	}
	,
	profilePage: {
		postsData: [
			{
				id: 1,
				message: 'Hi, how are you',
				likesCount: 2
			},
			{
				id: 2,
				message: 'Hello i happy to see you',
				likesCount: 23
			},
		],
	}
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	};

	state['profilePage']['postsData'].push(newPost);
}



export default state;