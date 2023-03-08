import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>my
			<div>
				<textarea name=""></textarea>
				<button>add post</button>
				<Post message="Hi, how are you" />
				<Post message="Hello i happy to see you" />
			</div>
		</div>
	)
}


export default MyPosts;