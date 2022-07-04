import './App.css'
import Timer from './components/Timer';
import Controls from './components/Controls';
import {useEffect, useState} from 'react';
import rooster from './lib/rooster.mp3'
function App() {
  const [currentTime, setCurrentTime] = useState(1500000);
  const [isPaused, setIsPaused] = useState(true);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const handleResetClick = () => {
    setCurrentTime(1500000);
    setIsPaused(true);
    setSessionLength(25);
    setBreakLength(5);
  }


  const handlePlayClick = () => {
    setIsPaused(false);
  }

  const handlePauseClick = () => {
    setIsPaused(true);
  }

  useEffect(() => {
      const intervalReference = setInterval(() => {
        if (!isPaused && currentTime > 0){
          setCurrentTime(prevTime => prevTime - 1000)
        } else if (!isPaused && currentTime === 0) {
          document.getElementById('sound').play();
          const time = breakLength * 60000
          setCurrentTime(time)
        } else {
          clearInterval(intervalReference)
          
        }
      }, 1000)
      return () => {
        clearInterval(intervalReference)
      }
    
  }, [isPaused, currentTime, breakLength])

  const handleControlClick = ({target}) => {
    const {id} = target
    if (id === 'session-increment' && isPaused) {
      setSessionLength((prevLength) => prevLength + 1)
      const length = sessionLength + 1;
      setSessionLength(length);
      const time = length * 60000
      setCurrentTime(time) 
    }
    if (id === 'session-decrement' && sessionLength > 1 && isPaused) {
      const length = sessionLength -1
      setSessionLength(length);
      const time = length * 60000
      setCurrentTime(time) 
    }
    if (id === 'break-increment') setBreakLength((prevBreakLength) => prevBreakLength + 1)
    if (id === 'break-decrement' && breakLength > 1) setBreakLength((prevBreakLength) => prevBreakLength + -1)
  }


  return (
    <div className="App">
    <h1>25 + 5 Clock</h1>
    <Controls
      time={currentTime}
      handleControlClick = {handleControlClick}
      breakLength = {breakLength}
      sessionLength = {sessionLength}
        
    />
    <Timer
      time={currentTime}
      handlePlayClick={handlePlayClick}
      handlePauseClick={handlePauseClick}
      isPaused={isPaused}
      handleResetClick= {handleResetClick}
      />
        <audio src={rooster} id='sound' />
        <h4>Coded by Rodrigo RG</h4>
    </div>
  );
}

export default App;
