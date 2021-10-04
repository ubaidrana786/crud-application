import Notecontaxt from "./Notecontaxt";
const Notestate = (props) => {
    const state = {
        name: "Ubaid ",
        class: "10"
    }
    return (
        <Notecontaxt.Provider value={state} >
            {props.children}
        </Notecontaxt.Provider>
    )
}
export default Notestate;