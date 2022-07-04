import React from 'react'
import { BsArrowRepeat, BsFillPlayFill,  } from 'react-icons/bs'
import { AiOutlinePause } from 'react-icons/ai'
const Timer = ({ time, handlePlayClick, handlePauseClick, isPaused, handleResetClick}) => {
  
  return (
    <div>
      <div className='timer-container'>
          <h2 id="timer-label">Session</h2>
          <div id='time-left'>
          <span className='timer-time'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span className='timer-time'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          </div>

        </div>
        <div className='buttons-container'>
          { isPaused ? <BsFillPlayFill id='start_stop' onClick={handlePlayClick} /> : <AiOutlinePause onClick={handlePauseClick} /> }
          <BsArrowRepeat id='reset' onClick={handleResetClick}/>
        </div>
    </div>
  )
}

export default Timer