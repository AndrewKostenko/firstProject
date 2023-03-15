import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postsData = [
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
	];


	return (
		<div className={s['post_block']}>
			<h3>my post</h3>
			<div>
				<div><textarea name=""></textarea></div>
				<div><button>add post</button></div>
				<div className={s['posts']}>
					<Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
					<Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
				</div>
			</div>
		</div>
	)
}


export default MyPosts;