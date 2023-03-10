import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>my
			<div>
				<textarea name=""></textarea>
				<button>add post</button>
				<Post message="Hi, how are you" likesCount="2" />
				<Post message="Hello i happy to see you" likesCount="23" />
			</div>
		</div>
	)
}


export default MyPosts;