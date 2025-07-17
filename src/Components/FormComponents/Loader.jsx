import './Loader.css';
import loader from '../../assets/cool_loading.gif';

const AppLoader = ({ message = '' }) => {
    return (
        <div className='loader-wrapper'>
            <img className='loader' src={loader} alt='loading...' />
            {message.length ? <div>{message}</div> : null}
        </div>

    );
};

export default AppLoader;