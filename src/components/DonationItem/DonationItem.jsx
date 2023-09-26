import { useNavigate } from 'react-router-dom';
import {PropTypes} from 'prop-types'

const DonationItem = ({donation}) => {
    const {id, title, category, picture, card_bg, category_bg, text_color} = donation;

    const navigate = useNavigate();
    const handleGoToDonationDetails = () => {
        navigate(`donation-details/${id}`)
    }

    return (
        // <div onClick={handleGoToDonationDetails} className={`rounded-lg bg-[${card_bg}]`}>
        <div onClick={handleGoToDonationDetails} className="rounded-lg" style={{backgroundColor: `${card_bg}`}}>
            <img className='rounded-t-lg w-full' src={picture} alt="donation image" />
            {/* <div className={`p-4 text-[${text_color}]`}> */}
            <div className="p-4" style={{color: `${text_color}`}}>
                {/* <button className={`bg-[${category_bg}] font-medium text-sm px-2 py-1 rounded-[4px]`}>{category}</button> */}
                <button className="font-medium text-sm px-2 py-1 rounded-[4px]" style={{backgroundColor: `${category_bg}`}}>{category}</button>
                <h3 className='font-semibold md:text-xl'>{title}</h3>
            </div>
        </div>
    );
};

DonationItem.propTypes = {
    donation: PropTypes.object
  }

export default DonationItem;