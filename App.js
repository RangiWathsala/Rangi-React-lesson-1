import React from 'react';
import './App.scss';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Routing/Menu';
import UserTable from './Components/Users/UserTable';



const App = () => {
  // Declare a new state variable, which we'll call "count"
  
 

  return (
    <div className="App">
     <Router>
       <Menu/>
       <Switch>
         <Route path="/about" component={() => (<p>about</p>)}></Route>
         <Route path="/users" component={UserTable}></Route>
         <Route path="/" component={() => (<p>Home</p>)}></Route>
       </Switch>
     </Router>
    
    </div>
    
    
  );
}



export default App;
