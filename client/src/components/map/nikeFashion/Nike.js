import React, { Fragment } from 'react'
import './css/nike.css'

const Nike = () => {
  return (
    <Fragment>
      <div className="container-fluid"  id="wrapper">
      <div className="dot">
      <i class="fas fa-circle dotIcon"></i>
      </div>

      <div className="lookLifestyle">
      <h3 className="ll">Love <br/> LifeStyle</h3>
      </div>
      
      <div className="shopSales">
      <h3 className="ss">Train <br/> Win</h3>
      </div>

      <div className="faqDelivery">
      <h3 className="faq">FLY <br/> Zoom</h3>
      </div>

      <div className="hamburger">
      <i class="fas fa-bars hamy"></i>
      <i class="fas fa-search search"></i>
      </div>

      <div className="picture">
      <img src={require('./css/img/run1.jpg')} className="r1" alt="runner"/>
      </div>

      <div className="fashion">
      <h2 className="f">Passion</h2>
      </div>

      <div className="runner2">
      <img src={require('./css/img/runners2.jpg')} alt="runner" className="r2"/>
      </div>
      
      <div className="bigLetters">
      <h1 className="nikeRun">Nike x Run</h1>
      </div>

      <div className="horizontal">
      <hr className="hr"/>
      </div>

     <div className="quote">
     <p className="q">
     You are a hurricane. <br/> Remember to breathe every once in a while. 
     </p>
     </div>

    <div className="en">
    <h3 className="e">En.</h3>
    </div>

    <div className="leftArrow">
    <i class="far fa-arrow-alt-circle-left "></i>
    <i class="far fa-arrow-alt-circle-right la"></i>
    </div>

    <div className="runpic3">
    <img src={require('./css/img/run3.jpg')} alt="runner" className="run3"/>
    </div>

    <div className="horizontal2">
    <hr className="h2"/>
    </div>

    <div className="pace">
    <p className="p">{`<PACE/>`}</p>
    </div>

    <div className="quote2">
    <p className="q2">Think Strong. Be Strong. Finish Strong.</p>
    </div>

    <div className="lastQuote">
    <p className="lq">Running is a Gift</p>
    </div>

    <div className="border1"></div>
    <div className="border2"></div>
    <div className="border3"></div>
    <div className="border4"></div>
    <div className="border5"></div>
    <div className="border6"></div>
    <div className="border7"></div>
    <div className="border8"></div>
    <div className="border9"></div>


      </div>
    </Fragment>
  )
}

export default Nike
