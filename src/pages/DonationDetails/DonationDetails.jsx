import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../localStorage/localStorage";

const DonationDetails = () => {
  const donations = useLoaderData()
  let {id} = useParams();
  id = parseInt(id)
  const donation = donations.find(donation => donation.id === id)
  const {picture, title, description, price, text_color} = donation

  const buttonStyle = {
    backgroundColor: text_color,
    borderColor: text_color
  }

  const handleDonate = (id) => {
    saveDonation(id)
  }

  return (
    <section>
      <div className="container mx-auto pt-20 pb-24">
        <div>
          <div className="relative">
            <img className="rounded-lg w-full" src={picture} alt="" />
            <div className="bg-black h-24 md:h-32 absolute bottom-0 right-0 left-0 opacity-70 rounded-b-lg"></div>
            <div className="absolute bottom-6 md:bottom-9">
              <button onClick={() => handleDonate(id)} className={`btn ml-5 md:ml-9 text-white capitalize hover:bg-[${text_color}] hover:border-[${text_color}]`} style={buttonStyle}>{`Donate $${price}`}</button>
            </div>
          </div>
          <div className="py-14">
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationDetails;
