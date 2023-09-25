import DonationItem from "../DonationItem/DonationItem";

const DonationList = () => {
  return (
    <section>
      <div className="container mx-auto py-[100px]">
        <div className="grid grid-cols-4 gap-6">
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
            <DonationItem />
        </div>
      </div>
    </section>
  );
};

export default DonationList;
