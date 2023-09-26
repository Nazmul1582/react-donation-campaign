import { useEffect, useState } from "react";
import { getStoredDonation } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import StoredDonationItem from "../../components/StoredDonationItem/StoredDonationItem";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const donations = useLoaderData();

  useEffect(() => {
    const storedDonationIds = getStoredDonation();
    if (donations) {
      const storedDonation = donations.filter((donation) =>
        storedDonationIds.includes(donation.id)
      );
      setDonated(storedDonation);
    }
  }, [donations]);

  return (
    <section>
      <div className="container mx-auto pt-20 pb-10">
        {!donated.length && <p className="font-bold text-2xl text-center">There are not any donation here.</p>}
        <div className="grid grid-cols-2 gap-6">
          {seeAll ? donated.map((donation) => (
            <StoredDonationItem key={donation.id} donation={donation} />
          )) : donated.slice(0, 4).map((donation) => (
            <StoredDonationItem key={donation.id} donation={donation} />
          )) }
        </div>
        <div className={`flex justify-center my-10 ${donated.length <= 4 ? "hidden" : "" }`}>
          <button className="btn btn-success capitalize" onClick={() => setSeeAll(!seeAll)}>{seeAll ? "See Less" : "See All"}</button>
        </div>
      </div>
    </section>
  );
};

export default Donation;
