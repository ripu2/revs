import React, { useCallback, useState } from 'react'
import { SearchContext, useSearchContext } from './Context/SearchContext'

import { SearchManufacturer } from '@components'
import { useSearchReducer } from './Context/SearchHooks';

function SearchBar() {
  const [state, dispatch] = useSearchReducer();
  const handleSearch = useCallback(() => {

  }, [])

  return (
    <SearchContext.Provider value={{state, dispatch}}>
      <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
          <SearchManufacturer/>
      </div>
    </form>
    </SearchContext.Provider>
  )
}

export default SearchBar