import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s['post_block']}>
			<h3>my post</h3>
			<div>
				<div><textarea name=""></textarea></div>
				<div><button>add post</button></div>
				<div className={s['posts']}>
					<Post message="Hi, how are you" likesCount="2" />
					<Post message="Hello i happy to see you" likesCount="23" />
				</div>
			</div>
		</div>
	)
}


export default MyPosts;