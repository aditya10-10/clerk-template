import { useState } from 'react';
// import './App.css';

function DonorListForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        foodType: "",
        openingTime: "",
        closingTime: "",
        address: "",
    })

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='flex flex-col items-center'>
            <form onSubmit={submitHandler}>
                <h1 className='text-white text-xl font-bold mt-3'>Restaurant/Eatery Donor Registration</h1>
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Yash"
                    value={formData.name}
                    onChange={changeHandler}
                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
                />
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="email">Email</label>
                <br></br>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yashmathur14@gmail.com"
                    value={formData.email}
                    onChange={changeHandler}
                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
                />
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="phoneNumber">Phone Number</label>
                <br></br>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="1234567890"
                    value={formData.phoneNumber}
                    onChange={changeHandler}
                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
                />
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="address">Address</label>
                <br></br>
                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="1234567890"
                    value={formData.address}
                    onChange={changeHandler}
                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
                />
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="foodType">Food Type</label>
                <br></br>
                <select className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mb-2 mt-2" name="foodType" id="foodType" value={formData.foodType} onChange={changeHandler}>
                    <option value="">Select...</option>
                    <option value="veg">Veg</option>
                    <option value="nonVeg">Non Veg</option>
                </select>
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="openingTime">Opening Time</label>
                <br></br>
                <input
                    type="time"
                    name="openingTime"
                    id="openingTime"
                    value={formData.openingTime}
                    onChange={changeHandler}
                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
                />
                <br></br>
                <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="closingTime">Closing Time</label>
                <br></br>
                <input
                    type="time"
                    name="closingTime"
                    id="closingTime"
                    value={formData.closingTime}
                    onChange={changeHandler}
                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-4"
                />
                <br></br>
                <button className='bg-blue-500 text-white font-bold rounded py-2 px-4 '>Save
                </button>
            </form>
        </div>
    );
}

export default DonorListForm;