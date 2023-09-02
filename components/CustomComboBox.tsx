import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useCallback, useMemo, useState } from 'react'

import Image from 'next/image'
import { manufacturers } from '@utils/constants'
import { searchActions } from './Context/SearchHooks'
import { useSearchContext } from './Context/SearchContext'

function CustomComboBox() {
  const {state, dispatch} = useSearchContext();
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleChange = useCallback((e: any) => {
    setSearchQuery(e.target.value);
  }, [])

  const clearQuery = useCallback(() => {
    setSearchQuery('')
  }, [])

  const getManufacturers = useMemo(() => {
    if (searchQuery === '') return manufacturers
    else return manufacturers.filter((manufacturer: string) => manufacturer.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()));
  }, [searchQuery])


  const renderManufacturers = useMemo(() => {
    const manufacturerData = getManufacturers;
    if (manufacturerData.length === 0 && searchQuery !== '') {
      return (
        <Combobox.Option value={searchQuery} className='search-manufacturer__input__option'>
          Create {searchQuery}
        </Combobox.Option>
      )
    }
    return (
      manufacturerData.map((manufacturerData: string, index: number) => {
        return <Combobox.Option key={index} value={manufacturerData} className={({ active }) =>
          `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
          }`
        }>
          {({ selected, active }) => (
            <React.Fragment>
              <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                {manufacturerData}
              </span>

              {selected && 
                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                ></span>
              }
            </React.Fragment>
          )}

        </Combobox.Option>
      })
    )
  }, [getManufacturers, searchQuery])

  const onComboboxChange = useCallback((manufacturer: string) => {
    if(dispatch) dispatch(searchActions.setManufacturer(manufacturer))
  }, [dispatch])

  return (
    <Combobox value={state.manufacturer} onChange={onComboboxChange}>
      <div className='relative w-full'>
        <Combobox.Button className='absolute top-[14px]'>
          <Image src='/car-logo.svg' height={20} width={20} alt='Car Logo' className='ml-4' />
        </Combobox.Button>
        <Combobox.Input className='search-manufacturer__input' placeholder='Volkswagen' displayValue={(manufacturer: string) => manufacturer} onChange={handleChange} />
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={clearQuery}>
          <Combobox.Options>
            {renderManufacturers}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default React.memo(CustomComboBox)