import './App.css';
import {useState} from 'react'
import Matrix from './components/matrix/Matrix'
import ControlBar from "./components/controlbar/ControlBar";
import {genGridData} from "./utils/helper";

function App() {
    console.log("App component function call...")
    const [genConfig,setGenConfig] = useState({nbRows:4,nbCols:4});
    const initGenData = genGridData(genConfig.nbRows,genConfig.nbCols);
    const [genData,setGenData] = useState(initGenData)

    const updateGenConfigAndGenerate = function(newGenConfig){
        console.log("updateGenConfigAndGenerate()...")
        setGenConfig(newGenConfig);
        setGenData(genGridData(newGenConfig.nbRows,newGenConfig.nbCols))
    }

    return (
    <div className="App">
        <div id="control-bar-container">
            <ControlBar genConfigData={genConfig} onSubmitGenAction={updateGenConfigAndGenerate}/>
        </div>
        <div id="view-container" className="row">
            <Matrix matrixData={genData}/>
        </div>
    </div>
  );
}

export default App;
