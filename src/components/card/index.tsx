import React from 'react'
import './index.css'
export default function Card() {
  return (
    <div className='container'>
      <div className="container-box">
      <div className="head">
        <h3 className='t1'>item 1</h3>
        <h3 className='t2'>quantity 1</h3>
      </div>
      <div className="body">
<img  className='img' src="https://cdn.tasteatlas.com//images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?mw=1300" alt="sa" height={'100%'} width={'100%'} />
        <h3>price $9</h3>
        <div className="button-grid ">
        <button className='btn '>add</button>
        <button className='btn '>remove</button>
        </div>
      
      </div>
      <div className="footer">

      </div>
      </div>
     

    </div>
  )
}
