// PROPS in header.js ===================================
// & DESTRUCTING in sbuheader.js ==========================================

// PROP --> Prop id the way of passing information from one parent component to child component.
// destructing -->  is the way to write props in new ES6 varients.

import './App.css';
import Header from './components/Header'
import Subheader  from './components/Subheader';

function App() {

  // 1. prop &  destructing(subheader.js)----------------
  let task = "i am best"
  // 2.for pass multi variable---------
  let all ="All";
  let uraddress  ="Select your address";
  return (
    <div className="App">

      {/*1.1 prop & desructure pass as a single variable--> put & for prop go header.js // for desructuring go subheader.js  */}
     {/* <Header  data={task}/> */}
     {/* <Subheader data={task}/> */}

      {/*2.1 prop & desructure pass as a multi variable--> put & for prop go header.js // for desructuring go subheader.js  */}
     <Header  data={{task, all, uraddress}}/>
     <Subheader data={{task, all, uraddress}}/>
    </div>
  );
}

export default App;
