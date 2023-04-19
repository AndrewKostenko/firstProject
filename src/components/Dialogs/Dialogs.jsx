import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import React from "react";
import {
    addMessageActionCreator,
    updateMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
    let newMessageItem = React.createRef();

    function addMessageItem() {
        props.dispatch(addMessageActionCreator());
    }
    function updateMessageText() {
        let messageText = newMessageItem.current.value;
        props.dispatch(updateMessageTextActionCreator(messageText));
    }

    let dialogsElements = props.data.dialogsData.map((d) => (
        <DialogItem id={d.id} name={d.name} />
    ));
    let messagesElements = props.data.messagesData.map((m) => (
        <DialogMessage message={m.message} id={m.id} />
    ));

    return (
        <div className={s["dialogs"]}>
            <div className={s["dialogs-items"]}>{dialogsElements}</div>
            <div className={s["dialogs-messages"]}>
                {messagesElements}

                <textarea
                    ref={newMessageItem}
                    onChange={updateMessageText}
                    value={props.data.newMessageText}
                ></textarea>
                <button onClick={addMessageItem}>add message</button>
            </div>
        </div>
    );
};

export default Dialogs;
