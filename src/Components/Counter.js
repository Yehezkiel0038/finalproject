import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
    increaseCount,
    decreaseCount
} from '../Actions/Counter'
import '../App.css'
import { 
    Link,
    BrowserRouter as Router,
    Switch,
    Route } from 'react-router-dom'
import {Home} from './Home'
import Form from './Form'

class Counter extends Component {

static mapStateToProps = state => {
    return {
        count: state.count
    }
}

static mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increaseCount,
        decreaseCount
    },
    dispatch
    )
}

componentDidUpdate(){
    console.log("Berhasil Update")
}

render() {
    const { increaseCount, decreaseCount } = this.props
    return(
        
        <Router>
        <h1 className="App-header">Selamat Datang</h1>
             {/* buat route */}
               <ul className="navbar">
               <Link style={{ cursor: 'pointer'}}  to="/" >Home</Link>
               <Link style={{ cursor: 'pointer'}}  to="/Counter">Hitungan</Link>
               <Link style={{ cursor: 'pointer'}}  to="/Form">Form</Link>
               </ul>
            
       
        <Switch>
            <Route path="/">
            <Home />
            </Route>
            <Route path="/Counter">
            <Counter />
            </Route>
            <Route path="/Form">
            <Form />
            </Route>
            
        </Switch>
        <div className="App-header" style={{backgroundColor: "#2c3952",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#efefef"
                   
                }}>
           
            <p style={{color:"white"}} >Hitungan : {this.props.count}</p>
        {/* buat button counter */}
        <button  style={{ backgroundColor: "#00bfff"}} onClick={increaseCount} >Tambahkan</button>
        
        <button  style={{ backgroundColor: "#8000ff"}} onClick={decreaseCount}>Kurangkan</button>
      
        </div>
        </Router>
    )
}
    
}
  

export default connect(
    Counter.mapStateToProps,
    Counter.mapDispatchToProps
)(Counter)

