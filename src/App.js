import './App.css';
import Matrix from './components/matrix/Matrix'
import ControlBar from "./components/controlbar/ControlBar";

function App() {
    console.log("App component function call...")

    return (
        <div className="App">
            <div id="control-bar-container">
                <ControlBar/>
            </div>
            <div id="view-container" className="row">
                <Matrix/>
            </div>
        </div>
    );
}

export default App;
