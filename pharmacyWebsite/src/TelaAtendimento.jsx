// TelaAtendimento.js
import React from 'react';
import "./TelaAtendimento.css";

function TelaAtendimento() {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}

function Header() {

    const handleBackClick = () => {
        // Aqui você pode adicionar a lógica para voltar para a tela anterior
        console.log("Botão Voltar clicado");
    };

    return (
        <header>
            <div className="divHeaderCima">
            </div>

            <div className="divHeaderMeio">
                <div className="imagemLogo">
                    <img src="./images/logoFarmacia.png" alt="Logo" className="logo" />
                </div>
                <div className="textoHeaderMeio">Retire a Sua Senha</div>
                <button><i className="fas fa-box"></i> Meus Pedidos</button>
                <button><i className="fas fa-store"></i> Nossas Lojas</button>
                <button onClick={handleBackClick}><i class="fa fa-reply-all" aria-hidden="true"></i> Voltar para tela inicial</button>
            </div>

            <div className="divHeaderBaixo">
                <button className='buttonHeaderBaixo'> <i className='fa-solid fa-bars'></i> Todas as Categorias</button>
                <button className='buttonHeaderBaixo'>Medicamentos</button>
                <button className='buttonHeaderBaixo'>Dormocosméticos</button>
                <button className='buttonHeaderBaixo'>Mamãe e Bebês</button>
                <button className='buttonHeaderBaixo'>Higiene Pessoal</button>
                <button className='buttonHeaderBaixo'>Serviços e Vacinas</button>
                <button className='buttonHeaderBaixo'>Conveniência</button>
                <button className='buttonHeaderBaixo'>Ofertas</button>
            </div>
        </header>
    );
}

function Body() {
    return (
        <main className='mainCima'>
        </main>
    );
}

export default TelaAtendimento;
