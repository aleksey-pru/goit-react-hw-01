import css from './TransactionHistoryItem.module.css'

const TransactionHistoryItem = ({type, amount, currency}) => {
  return (
        <tr className={css.itemRow}>
          <td className={css.item}>{type.charAt(0).toUpperCase()+type.slice(1)}</td>
          <td className={css.item}>{amount}</td>
          <td className={css.item}>{currency}</td>
        </tr>
  )
}

export default TransactionHistoryItem