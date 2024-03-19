"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import Link from 'next/link';

const options = [
  { value: '5000', label: '₹ 5000' },
  { value: '7000', label: '₹ 7000' },
  { value: '10000', label: '₹ 10,000' },
  { value: '12000', label: '₹ 12,000' },

];

const maxOptions = [
  { value: '7000', label: '₹ 7000' },
  { value: '10000', label: '₹ 10000' },
  { value: '12000', label: '₹ 12000' },
  { value: '15000', label: '₹ 15000' },

];



const BannerSection = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='bannerSection' >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 text-center">
            <h1>Find Your Dream Home</h1>
            <p>From as low as ₹10 per day with limited time offer discounts.</p>
            <div className="container rent_container">
              <div className="row">
                <div className="col-lg-2">
                  <Link className='link' href="/">Rent Property</Link>
                </div>
              </div>
              <div className="searchSection">
                <div className="form-wrap">
                  <form action="">
                    <div className="row">
                      <div className="col-lg-3">
                        <input className='Rentinput' type="text" name="location" placeholder="Enter location" />
                      </div>
                      <div className="col-lg-2">
                        <Select
                          placeholder="Min. Price"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                      <div className="col-lg-2">
                        <Select
                          placeholder="Max. Price"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={maxOptions}
                        />
                      </div>
                      <div className="col-lg-3">
                        <span className='Rentinput' style={{color: '#6c757d'}}>Advance filter</span>
                      </div>
                      <div className="col-lg-2">
                        <button type="submit" className='submitbtn'>Search</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection
