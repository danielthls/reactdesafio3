import './styles.css'
import { UserDTO } from '../../models/User';

type Props = {
    user: UserDTO;
}

export default function UserDetailCard({ user }: Props) {

    return (
        <section className='de3-container de3-result-container'>
            <div className='de3-result-img-container'><img src={user?.avatar_url} alt="Imagem" /></div>
            <div className='de3-result-info-container'>
                <h3>Informações</h3>
                <div className='de3-result-data-container'>
                    <div className='de3-result-data'><b>Perfil: </b> <a href={user.url}>{user.url}</a></div>
                    <div className='de3-result-data'><b>Seguidores: </b> {user.followers}</div>
                    <div className='de3-result-data'><b>Localidade: </b> {user.location}</div>
                    <div className='de3-result-data'><b>Nome: </b> {user.name}</div>
                </div>
            </div>
        </section >
    )
}