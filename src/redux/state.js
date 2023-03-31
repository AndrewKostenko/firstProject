let rerenderEntireTree = () =>{
	console.log('state render');
	
}

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
		newPostText: 'something'
	}
}
window.state = state;
export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};

	state['profilePage']['postsData'].push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
	state['profilePage']['newPostText'] = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer)=>{
rerenderEntireTree = observer;
}


export default state;