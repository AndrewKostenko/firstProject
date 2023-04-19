const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                {
                    id: 1,
                    name: "first",
                },
                {
                    id: 2,
                    name: "Petro",
                },
                {
                    id: 3,
                    name: "third",
                },
                {
                    id: 4,
                    name: "fourth",
                },
                {
                    id: 5,
                    name: "fifth",
                },
            ],
            messagesData: [
                {
                    id: 1,
                    message: "hi",
                },
                {
                    id: 2,
                    message: "heyo",
                },
                {
                    id: 3,
                    message: "clss",
                },
            ],
            newMessageText: "sdfsdf",
        },
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "Hi, how are you",
                    likesCount: 2,
                },
                {
                    id: 2,
                    message: "Hello i happy to see you",
                    likesCount: 23,
                },
            ],
            newPostText: "something",
        },
    },
    _rerenderEntireTree() {
        console.log("state render");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
        console.log(this);
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state["profilePage"]["postsData"].push(newPost);
        this._state.profilePage.newPostText = "";
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state["profilePage"]["newPostText"] = newText;
        this._rerenderEntireTree(this._state);
    },
    addMessageItem() {
        let id =
            this._state.messagesPage.messagesData.length[
                this._state.messagesPage.messagesData.length - 1
            ][id];
        let newMessage = {
            id: id + 1,
            message: this._state.messagesPage.newMessageText,
        };

        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._rerenderEntireTree(this._state);
    },
    updateMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._rerenderEntireTree();
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state["profilePage"]["postsData"].push(newPost);
            this._state.profilePage.newPostText = "";
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state["profilePage"]["newPostText"] = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let id;
            id =
                this._state.messagesPage.messagesData[
                    this._state.messagesPage.messagesData.length - 1
                ]["id"];
            let newMessage = {
                id: id + 1,
                message: this._state.messagesPage.newMessageText,
            };

            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = "";
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._rerenderEntireTree();
        }
    },
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    };
};
export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text,
    };
};

export default store;
window.store = store;
