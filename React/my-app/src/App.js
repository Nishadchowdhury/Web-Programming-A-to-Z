import logo from './logo.svg';
import './App.css';

const singers = [
                {name:" Dr.Mahfuz " , job : 'Singer'},
                {name:"Eav Rahaman" , job : 'Singer pro max'},
               ];


function App() {
  const nayoks = ['Rubel' , 'Bapparaz'];
  return (
    <div className="App">
      {
      nayoks.map(nayok => <Person namee={nayok}></Person>)
      }

      {
        singers.map(singer => <Person namee={singer.name} job={singer.job} > </Person>)
      }

    <h5>New Component</h5>
    <h5>New Component</h5>

    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
  <h1>{props.namee} khan  </h1>
  <p>job: {props.job}</p>
  </div>
  )
}

export default App;
