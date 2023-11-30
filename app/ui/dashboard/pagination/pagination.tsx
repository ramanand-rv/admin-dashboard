'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import styles from './pagination.module.css';

const Pagination = ({ count }: any) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const params: any = new URLSearchParams(searchParams);

    const page = searchParams?.get('page') || '1';

    const ItemPerPage = 3;
    const hasPrev: any = ItemPerPage * (parseInt(page) - 1) > 0
    const hasNext: any = ItemPerPage * (parseInt(page) - 1) + ItemPerPage < count;

    const handlePageChange = (type: any) => {
        if (type === 'next') { params.set('page', parseInt(page) - 1) }
        else { params.set('page', parseInt(page) + 1); }

        replace(`${pathName}?${params}`);
    }

    return (
        <div className={styles.container}>
            <button className={styles.btnStyle} disabled={!hasPrev} onClick={() => handlePageChange('next')} >
                <MdArrowBackIos /> Previous
            </button>

            <button className={styles.btnStyle} disabled={!hasNext} onClick={() => handlePageChange('prev')}>
                Next <MdArrowForwardIos />
            </button>
        </div>
    )
}

export default Pagination