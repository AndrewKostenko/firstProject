import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
                postsData={props.profilePage.postsData}
            />
        </div>
    );
};

export default Profile;
