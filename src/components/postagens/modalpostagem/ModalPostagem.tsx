import FormularioPostagem from "../formpostagem/FormPostagem";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import "./ModalPostagem.css";

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button className="hover:bg-indigo-700 hover:pointer hover:shadow-lg rounded text-white font-bold border-white border-solid border-2 mt-4 py-2 px-4">
                        Nova postagem
                    </button>
                }
                modal
            >
                <div>
                    <FormularioPostagem />
                </div>
            </Popup>
        </>
    );
}

export default ModalPostagem;
