import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='Navbar'>
        <div className='NavText'>SO FUNKITIONIERT'S</div>
        <div className='NavText'>SONDERANGEBOT</div>
        <div className='NavText'>
          <span>
            <i className='fas fa-user' />
          </span>
          MEIN BEREICH
          <span>
            <i className='fa-solid fa-caret-down'></i>
          </span>
        </div>
      </div>
      <div className='backgroundHeaderImage'>
        <div className='TheJokeBible'>The Joke Bible</div>
        <p>Daily Laughs for you and yours</p>
        <div className='inputContainer'>
          <input placeholder='How can we make you laugh today' />
          <div className='searchIcon'>
            <span>
              <i className='fa-solid fa-magnifying-glass'></i>{' '}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
