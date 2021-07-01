import React, { useState } from 'react';

const SearchInput = getQuery => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) {
      callAlert('emptyInput');
      return false;
    } else {
        getQuery.getQuery.getQuery(query);
        setQuery('');
    }
  };

  const validateInput = (inputText) => {
    const letterNumber = /^[a-zA-Z0-9 ]*$/;

    if (inputText.match(letterNumber)) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (e) => {
    let inputText = e.target.value;

    if (validateInput(inputText)) {
      setQuery(inputText);
    } else {
      callAlert('invalidInput');
    }
  };

  const callAlert = (type) => {
    if (!document.querySelector('#alert')) {
      switch (type) {
        case 'invalidInput':
          document.querySelector('#alpha_numeric_alert').style.display = 'block';
          break;
        case 'emptyInput':
          document.querySelector('#empty_input_alert').style.display = 'block';
          break;
        default:
          return;
      }

      setTimeout(removeAlert, 3000);
    }
  };

  const removeAlert = () => {
    if (document.querySelector('#alpha_numeric_alert').style.display === 'block') {
      document.querySelector('#alpha_numeric_alert').style.display = 'none';
    }

    if (document.querySelector('#empty_input_alert').style.display === 'block') {
      document.querySelector('#empty_input_alert').style.display = 'none';
    }
  };

  return (
    <form id='search_form' className='position-relative' onSubmit={handleSubmit}>
      <div className='input-group input-group-sm w-100'>
        <input onChange={handleInputChange} value={query} type='text' className='form-control form-control-sm' placeholder='Type something to search...' aria-label='search_button' aria-describedby='search_button' maxLength='40' />

        <div className='input-group-append'>
          <button className='btn btn-outline-success' type='submit' id='search_button'>
            Find
          </button>
        </div>
      </div>

      <div id='alpha_numeric_alert' className='input-alert alert alert-danger' style={{ display: 'none' }}>
        Wrong character, please type only letters and numbers!
      </div>
      <div id='empty_input_alert' className='input-alert alert alert-danger' style={{ display: 'none' }}>
        Search field is empty, please type something to search!
      </div>
    </form>
  );
};

export default SearchInput;
