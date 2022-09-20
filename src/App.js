import logo from './logo.svg';
import './App.css';
const objectAll = [
  { name: 'mahfuz', job: 'Singer' },
  { name: 'mahAafuz', job: 'Singer' },
  { name: 'AAAaamahfuz', job: 'Singer' },
  { name: 'NNNNahfuz', job: 'Singer' },
  { name: ' ahfuz', job: 'Singer' },
];

function App() {


  const array = ['apple', 'bapple', 'sapple', 'Loop', 'Normal']

  return (
    <div className="App">
      {
        objectAll.map(objet => <Person name={objet.name}  ></Person>)
      }
      {array.map(all => < Person name={all}> </Person>)}


      {/* <Person name={array[0]} job="Java"></Person>
      <Person name={array[1]} job="Java"></Person>
      <Person name={array[2]} job="Java"></Person>
      <Person name="BappaRaza" job="Nayok"></Person> */}

      <Friends name="Click Me Here"></Friends>
    </div >
  );
}


function Person(props) {
  console.log(props)

  return (
    <div className='Container'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  )
}

function Friends(props) {
  return (
    <div>
      <button>{props.name}</button>
    </div>

  )

}
export default App;

