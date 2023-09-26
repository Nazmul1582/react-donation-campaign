import { useEffect, useState } from "react";
import { getStoredDonation } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import StoredDonationItem from "../../components/StoredDonationItem/StoredDonationItem";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const donations = useLoaderData();

  useEffect(() => {
    const storedDonationIds = getStoredDonation();
    if (storedDonationIds) {
      const storedDonation = donations.filter((donation) =>
        storedDonationIds.includes(donation.id)
      );
      setDonated(storedDonation);
    }
  }, [donations]);

  return (
    <section>
      <div className="container mx-auto pt-20 pb-10">
        <div className="grid grid-cols-2 gap-6">
          {donated.map((donation) => (
            <StoredDonationItem key={donation.id} donation={donation} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className="btn btn-success capitalize">See All</button>
        </div>
      </div>
    </section>
  );
};

export default Donation;
