import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    // const handleBudgetDecrease = () => {
    //     const newBudgetValue = parseInt(newBudget);
    //     const totalExpenses = expenses.reduce((total, item) => {
    //         return (total += item.cost);
    //     }, 0);

    //     if (newBudgetValue < totalExpenses) {
    //         alert("Warning: Your budget is going down the expenses you already have!");
    //     }
    return (
<div className='alert alert-secondary'>
<span>Budget:{currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
