import PropTypes from 'prop-types'

const Banner = ({handleSubmit}) => {
  return (
    <section className="bg-[url('/team.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="pt-20 md:pt-36 pb-36 md:pb-52 w-full h-full flex  justify-center items-center bg-white opacity-95">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-10 leading-10">I Grow By Helping People In Need</h2>
        <form onSubmit={handleSubmit} className="join flex justify-center">
          <input type="text" name="category"
            className="input input-bordered join-item focus:outline-0"
            placeholder="Search Category"
          />
          <button className="btn join-item bg-[#FF444A] hover:bg-[#FF444A] border-[#FF444A] hover:border-[#FF444A] text-white">Search</button>
        </form>
      </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  handleSubmit: PropTypes.func
}

export default Banner;
