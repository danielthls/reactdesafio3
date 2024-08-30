import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header className='de3-header'>
            <Link to='/'>
                <h2>Github API</h2>
            </Link>
        </header>
    )
}