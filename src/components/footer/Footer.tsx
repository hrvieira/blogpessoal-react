import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext';
import { ReactNode, useContext } from 'react';

function Footer() {

    let data = new Date().getFullYear();

    const { usuario } = useContext(AuthContext);
    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <>
                <div className="flex justify-center bg-indigo-900 text-white py-6">
                    <div className="container flex flex-col items-center text-center">
                        <p className="text-xl font-bold">
                            Blog Pessoal - Henrique Vieira | Copyright: {data}
                        </p>
                        <p className="text-lg">Acesse nossas redes sociais</p>
                        <div className="flex gap-5 pt-2">
                            <LinkedinLogo
                                size={48}
                                weight="fill"
                                className="hover:cursor-pointer"
                            />
                            <GithubLogo
                                size={48}
                                weight="fill"
                                className="hover:cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return <>{component}</>;

}

export default Footer;