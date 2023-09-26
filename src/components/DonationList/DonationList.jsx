import DonationItem from "../DonationItem/DonationItem";
import PropTypes from 'prop-types'

const DonationList = ({donations}) => {

  return (
    <section>
      <div className="container mx-auto py-[100px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            donations.map(donation => <DonationItem key={donation.id} donation={donation} />)
          }
        </div>
      </div>
    </section>
  );
};

DonationList.propTypes = {
  donations: PropTypes.array
}

export default DonationList;
