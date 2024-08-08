import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const SelectMenu = ({ onChange }) => {
  // Simulando dados para seleção
  const [items] = useState([
    { id: 1, label: 'Opção 1' },
    { id: 2, label: 'Opção 2' },
    { id: 3, label: 'Opção 3' },
  ]);

  const [selectedItem, setSelectedItem] = useState(items[0]); // Item selecionado inicialmente

  const handleChange = (item) => {
    setSelectedItem(item);
    if (onChange) {
      onChange(item); // Notifica o componente pai sobre a mudança
    }
  };

  return (
    <Listbox value={selectedItem} onChange={handleChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm">
          <span className="block truncate">{selectedItem ? selectedItem.label : "Selecione uma opção"}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items.map((item) => (
              <Listbox.Option
                key={item.id}
                className={({ active }) =>
                  `cursor-default select-none py-2 pl-4 pr-2 ${
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectMenu;
