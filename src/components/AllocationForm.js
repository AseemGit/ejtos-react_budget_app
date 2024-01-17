import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds £${remaining}`);
            setCost('');
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }

        // Clear the form fields after submission
        setName('');
        setCost('');
        setAction('');
    };

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='departmentDropdown'>
                            Department
                        </label>
                    </div>
                    <select
                        className='custom-select'
                        id='departmentDropdown'
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    >
                        <option defaultValue>Choose...</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Sales'>Sales</option>
                        <option value='Finance'>Finance</option>
                        <option value='HR'>HR</option>
                        <option value='IT'>IT</option>
                        <option value='Admin'>Admin</option>
                    </select>

                    <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
                        <label className='input-group-text' htmlFor='actionDropdown'>
                            Allocation
                        </label>
                    </div>
                    <select
                        className='custom-select'
                        id='actionDropdown'
                        onChange={(event) => setAction(event.target.value)}
                        value={action}
                    >
                        <option value='Add'>Add</option>
                        <option value='Reduce'>Reduce</option>
                    </select>

                    <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
                        <label className='input-group-text' htmlFor='cost'>
                            $
                        </label>
                    </div>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '1rem', width: '80px' }}
                        onChange={(event) => setCost(event.target.value)}
                        className='form-control'
                    />

                    <button className='btn btn-primary' onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
