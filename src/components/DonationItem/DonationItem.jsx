import image from '../../assets/team.jpg'

const DonationItem = () => {
    return (
        <div className='rounded-lg bg-[rgba(0,82,255,0.15)]'>
            <img className='rounded-t-lg' src={image} alt="donation  image" />
            <div className='p-4 text-[#0052ff]'>
                <button className='bg-[rgba(0,82,255,0.20)] font-medium text-sm px-2 py-1 rounded-[4px]'>Health</button>
                <h3 className='font-semibold text-xl'>Clean water for children</h3>
            </div>
        </div>
    );
};

export default DonationItem;