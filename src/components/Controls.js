import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'


const Controls = ({ time, handleControlClick, breakLength, sessionLength }) => {
  
  return (
    <div className="section-container">
      <div className="controls">
          <h2 id='break-label'>Break length</h2>
          <div className='controls-buttons'>
            <AiOutlineArrowDown id='break-decrement' className='arrow' onClick={handleControlClick} />
            <span id='break-length'>{breakLength}</span>
            <AiOutlineArrowUp id='break-increment' className='arrow' onClick={handleControlClick}  />
          </div>
          
        </div>
        <div className="controls">
          <h2 id='session-label'>Session length</h2>
          <div className='controls-buttons'>
              <AiOutlineArrowDown  className='arrow' id='session-decrement' onClick={handleControlClick}  />
            <span id='session-length'>{sessionLength}</span>
            <AiOutlineArrowUp id='session-increment' className='arrow' onClick={handleControlClick} />
          </div>
        </div>
    </div>
  )
}

export default Controls