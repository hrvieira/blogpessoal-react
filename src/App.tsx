import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/lista-temas/ListaTemas";
import FormularioTema from "./components/temas/formulario-tema/FormularioTema";
import DeletarTema from "./components/temas/deletar-tema/DeletarTema";

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route path="/cadastroTema" element={<FormularioTema />} />
                            <Route path="/editarTema/:id" element={<FormularioTema />} />
                            <Route path="/deletarTema/:id" element={<DeletarTema />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
