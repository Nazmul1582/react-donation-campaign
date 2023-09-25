import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DonationList from "../../components/DonationList/DonationList";

const Home = () => {
    const donations = useLoaderData();
    
    return (
        <>
            <Banner />
            <DonationList donations={donations} />
        </>
    );
};

export default Home;