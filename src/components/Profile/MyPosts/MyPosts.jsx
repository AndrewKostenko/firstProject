import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
    let posts = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //   props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s["post_block"]}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
                <div className={s["posts"]}>{posts}</div>
            </div>
        </div>
    );
};

export default MyPosts;
