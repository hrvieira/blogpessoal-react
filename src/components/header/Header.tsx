import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="bg-indigo-900 flex justify-center ">
            <div className="container grid grid-cols-2 text-white w-11/12">
                <div className="flex items-center py-4">
                    <Link to="/" className="text-2xl font-bold">Blog Pessoal</Link>
                </div>
                <div className="flex text-center justify-end  items-center">
                    <nav>
                        <ul className="flex items-center gap-2 justify-end py-4">
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                Postagens
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                Temas
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                Cadastrar Tema
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                Perfil
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                <Link to="/login">Sair</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
