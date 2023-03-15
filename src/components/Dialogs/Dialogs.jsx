import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props['id'];
	return (
		<div className={s['dialog']}>
			<NavLink to={path}>{props['name']}</NavLink>
		</div>
	)
}
const DialogMessage = (props) => {
	return (
		<div className={s['message']}>
			{props.message}
		</div>
	)
}

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

	return (
		<div className={s['dialogs']}>
			<div className={s['dialogs-items']}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name="third" id="3" />
				<DialogItem name="fourth" id="4" />
				<DialogItem name="fifth" id="5" />
			</div>
			<div className={s['dialogs-messages']}>
				<DialogMessage message={messagesData[0].message} />
				<DialogMessage message={messagesData[1].message} />
				<DialogMessage message={messagesData[2].message} />
			</div>
		</div>
	)
}


export default Dialogs;