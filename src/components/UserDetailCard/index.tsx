import './styles.css'
import { useEffect, useState } from 'react';
import { UserDTO } from '../../models/User';
import * as userService from '../../services/UserService'

type Props = {
    user: UserDTO;
}

export default function UserDetailCard({ user }: Props) {

    return (
        <section className='de3-container'>
            <div className='de3-result-img-container'><img src={user?.avatar_url} alt="Imagem" /></div>
            <div className='de3-result-info-conatiner'>
                <div></div>
            </div>
        </section>
    )
}