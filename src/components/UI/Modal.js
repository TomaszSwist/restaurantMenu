import classes from './Modal.module.css'

const Modal = props => {
	return (
		<section className={classes.backdrop}>
			<div className={classes.modal}>{props.children}</div>
		</section>
	)
}

export default Modal
