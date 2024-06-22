import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


function Navbar() {

    const navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        navigate('/login')
    }

    return (
        <div className="bg-indigo-900 flex justify-center ">
            <div className="container grid max-sm:grid-cols-1 grid-cols-2 text-white w-11/12">
                <div className="flex items-center py-4">
                    <Link to="/" className="text-2xl font-bold">
                        Blog Pessoal
                    </Link>
                </div>
                <div className="flex text-center justify-end  items-center">
                    <nav>
                        <ul className="flex items-center gap-2 justify-end py-4 font-bold">
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                <Link to="/postagens">Postagens</Link>
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                <Link to="/temas">Temas</Link>
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                <Link to="/cadastrartema">Cadastrar Tema</Link>
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                <Link to="/perfil">Perfil</Link>
                            </li>
                            <li className="hover:shadow-liHeader hover:cursor-pointer hover:bg-indigo-700 rounded py-1 px-2 duration-300">
                                <Link to="" onClick={logout}>
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
