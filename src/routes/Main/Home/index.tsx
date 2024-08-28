import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.css'

export default function Home() {
    return (
        <main className='de3-home'>
            <div className="de3-title">
                <h1>Desafio Github API</h1>
                <h2>DevSuperior - Escola de programação</h2>
            </div>
            <Link to='/'>
                <Button caption='Começar' />
            </Link>

        </main>
    );
}