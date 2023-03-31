import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div >
			<ProfileInfo />
			<MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} postsData={props.profilePage.postsData} />
		</div>
	)
}


export default Profile;