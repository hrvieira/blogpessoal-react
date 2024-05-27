import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import homeLogo from "../../assets/home.png"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid lg:grid-cols-2  grid-cols-1 text-white py-4">
                    <div className="flex flex-col items-center gap-4 justify-center py-4 text-center">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                        <p className="text-xl">
                            Expresse aqui seus pensamentos e opniões
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="hover:bg-indigo-700 hover:pointer hover:shadow-lg rounded text-white font-bold border-white border-solid border-2 mt-4 py-2 px-4">
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={homeLogo}
                            alt="Imagem da Página Home"
                            className="w-2/4 tablet:w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;
