import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import React from 'react';


const Dialogs = (props) => {

	let newPostItem = React.createRef();

	function addPost() {
		console.log(newPostItem.current.value);
	}

	let dialogsElements = props.data.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
	let messagesElements = props.data.messagesData.map(m => <DialogMessage message={m.message} id={m.id} />)

	return (
		<div className={s['dialogs']}>
			<div className={s['dialogs-items']}>
				{dialogsElements}
			</div>
			<div className={s['dialogs-messages']}>
				{messagesElements}

				<textarea ref={newPostItem} ></textarea>
				<button onClick={addPost}>add message</button>
			</div>
		</div>
	)
}


export default Dialogs;