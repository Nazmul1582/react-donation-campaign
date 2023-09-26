import swal from "sweetalert";

export const getStoredDonation = () => {
    const storedDonationIds = localStorage.getItem("donations");
    if(storedDonationIds){
        return JSON.parse(storedDonationIds);
    }
    else return []
}

export const saveDonation = id => {
    const storedDonationIds = getStoredDonation();
    const isExist = storedDonationIds.find(donationId => donationId === id)
    if(!isExist){
        storedDonationIds.push(id);
        localStorage.setItem("donations", JSON.stringify(storedDonationIds))
        swal("Good job!", "Your donation successfully done!", "success");
    }else{
        swal("Warning!", "You have already donate it!", "warning");
    }
}