import Transaction from '@/app/ui/dashboard/transaction/transaction'
import styles from '@/app/ui/dashboard/transaction/transactionPage/transactionPage.module.css';

const TransactionPage = () => {
  return (
    <div className={styles.container}>
        <Transaction />
    </div>
  )
}

export default TransactionPage