"use client"

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function HoverableDropdown({ title, itemsFirst, itemsSecond }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Dropdown
      show={isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='me-2'
    >
      <Dropdown.Toggle id={`dropdown-${title}`}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="menuArea">
          <div className="menuItemListFirst">
            {itemsFirst.map((item, index) => (
              <Dropdown.Item key={index} href={item.href}>
                {item.label}
              </Dropdown.Item>
            ))}
          </div>
          <div className="menuItemListSecond">
            {itemsSecond.map((item, index) => (
              <Dropdown.Item key={index} href={item.href}>
                {item.label}
              </Dropdown.Item>
            ))}
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function HeaderDropdown() {
  const dropdowns = [
    {
      title: 'Properties',
      itemsFirst: [
        { label: 'Rent Property', href: '/' },
      
      ],
      itemsSecond: [
        { label: 'Sell Property', href: '/' },
        
      ],
    },
  
  ];

  return (
    <div className='ecomNavigationMenu'>
      <div className="d-flex justify-content-center">
        {dropdowns.map((dropdown, index) => (
          <div key={index}>
            <HoverableDropdown
              title={dropdown.title}
              itemsFirst={dropdown.itemsFirst}
              itemsSecond={dropdown.itemsSecond}  // Passed itemsSecond
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderDropdown;