import CustomComboBox from './CustomComboBox';
import React from 'react'
import { SearchManufacturerProps } from './types'

function SearchManufacturer() {

  return (
    <div className='search-manufacturer'>
      <CustomComboBox />
    </div>
  )
}

export default React.memo(SearchManufacturer)