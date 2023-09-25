import { useNavigate } from 'react-router-dom';
import image from '../../assets/team.jpg'

const DonationItem = ({donation}) => {
    const {title, category, picture, card_bg, category_bg, text_color} = donation;

    const navigate = useNavigate();
    const handleGoToDonationDetails = () => {
        navigate(`donation-details/1`)
        // navigate(`donation-details/${id}`)
    }
    console.log(card_bg);
    return (
        // <div onClick={handleGoToDonationDetails} className={`rounded-lg bg-[${card_bg}]`}>
        <div onClick={handleGoToDonationDetails} className="rounded-lg" style={{backgroundColor: `${card_bg}`}}>
            <img className='rounded-t-lg' src={picture} alt="donation image" />
            {/* <div className={`p-4 text-[${text_color}]`}> */}
            <div className="p-4" style={{color: `${text_color}`}}>
                {/* <button className={`bg-[${category_bg}] font-medium text-sm px-2 py-1 rounded-[4px]`}>{category}</button> */}
                <button className="font-medium text-sm px-2 py-1 rounded-[4px]" style={{backgroundColor: `${category_bg}`}}>{category}</button>
                <h3 className='font-semibold text-xl'>{title}</h3>
            </div>
        </div>
    );
};

export default DonationItem;