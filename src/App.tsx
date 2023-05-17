import { useState } from 'react'
import './App.css'
import NavUi from './components/navbar/Ui'
import styled from 'styled-components';

function App() {
  // const [count, setCount] = useState(0)
  const Wrapper = styled.div`
  
      /* background-color: #171718;
       height: 80%;
   */
   
  `;
  return (
    <>
    
    <NavUi/>
    <Wrapper className='col1'/>
      
    </>
  )
}

export default App
