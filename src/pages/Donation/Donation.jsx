import image from "../../assets/team.jpg";

const Donation = () => {
  return (
    <section>
      <div className="container mx-auto pt-20 pb-10">
        <div className="grid grid-cols-2 gap-6">

          <div className="flex rounded-lg bg-[rgba(0,82,255,0.15)]">
            <img className="rounded-s-lg w-52" src={image} alt="donation  image" />
            <div className="p-6 text-[#0052ff]">
              <button className="bg-[rgba(0,82,255,0.20)] font-medium text-sm px-2 py-1 rounded-[4px]">
                Health
              </button>
              <h3 className="font-semibold text-xl my-2 text-[#0b0b0b]">
                Clean water for children
              </h3>
              <p className="text-[#0052ff]">$290.00</p>
              <button className="btn btn-primary mt-5">View Details</button>
            </div>
          </div>

          <div className="flex rounded-lg bg-[rgba(0,82,255,0.15)]">
            <img className="rounded-s-lg w-52" src={image} alt="donation  image" />
            <div className="p-6 text-[#0052ff]">
              <button className="bg-[rgba(0,82,255,0.20)] font-medium text-sm px-2 py-1 rounded-[4px]">
                Health
              </button>
              <h3 className="font-semibold text-xl my-2 text-[#0b0b0b]">
                Clean water for children
              </h3>
              <p className="text-[#0052ff]">$290.00</p>
              <button className="btn btn-primary mt-5">View Details</button>
            </div>
          </div>

          <div className="flex rounded-lg bg-[rgba(0,82,255,0.15)]">
            <img className="rounded-s-lg w-52" src={image} alt="donation  image" />
            <div className="p-6 text-[#0052ff]">
              <button className="bg-[rgba(0,82,255,0.20)] font-medium text-sm px-2 py-1 rounded-[4px]">
                Health
              </button>
              <h3 className="font-semibold text-xl my-2 text-[#0b0b0b]">
                Clean water for children
              </h3>
              <p className="text-[#0052ff]">$290.00</p>
              <button className="btn btn-primary mt-5">View Details</button>
            </div>
          </div>

        </div>
        <button className="btn btn-success">See All</button>
      </div>
    </section>
  );
};

export default Donation;
