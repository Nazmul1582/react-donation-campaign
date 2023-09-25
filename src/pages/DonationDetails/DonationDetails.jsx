import image from "../../assets/team.jpg";

const DonationDetails = () => {
  return (
    <section>
      <div className="container mx-auto pt-20 pb-24">
        <div>
          <div className="relative">
            <img className="rounded-lg" src={image} alt="" />
            <div className="bg-black h-32 absolute bottom-0 right-0 left-0 opacity-70 rounded-b-lg"></div>
            <div className="absolute bottom-9">
              <button className="btn btn-primary ml-9">Donate $290</button>
            </div>
          </div>
          <div className="py-14">
            <h2 className="text-4xl font-bold mb-6">Good Education</h2>
            <p>
              There are many things that can be done to ensure that all people
              have access to a good education. Governments can invest in public
              schools, provide financial assistance to students, and make sure
              that all schools have qualified teachers and resources. Families
              can support their children's education by creating a learning
              environment at home and helping them with their schoolwork.
              Teachers can create a positive and supportive learning environment
              for their students and challenge them to reach their full
              potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationDetails;
