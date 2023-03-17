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

	let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	return (
		<div className={s['post_block']}>
			<h3>my post</h3>
			<div>
				<div><textarea name=""></textarea></div>
				<div><button>add post</button></div>
				<div className={s['posts']}>
					{posts}
				</div>
			</div>
		</div>
	)
}


export default MyPosts;