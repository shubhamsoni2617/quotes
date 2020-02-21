import React, { useState } from 'react';
import Select from 'react-select';

const Checkbox = props => <input type='checkbox' {...props} />;

const months = [
  { label: 'Anurag Kashyap', value: 1 },
  { label: 'Vishal Bharadwaj', value: 2 },
  { label: 'Amol Gupte', value: 3 },
  { label: 'Ashwini Iyer Tiwari', value: 4 },
  { label: 'Karan johar', value: 5 },
  { label: 'Sudhir Mishra', value: 6 },
  { label: 'Mahesh Bhatt', value: 7 },
  { label: 'Mukesh Bhatt', value: 8 },
  { label: 'Anand L Rai', value: 9 },
  { label: 'Tigmanshu Dhulia', value: 10 },
  { label: 'Zoya Akhtar', value: 11 },
  { label: 'Konkona Sen Sharma', value: 12 }
];

let monthsSorted = months.sort((a, b) => a.label.localeCompare(b.label));
// console.log(monthsSorted);
const MonthYearDropDown = () => {
  const [multiValue, setMultiValue] = useState([]);

  const handleMultiChange = option => {
    console.log(option);
    // setMultiValue(option);
  };
  return (
    <div style={{ width: '50%' }}>
      <p>Select Director Name</p>
      <Select
        isMulti={true}
        options={months}
        // value={multiValue}
        onChange={handleMultiChange}
      />
    </div>
  );
};

const Directors = () => {
  return (
    <div className='container' style={{ display: 'flex' }}>
      <MonthYearDropDown />
      <ul>
        {months.map(month => {
          return (
            <li key={month.label}>
              <label>
                <Checkbox />
                <span>{month.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Directors;
