import styles from './ResultTable.module.css'

const fomatter = new Intl.NumberFormat('en-US',{
   style:'currency',
   currency: 'UDS',
   minimumFractionDigits: 2,
   maximumFractionDigits: 2
});
const ResultTable = (props) => {
    return (
        <table className={styles.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data
                .map(
                    (yearsData) => (
                    <tr key={yearsData.year}>
                        <td>{yearsData.year}</td>
                        <td>{fomatter.format(yearsData.savingsEndOfYear)}</td>
                        <td>{fomatter.format(yearsData.yearlyInterest)}</td>
                        <td>{fomatter.format(yearsData.savingsEndOfYear
                            - props.intialInvestment
                            - yearsData.yearlyContribution
                            * yearsData.year)}</td>
                        <td>{fomatter.format(yearsData.year)}</td>
                    </tr>
                    )
                )
            }
            </tbody>
        </table>
    );
}

export default ResultTable;