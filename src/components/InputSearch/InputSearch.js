import React from 'react';

import './InputSearch.css';

const InputSearch = ({ inputValue, update, allUsers }) => {

  const inputValueChange = e => {
    const value = e.target.value.toLowerCase();

    const filter = allUsers.filter(user => {
      const name = user.fullName.toLowerCase().split(' ');

      return name.find(str => str.startsWith(value));
    });

    update({
      allUsers: filter,
      inputValue: value
    });
  };

  return (
    <div className="InputSearch">
      <input type="text"
             placeholder="Search or start new chat"
             value={inputValue}
             onChange={inputValueChange} />
    </div>
  );
};

export default InputSearch;
