import { useState } from 'react';
import Button from '../Button';
import './styles.css'

interface Props {
    onSubmit: (userName: string) => void;
}

export default function SearchCard({ onSubmit }: Props) {

    const [inputValue, setInputValue] = useState<string>('');

    const handleClick = () => {
        onSubmit(inputValue);
    };

    return (
        <div className='de3-container de3-search-container'>
            <h1>Encontre um perfil Github</h1>

            <input type="text"
                placeholder='Usuário Github'
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>Encontrar</button>


        </div>
    );
}