import React, { Component } from 'react'
import './Show.css'
import { Link} from 'react-router-dom';
export default class Show extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }
 
    displayProduct =()=>{
        this.setState({
            name:<Child />
        })
    } 
    displayProduct1 =()=>{
        this.setState({
            name:<Child1 />
        })
    } 
    displayProduct2 =()=>{
        this.setState({
            name:<Child2 />
        })
    } 
    displayProduct3 =()=>{
        this.setState({
            name:<Child3 />
        })
    } 
   
   
           render() {
        return (
            <div>    
                {/* nav */}
                <div className="container">
                    
                <nav class="navbar ">
                <span class="navbar-brand mb-0 h1">Mobile Store</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 ">
                        <Link class="nav-link" to="home">Logout</Link>
                    </li>
                </ul>
            </nav> 

                </div>
                {/* showcontent */}
  <div className="container" >
   <div>{this.state.name} </div>
  </div>
                <div className="container">
               
           {/* card */}
           <div className="row">
           <div className="column">
           <div className="card-deck">
  <div className="card" id="c1">
    <img className="showimg" src="https://tse3.mm.bing.net/th?id=OIP.52ZRHKnrVktxcVH_o2ZkXwHaHa&pid=Api&P=0&w=300&h=300" alt="" onClick={this.displayProduct}/>
    <div className="card-body">
        <h5>OnePlus Nord 5G</h5>
        </div>
    </div>
  </div>
  <div className="column">
  <div className="card" id="c1">
  <img className="showimg" src="https://tse1.mm.bing.net/th?id=OIP.GK0Av-TQRLh-oFUPlukXeAHaHa&pid=Api&P=0&w=300&h=300" alt="" onClick={this.displayProduct1}/>
    <div className="card-body">
        <h5>Xiaomi Mi A3</h5>
    </div>
  </div>
  </div>
  <div className="column">
  <div className="card" id="c1">
  <img className="showimg" src="https://tse4.mm.bing.net/th?id=OIP.rMhg8lUhvbVx25BAoOjlvgHaHD&pid=Api&P=0&w=199&h=191" alt="" onClick={this.displayProduct2}/>
    <div className="card-body">
        <h5>Oppo A31</h5>
    </div>
  </div>
  </div>
  <div className="column">
  <div className="card" id="c1">
  <img className="showimg" src="https://tse4.explicit.bing.net/th?id=OIP.G1uXr9s4rYJa7xJWnjWHBQHaE8&pid=Api&P=0&w=244&h=163" alt="" onClick={this.displayProduct3}/>
    <div className="card-body">
        <h5>Vivo V20</h5>
    </div>
  </div>
  </div>
</div>


            </div>
            </div>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.52ZRHKnrVktxcVH_o2ZkXwHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">OnePlus Nord 5G </h4>
                 <p className="card-text">
                    
                     RAM: 8GB <br/>
                     Storage:128Gb<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
class Child1 extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-5">
                <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.GK0Av-TQRLh-oFUPlukXeAHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Xiaomi Mi A3</h4>
                 <p className="card-text">
                    
                     RAM: 4GB <br/>
                     Storage:64GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
class Child2 extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="hhttps://tse4.mm.bing.net/th?id=OIP.rMhg8lUhvbVx25BAoOjlvgHaHD&pid=Api&P=0&w=199&h=191" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Oppo A31</h4>
                 <p className="card-text">
                   
                     RAM: 6GB <br/>
                     Storage:128GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
class Child3 extends Component{
    render(){
        return(
            <div>
               <div className="container">
                <div className="card col-md-6">
                <img className="card-img-top" src="https://tse4.explicit.bing.net/th?id=OIP.G1uXr9s4rYJa7xJWnjWHBQHaE8&pid=Api&P=0&w=244&h=163" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Vivo V20</h4>
                 <p className="card-text">
                    
                     RAM: 8GB <br/>
                     Storage:128GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
}
