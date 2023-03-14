import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s['dialogs']}>
			<div className={s['dialogs-items']}>
				<div className={s['dialog'] + ' ' + s['active']}><NavLink to="/dialogs/2">first</NavLink></div>
				<div className={s['dialog']}><NavLink to="/dialogs/2">second</NavLink></div>
				<div className={s['dialog']}><NavLink to="/dialogs/3">third</NavLink></div>
				<div className={s['dialog']}><NavLink to="/dialogs/4">fourth</NavLink></div>
				<div className={s['dialog']}><NavLink to="/dialogs/5">fifth</NavLink></div>
			</div>
			<div className={s['dialogs-messages']}>
				<div className={s['message']}>hi</div>
				<div className={s['message']}>heyo</div>
				<div className={s['message']}>clss</div>
			</div>
		</div>
	)
}


export default Dialogs;