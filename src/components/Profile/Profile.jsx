import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div >
			<ProfileInfo />
			<MyPosts addPost={props.addPost} postsData={props.data.postsData} />
		</div>
	)
}


export default Profile;