import './styles.css'

type Props = {
    caption: string;
}

export default function Button({ caption }: Props) {
    return (
        <div className='de3-btn-container'>
            <button type='submit' className="de3-btn">{caption}</button>
        </div>
    );
}