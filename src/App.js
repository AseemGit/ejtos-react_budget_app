import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import the components
import Budget from './components/Budget';
import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

const App = () => {
    // Step 1: Create a state variable for the selected currency
    const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency is $

    // Step 2: Create a function to handle currency selection
    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {/* Budget component */}
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        {/* Remaining component */}
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        {/* ExpenseTotal component */}
                        <ExpenseTotal />
                    </div>
                    
                    <div className='col-sm'>
                        {/* ExpenseList component */}
                        <ExpenseList />
                    </div>
                    
                    
                    <div className='col-sm'>
                        {/* AllocationForm component */}
                        <AllocationForm />
                    </div>

                    <div className='col-sm'>
                        <div className='form-group'>
                            <label htmlFor='currencyDropdown'>Select Currency:</label>
                            <select
                                className={'form-control-custom-dropdown'}
                                id='currencyDropdown'
                                value={selectedCurrency}
                                onChange={handleCurrencyChange}
                            >
                                <option value='$'>$ Dollar</option>
                                <option value='£'>£ Pound</option>
                                <option value='€'>€ Euro</option>
                                <option value='₹'>₹ Rupee</option>
                                {/* Add more currency options as needed */}
                            </select>
                        </div>
                    </div>

                
                    
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
