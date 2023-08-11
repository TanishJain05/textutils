import React from 'react'
import PropTypes from 'prop-types'
// import {Link}  from "react-router-dom"

export default function myFuct(props){
    const colorBoxStyle = {
        width: "135px",
        height: "20px",
        display: "inline-block",
        margin: "10px",
        borderRadius: "5px",
      };
      const changeColor=(color)=>{
        document.body.style.backgroundColor=color;
      }
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
         <a className="navbar-brand" href="#">{props.title}</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='#'>Home</a>
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">About</Link> */}
            </li>
            <li>
            <button className={`btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">  </button>
            <ul className={`dropdown-menu bg-${props.mode==='light'?'light':'dark'}`}>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#FF5733" }} onClick={()=>changeColor('#FF5733')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#C70039" }} onClick={()=>changeColor('#C70039')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#900C3F" }} onClick={()=>changeColor('#900C3F')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#581845" }} onClick={()=>changeColor('#581845')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#4CAF50" }} onClick={()=>changeColor('#4CAF50')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#3498DB" }} onClick={()=>changeColor('#3498DB')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#8E44AD" }} onClick={()=>changeColor('#8E44AD')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#F39C12" }} onClick={()=>changeColor('#F39C12')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#E74C3C" }} onClick={()=>changeColor('#E74C3C')}></div></li>
             <li><div style={{ ...colorBoxStyle, backgroundColor: "#2C3E50" }} onClick={()=>changeColor('#2C3E50')}></div></li>
            </ul>
            </li>
            </ul>
            <form className="d-flex" role="search">
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':"Disable Dark Mode"}</label>
</div>
            </form>
        </div>
      </div>
    </nav>   
        </>
            
    )
}

myFuct.propTypes= {
    title: PropTypes.string
}
myFuct.defaultProps= {
    title: "Set Title here"
}