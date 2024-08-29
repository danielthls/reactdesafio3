
import Button from "../../../components/Button";
import './styles.css'
import { useState } from "react";

export default function Search() {

    const [userInput, setUserInput] = useState<string>('');

    const handleInputSubmit = (value: string) => {
        setUserInput(value);
    }

    return (
        <main>
            <section id="de3-search">
                <div className='de3-container de3-search-container'>
                    <h1>Encontre um perfil Github</h1>

                    <input type="text"
                        placeholder='Usuário Github' />
                    <Button caption='Encontrar' />


                </div>
            </section>

        </main>
    );
}