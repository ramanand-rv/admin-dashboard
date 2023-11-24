import { MdArrowBack, MdArrowBackIos, MdArrowBackIosNew, MdArrowForwardIos, MdArrowLeft, MdArrowRight, MdBorderLeft, MdOutlineArrowRight, MdRampRight, MdSwipeLeft, MdTurnLeft } from 'react-icons/md';
import styles from './pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.container}>
            <button disabled className={styles.btnStyle}>
                <MdArrowBackIos /> Previous
            </button>

            <button className={styles.btnStyle}>
                Next <MdArrowForwardIos />
            </button>
        </div>
    )
}

export default Pagination