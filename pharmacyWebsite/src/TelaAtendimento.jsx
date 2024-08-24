//Critérios de avaliação da senha da Farmarcia:

// Criou e usou um componente Header - 0,5 pontos ✅ 
// Criou e usou um  componente Body - 0,5 pontos ✅ 
// Criou o componente Logo e usou no Header - 0,5 pontos ✅  
// Acrescentou uma inovação, um diferencial competitivo - 0,5 pontos 
// Respeitou integralmente a paleta de cores do cliente - 0,5 pontos ✅ 
// Criou ao menos um componente para o controlador de senhas (para chamar no body) - 0,5 pontos ✅ 
// Gerou senha Normal e colocou na fila - 1 pontos ✅ 
// Gerou senha Preferencial e colocou na fila - 1 pontos ✅ 
// Atendeu senha Normal e retirou da fila - 2 pontos ✅ 
// Atendeu senha Preferencial e retirou da fila - 2 pontos ✅ 
// Criou uma forma de mostrar ao atendente que a fila não está vazia - 1 pontos ✅ 

import React, { useState } from 'react';
import "./TelaAtendimento.css";
import { useNavigate } from 'react-router-dom';

function TelaAtendimento() {
    return (
        <>
            {/* Renderiza o componente HeaderAtendimento */}
            <HeaderAtendimento />
            {/* Renderiza o componente BodyAtendimento */}
            <BodyAtendimento />
        </>
    );
}

function HeaderAtendimento() {
    const navigate = useNavigate();

    // Função para navegar de volta à página inicial
    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <header className="headerAtendimento">
            <div className="divHeaderCimaAtendimento">
                {/* Conteúdo da parte superior do header */}
            </div>

            <div className="divHeaderMeioAtendimento">
                {/* Logo da farmácia */}
                <div className="imagemLogoAtendimento">
                    <img src="./images/logoFarmacia.png" alt="LogoAtendimento" className="logoAtendimento" />
                </div>
                {/* Texto descritivo no meio do header */}
                <div className="textoHeaderMeioAtendimento">Retire a sua senha abaixo para o seu atendimento</div>
                {/* Botões de navegação */}
                <button><i className="fas fa-box"></i> Meus Pedidos</button>
                <button><i className="fas fa-store"></i> Nossas Lojas</button>
                <button onClick={handleBackClick}><i className="fa fa-reply-all" aria-hidden="true"></i> Voltar para tela inicial</button>
            </div>

            <div className="divHeaderBaixoAtendimento">
                {/* Botões de categorias de produtos */}
                <button className='buttonHeaderBaixoAtendimento'><i className='fa-solid fa-bars'></i> Todas as Categorias</button>
                <button className='buttonHeaderBaixoAtendimento'>Medicamentos</button>
                <button className='buttonHeaderBaixoAtendimento'>Dermocosméticos</button>
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
    // Estado para armazenar as filas de senhas (normais e preferenciais)
    const [filaSenhas, setFilaSenhas] = useState({ normal: [], preferencial: [] });

    // Estado para armazenar a senha atual que foi chamada
    const [senhaAtual, setSenhaAtual] = useState('');

    // Contador para rastrear quantas senhas preferenciais foram chamadas consecutivamente
    const [contadorPreferencial, setContadorPreferencial] = useState(0);

    // Função para gerar uma nova senha (normal ou preferencial)
    const gerarSenha = (tipo) => {
        let numero; // Variável para armazenar o número da senha
        let senha; // Variável para armazenar a senha completa (com prefixo P ou N)

        // Loop para garantir que o número gerado seja único na fila
        do {
            numero = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 999
            senha = tipo === 'preferencial' ? `P${numero}` : `N${numero}`; // Prefixa 'P' para preferencial e 'N' para normal
        } while (
            filaSenhas.normal.includes(senha) ||  // Verifica se a senha já existe na fila normal
            filaSenhas.preferencial.includes(senha)  // Verifica se a senha já existe na fila preferencial
        );

        // Adiciona a nova senha à fila correspondente (normal ou preferencial)
        setFilaSenhas(prev => ({
            ...prev,
            [tipo]: [...prev[tipo], senha]
        }));
    };

    // Função para chamar a próxima senha da fila
    const chamarSenha = () => {
        let chamada; // Variável para armazenar a senha chamada

        // Se o contador de senhas preferenciais for menor que 3 e houver senhas preferenciais na fila
        if (contadorPreferencial < 3 && filaSenhas.preferencial.length > 0) {
            chamada = filaSenhas.preferencial.shift(); // Remove a primeira senha preferencial da fila e atribui a chamada
            setContadorPreferencial(prev => prev + 1); // Incrementa o contador de senhas preferenciais
        } 
        // Se não, se houver senhas normais na fila
        else if (filaSenhas.normal.length > 0) {
            chamada = filaSenhas.normal.shift(); // Remove a primeira senha normal da fila e atribui a chamada
            setContadorPreferencial(0); // Reseta o contador de senhas preferenciais
        } 
        // Se ainda houver senhas preferenciais na fila
        else if (filaSenhas.preferencial.length > 0) {
            chamada = filaSenhas.preferencial.shift(); // Remove a primeira senha preferencial da fila e atribui a chamada
            setContadorPreferencial(1); // Reseta o contador de senhas preferenciais para 1
        } 
        // Se não houver mais senhas na fila
        else {
            setSenhaAtual(<span className="filaVazia">A Fila está Vazia!</span>); // Exibe mensagem indicando que a fila está vazia
            return; // Sai da função
        }

        // Atualiza a senha atual para a senha chamada
        setSenhaAtual(`Senha chamada: ${chamada}`);

        // Atualiza o estado das filas removendo a senha chamada
        setFilaSenhas(prev => ({
            ...prev,
            normal: prev.normal,
            preferencial: prev.preferencial
        }));
    };

    return (
        <main className="mainCimaAtendimento">
            {/* Container para a imagem lateral */}
            <div className="image-container">
                <img src="./images/imagemSenha.jfif" alt="Imagem Lateral" className="image-lateral" />
            </div>
            {/* Container para o conteúdo principal */}
            <div className="content-container">
                <div className="button-container">
                    {/* Botão para gerar senha normal */}
                    <button className="buttonBody" id="gerar-normal" onClick={() => gerarSenha('normal')}>Gerar Senha Normal</button>
                    {/* Botão para gerar senha preferencial */}
                    <button className="buttonBody" id="gerar-preferencial" onClick={() => gerarSenha('preferencial')}>Gerar Senha Preferencial</button>
                    {/* Botão para chamar a próxima senha */}
                    <button className="buttonBody" id="chamar-senha" onClick={chamarSenha}>Chamar Senha</button>
                </div>
                
                {/* Exibição da senha atual */}
                <div id="display-senha">{senhaAtual}</div>
                
                {/* Listagem das senhas normais na fila */}
                <ul id="lista-normal">
                    {filaSenhas.normal.map((senha, index) => <li key={index}>{senha}</li>)}
                </ul>
                
                {/* Listagem das senhas preferenciais na fila */}
                <ul id="lista-preferencial">
                    {filaSenhas.preferencial.map((senha, index) => <li key={index}>{senha}</li>)}
                </ul>
            </div>
        </main>
    );
}




export default TelaAtendimento;
