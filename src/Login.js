import './Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logoPrin.png';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');

        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.previousElementSibling.style.transform = 'translateY(0)';
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.previousElementSibling.style.transform = 'translateY(40px)';
                }
            });
        });

        // Limpeza dos eventos ao desmontar o componente
        return () => {
            inputs.forEach(input => {
                input.removeEventListener('focus', () => { });
                input.removeEventListener('blur', () => { });
            });
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
    
        // Primeiro, verificamos as condições do login normal (e-mail e senha de 14 dígitos)
        if (email.endsWith('@escolar.ifrn.edu.br') && password.length === 14) {
            // Se as condições forem atendidas, navega para a página Home
            navigate('/Home');
        } 
        // Caso contrário, verificamos se é o login admin (e-mail e senha específicos)
        else if (email === "admin@escolar.ifrn.edu.br" && password === "IFRN2024") {
            // Se as condições do admin forem atendidas, navega para a página Home
            navigate('/admin');
        } 
        else {
            // Se nenhuma das condições acima for atendida, exibe uma mensagem de erro
            setError('E-mail ou senha incorretos.');
        }
    };
    

    return (
        <div className="LoginCentral">
            <div className="Login">
                <div className='ImagemLogin'>
                    <img src={Logo} alt='' />
                </div>
                <h1>Fast Agenda</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="emailCentro">
                        <p>Login</p>
                        <input
                            type="email"
                            className="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="senhaCentro">
                        <p>Senha</p>
                        <input
                            type="password"
                            className="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className='submitLogin'>
                        <input type="submit" className="Submit" value="Entrar" />
                    </div>
                </form>
            </div>
        </div>
    );
}
