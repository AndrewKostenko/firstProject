import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s['item']}>
			<div className={s['item_img']} >
				<img src="https://img08.rl0.ru/afisha/e630x315p253x0f1077x606q85i/s3.afisha.ru/mediastorage/d7/24/5890c7504fca4b79ae2015c724d7.jpg" alt="" />
			</div>
			<div className={s['item_content']} >
				<div className={s['item_text']} >{props.message}</div>
				<div className={s['item_bottom']} >
					<div className={s['item_like']} >like <span>{props.likesCount}</span></div>
				</div>
			</div>
		</div>
	)
}


export default Post;