import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DonationList from "../../components/DonationList/DonationList";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [displayDonation, setDisplayDonation] = useState([]);
  const donations = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.category.value);
  };

  useEffect(() => {
    if (input) {
      const searchedDonation = donations.filter(
        (donation) => donation.category.toLowerCase() === input.toLowerCase()
      );
      setDisplayDonation(searchedDonation);
    }else{
        setDisplayDonation(donations)
    }
  }, [donations, input]);

  return (
    <>
      <Banner handleSubmit={handleSubmit} />
      <DonationList donations={displayDonation} />
    </>
  );
};

export default Home;
