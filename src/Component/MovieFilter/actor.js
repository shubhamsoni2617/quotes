import React, { useState } from 'react';
import Select from 'react-select';

const Checkbox = props => <input type='checkbox' {...props} />;

const months = [
  { label: 'K.K. Menon', value: 1 },
  { label: 'Manoj Bajpai', value: 2 },
  { label: 'Nawazuddin Siddiqui', value: 3 },
  { label: 'Shah Rukh Khan', value: 4 },
  { label: 'Raj Kumar Rao', value: 5 },
  { label: 'Amir Khan', value: 6 },
  { label: 'Kangana Ranaut', value: 7 },
  { label: 'Deepika Paduokone', value: 8 },
  { label: 'Nana Patekar', value: 9 },
  { label: 'Madhubala', value: 10 },
  { label: 'Farhan Akhtar', value: 11 },
  { label: 'Paresh Rawal', value: 12 }
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

const Actors = () => {
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

export default Actors;
