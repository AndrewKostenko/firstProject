import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';



const Dialogs = (props) => {

	let dialogsElements = props.data.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
	let messagesElements = props.data.messagesData.map(m => <DialogMessage message={m.message} id={m.id} />)

	return (
		<div className={s['dialogs']}>
			<div className={s['dialogs-items']}>
				{dialogsElements}
			</div>
			<div className={s['dialogs-messages']}>
				{messagesElements}
			</div>
		</div>
	)
}


export default Dialogs;