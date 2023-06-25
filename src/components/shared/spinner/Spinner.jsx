
import Loader from '../../../assets/krysto_loader.svg'
import './spinner.css'
function Spinner() {
  return (
    <div className='loadingSpinnerContainer container'>
        <img className='loadingSpinner' src={Loader} alt="" />
    </div>
  )
}

export default Spinner