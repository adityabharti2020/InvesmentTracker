import React from 'react'
import classes from './ResultTable.module.css';

const formater = new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits:2,
  maximumFractionDigits:2
})
const Result = (props) => {
  return (
    <table className={classes.result}>
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
        {props.data.map(yearData => (<tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{formater.format(yearData.savingsEndOfYear)}</td>
          <td>{formater.format(yearData.yearlyInterest)}</td>
          <td>{formater.format(yearData.savingsEndOfYear - props.initialInvesment - yearData.yearlyContribution * yearData.year)}</td>
          <td>{formater.format(props.initialInvesment + yearData.yearlyContribution * yearData.year)}</td>
        </tr>
        ))}

      </tbody>
    </table>
  );
};

export default Result
