import React, { useState } from 'react';
import "./TelaAtendimento.css";
import { useNavigate } from 'react-router-dom';

function TelaAtendimento() {
    return (
        <>
            <HeaderAtendimento />
            <BodyAtendimento />
        </>
    );
}

function HeaderAtendimento() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <header className="headerAtendimento">
            <div className="divHeaderCimaAtendimento">
                {/* Conteúdo da parte superior */}
            </div>

            <div className="divHeaderMeioAtendimento">
                <div className="imagemLogoAtendimento">
                    <img src="./images/logoFarmacia.png" alt="LogoAtendimento" className="logoAtendimento" />
                </div>
                <div className="textoHeaderMeioAtendimento">Retire a sua senha abaixo para o seu atendimento</div>
                <button><i className="fas fa-box"></i> Meus Pedidos</button>
                <button><i className="fas fa-store"></i> Nossas Lojas</button>
                <button onClick={handleBackClick}><i className="fa fa-reply-all" aria-hidden="true"></i> Voltar para tela inicial</button>
            </div>

            <div className="divHeaderBaixoAtendimento">
                <button className='buttonHeaderBaixoAtendimento'><i className='fa-solid fa-bars'></i> Todas as Categorias</button>
                <button className='buttonHeaderBaixoAtendimento'>Medicamentos</button>
                <button className='buttonHeaderBaixoAtendimento'>Dormocosméticos</button>
                <button className='buttonHeaderBaixoAtendimento'>Mamãe e Bebês</button>
                <button className='buttonHeaderBaixoAtendimento'>Higiene Pessoal</button>
                <button className='buttonHeaderBaixoAtendimento'>Serviços e Vacinas</button>
                <button className='buttonHeaderBaixoAtendimento'>Conveniência</button>
                <button className='buttonHeaderBaixoAtendimento'>Ofertas</button>
            </div>
        </header>
    );
}

function BodyAtendimento() {
    const [filaSenhas, setFilaSenhas] = useState({ normal: [], preferencial: [] });
    const [senhaAtual, setSenhaAtual] = useState('');

    const gerarSenha = (tipo) => {
        let numero;
        let senha;
        
        do {
            numero = Math.floor(Math.random() * 1000);
            senha = tipo === 'preferencial' ? `P${numero}` : `N${numero}`;
        } while (
            filaSenhas.normal.includes(senha) ||
            filaSenhas.preferencial.includes(senha)
        );

        // Adiciona o número à fila apropriada
        setFilaSenhas(prev => ({
            ...prev,
            [tipo]: [...prev[tipo], senha]
        }));
    };

    const chamarSenha = () => {
        let chamada;
        if (filaSenhas.preferencial.length > 0) {
            chamada = filaSenhas.preferencial.shift();
        } else if (filaSenhas.normal.length > 0) {
            chamada = filaSenhas.normal.shift();
        } else {
            setSenhaAtual('A Fila está Vazia!');
            return;
        }

        setSenhaAtual(`Senha chamada: ${chamada}`);
        setFilaSenhas(prev => ({
            ...prev,
            normal: prev.normal,
            preferencial: prev.preferencial
        }));
    };

    return (
        <main className="mainCimaAtendimento">
            <div className="image-container">
                <img src="./images/imagemSenha.jfif" alt="Imagem Lateral" className="image-lateral" />
            </div>
            <div className="content-container">
                <div className="button-container">
                    <button className="buttonBody" id="gerar-normal" onClick={() => gerarSenha('normal')}>Gerar Senha Normal</button>
                    <button className="buttonBody" id="gerar-preferencial" onClick={() => gerarSenha('preferencial')}>Gerar Senha Preferencial</button>
                    <button className="buttonBody" id="chamar-senha" onClick={chamarSenha}>Chamar Senha</button>
                </div>
                
                <div id="display-senha">{senhaAtual}</div>
                <ul id="lista-normal">
                    {filaSenhas.normal.map((senha, index) => <li key={index}>{senha}</li>)}
                </ul>
                <ul id="lista-preferencial">
                    {filaSenhas.preferencial.map((senha, index) => <li key={index}>{senha}</li>)}
                </ul>
            </div>
        </main>
    );
}

export default TelaAtendimento;
