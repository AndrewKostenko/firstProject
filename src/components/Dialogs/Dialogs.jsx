import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s['dialogs']}>
			<div className={s['dialogs-items']}>
				<div className={s['dialog'] + ' ' + s['active']}>first</div>
				<div className={s['dialog']}>second</div>
				<div className={s['dialog']}>third</div>
				<div className={s['dialog']}>fourth</div>
				<div className={s['dialog']}>fifth</div>
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