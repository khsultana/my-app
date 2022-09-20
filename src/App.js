import logo from './logo.svg';
import './App.css';

const myStyle = { backgroundColor: 'blue ' }
function App() {
  return (
    <div className="App">
      <Person name="Natok korro"></Person>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
    </div >
  );
}


function Person(props) {
  console.log(props)
  // return 
  return (<div className='person'>
    <h1>BanglaDesh </h1>
    <p>Its our country</p>
  </div>
  )
}

function Friend() {
  return (
    <div className='Container'>
      <h3>Name:Kh SUltaba</h3>
      <p style={myStyle}>Job:Saradin Khate</p>
    </div>
  )
}
export default App;

