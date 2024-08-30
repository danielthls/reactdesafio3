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
        
    );
}