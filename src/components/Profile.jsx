import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s['content']}>
			<div>
				<img src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg" alt="" />
			</div>
			<div>ava</div>
			<div>my
				<div>
					new
					<div>
						<div className={s['item']}>pos1</div>
					</div>
					<div>
						<div>post1</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Profile;