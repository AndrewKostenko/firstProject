import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';



const Dialogs = (props) => {

	let dialogsData = [
		{
			id: 1,
			name: 'first'
		},
		{
			id: 2,
			name: 'Petro'
		},
		{
			id: 3,
			name: 'third'
		},
		{
			id: 4,
			name: 'fourth'
		},
		{
			id: 5,
			name: 'fifth'
		}
	];

	let messagesData = [
		{
			id: 1,
			message: 'hi'
		},
		{
			id: 2,
			message: 'heyo'
		},
		{
			id: 3,
			message: 'clss'
		},
	];


	let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
	let messagesElements = messagesData.map(m => <DialogMessage message={m.message} id={m.id} />)

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