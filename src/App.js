import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Series/>
    </div>

  );
}
const Header = () => {
  return (
    <div className="Header">
        <a href='#c'>News-</a>
        <a href='#c'>Feed-</a>
        <a href='#c'>Updates-</a>
        <a href='#c'>Messages</a>
    </div>);
}
const Series = () =>{
  return(
    <div className="Series">
    <ul>
      <li>Rick and Morty</li>
      <li>Simpsons</li>
      <li>Griffins</li>
    </ul> 
  </div>
  );
}

export default App;
