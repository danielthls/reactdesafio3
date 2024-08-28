import './styles.css'

type Props = {
    caption: string;
}

export default function Button({ caption }: Props) {
    return (
        <div className='de3-btn-container'>
            <div className="de3-btn">{caption}</div>
        </div>
    );
}