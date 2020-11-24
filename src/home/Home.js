import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* nav */}

                <div className="container">
                <nav className="navbar ">
                <span className="navbar-brand mb-0 h1">Mobile Store</span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item1">
                        <Link className="nav-link" to="login">Login</Link>
                    </li>
                </ul>
            </nav>
            <h1 id="name">Welcome To  Mobile Store!!!!!</h1>
                </div>
                {/* corosoul */}
                <div className="container">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="block" src="https://tse3.mm.bing.net/th?id=OIP.czqdjzSsHiTyfzral2fvwQHaEK&pid=Api&P=0&w=312&h=176" alt="First slide"/>
    </div>
    
  </div>
 
</div>
</div>
            </div>
        )
    }
}
