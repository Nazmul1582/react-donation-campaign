import PropTypes from 'prop-types'

const StoredDonationItem = ({ donation }) => {
    const {picture, category, title, price, card_bg, category_bg, text_color} = donation;
  return (
      // <div className={`flex rounded-lg bg-[${card_bg}]`}>
        <div className="flex rounded-lg" style={{backgroundColor: `${card_bg}`}}>
      <img className="rounded-s-lg w-52 object-cover" src={picture} alt="donation  image" />
      <div className="p-6" style={{color: `${text_color}`}}>
        <button className="font-medium text-sm px-2 py-1 rounded-[4px]" style={{backgroundColor: `${category_bg}`}}>
          {category}
        </button>
        <h3 className="font-semibold text-xl my-2 text-[#0b0b0b]">{title}</h3>
        <p className="font-semibold" style={{color: `${text_color}`}}>${price}.00</p>
        <button className="btn text-white capitalize mt-5" style={{backgroundColor: `${text_color}`, borderColor: `${text_color}`}}>View Details</button>
      </div>
    </div>
  );
};

StoredDonationItem.propTypes = {
    donation: PropTypes.object.isRequired
}

export default StoredDonationItem;
