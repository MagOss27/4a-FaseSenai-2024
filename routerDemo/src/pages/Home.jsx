import {useContext} from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../contexts/GlobalContext';

function Home() {

    const {usuarioLogado} = useContext(GlobalContext)

    return (
        <div>
            <Navbar/>
            {usuarioLogado}
            <h1>Home do Site</h1>

            <p>Home Home Home Home Home Home Home Home Home Home Home</p>
        </div>
    )
}

export default Home;
