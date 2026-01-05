import "./ControlBar.css"
import { useSelector, useDispatch } from "react-redux";
import { updateNbRowsAndCols } from "../../redux/ConfigSlice";
import { generateByGenConfig } from "../../redux/MatrixSlice";

function ControlBar({onSubmitGenAction}){
    // config in state.config being the name used for the reducer in store.js
    const genConfigData = useSelector(state=>state.config);
    const dispatch = useDispatch();

    const handleOnSubmit = function(event){
        // Prevent the browser from reloading the page
        event.preventDefault();

        // get the form data and transform it in JSON format
        const form = event.target;
        const formData = new FormData(form);
        const formJSON = Object.fromEntries(formData.entries());
        // onSubmitGenAction(formJSON)
        const genConfig = {
            nbRows: parseInt(formJSON.nbRows),
            nbCols: parseInt(formJSON.nbCols)
        } 
        dispatch(updateNbRowsAndCols(genConfig));
        dispatch(generateByGenConfig(genConfig))
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Nb rows
                <input name="nbRows" type="number" defaultValue = "4"/>
            </label>

            <label>
                Nb columns
                <input name="nbCols" type="number" defaultValue = "4"/>
            </label>
            <button type="submit">Generate</button><br/>
            NbRows: {genConfigData.nbRows} NbCols: {genConfigData.nbCols}
        </form>
    );
}
export default ControlBar;