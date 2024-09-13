import React, { useEffect } from 'react'
import "./Homepage.css"
import gsap from 'gsap'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {

  let navigate = useNavigate()

  let tl = new gsap.timeline()

  useEffect(() => {
    tl.from(".heading .part-1", {
      y: -100,
      opacity: 0,
      delay: 1,
      duration: 0.5
    })

    tl.from(".heading .part-2", {
      y: 100,
      opacity: 0,
      duration: 1
    })

    tl.from(".heading .part-3", {
      x: 100,
      opacity: 0,
      duration: 0.5
    })

    tl.from(".content h2", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    })

    let cursor = document.querySelector(".box")

    document.addEventListener("mousemove",(dets)=>{
      gsap.to(cursor,{
        left: dets.x,
        top: dets.y
      })
    })
    
    document.querySelector(".content").addEventListener("mouseleave",()=>{
      gsap.to(".box",{
        scale: 0
      })
    })

    document.querySelector(".content").addEventListener("mouseenter",()=>{
      gsap.to(".box",{
        scale: 1
      })
    })


  }, [])

  return (
    <>
      <div className="main">
        <div className="box" onClick={()=>{navigate("./home")}}>NEWS</div>
        <div className="page-1">
          <div className="content">
            <div className="heading">
              <h1 className='part-1'>Quick&nbsp;</h1>
              <h1 className='part-2'>Press&nbsp;</h1>
              <h1 className='part-3'>:</h1>
            </div>
            <h2>Your Rapid</h2>
            <h2><span>News</span> Source</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
