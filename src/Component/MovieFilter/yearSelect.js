import React from 'react';
import Select from 'react-select';

const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 }
];

const MonthYearDropDown = ({ title }) => {
  return (
    <div style={{ width: '50%' }}>
      <p>{title}</p>
      <Select
        options={months}
        onChange={opt => console.log(opt.label, opt.value)}
      />
      <Select
        options={[...Array(71).keys()].map(year => ({
          label: year + 1950,
          value: year + 1950
        }))}
        onChange={opt => console.log(opt.label, opt.value)}
      />
    </div>
  );
};

const YearSelect = () => (
  <div className='container' style={{ display: 'flex' }}>
    <h3>Span of release</h3>
    <MonthYearDropDown title={'From'} />
    <MonthYearDropDown title={'To'} />
  </div>
);

export default YearSelect;
