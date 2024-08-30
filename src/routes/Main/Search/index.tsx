
import Button from "../../../components/Button";
import UserDetailCard from "../../../components/UserDetailCard";
import { UserDTO } from "../../../models/User";
import * as userService from '../../../services/UserService'
import './styles.css'
import { useEffect, useState } from "react";

type SearchData = {
    userName: string;
}

export default function Search() {

    const [userSearch, setUserSearch] = useState<boolean>(false);

    const [searchData, setSearchData] = useState<SearchData>({
        userName: ''
    });

    const [user, setUser] = useState<UserDTO>();

    useEffect

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name
        setSearchData({ ...searchData, [name]: value })
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        setUserSearch(true)
        userService.findByUserName(searchData.userName)
            .then(response => {
                setUser(response.data)
                console.log(response.data)
            })
            .catch(error => {
                setUser(undefined);
                console.log(error.response.data)
            })

    }

    return (
        <main className="de3-search">
            <section id="de3-search-card">
                <div className='de3-container de3-search-container'>
                    <h1>Encontre um perfil Github</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name="userName"
                            value={searchData.userName}
                            type="text"
                            placeholder='Usuário Github'
                            onChange={handleInputChange} />

                        <Button caption='Encontrar' />
                    </form>
                </div>
            </section>

            <section id="de3-result-card">
                {userSearch
                    ? user
                        ? <UserDetailCard user={user} />
                        : <h1>Erro ao buscar o usuário</h1>
                    : <p></p>
                }
            </section>

        </main>
    );
}