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
	return (
		<div className={s['dialogs']}>
			<div className={s['dialogs-items']}>
				<DialogItem name="first" id="1" />
				<DialogItem name="Petro" id="2" />
				<DialogItem name="third" id="3" />
				<DialogItem name="fourth" id="4" />
				<DialogItem name="fifth" id="5" />
			</div>
			<div className={s['dialogs-messages']}>
				<DialogMessage message="hi" />
				<DialogMessage message="heyo" />
				<DialogMessage message="clss" />
			</div>
		</div>
	)
}


export default Dialogs;