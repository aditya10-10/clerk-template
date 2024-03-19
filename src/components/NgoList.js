import { useState } from 'react';


function App() {
  const [formData,setFormData] = useState({
    ngoName: "",
    phoneNo: "",
    email: "",
    address: "India",
  })

  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({...prev,[name]: type === "checkbox" ? checked : value})
  )
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    
    <div className='flex flex-col items-center'>
    <br></br>
     <form onSubmit={submitHandler}>

      <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="ngoName">NGO Name</label>
      <br></br>
      <input 
      type="text" 
      name="ngoName"
      id="ngoName"
      placeholder="Ngo Name"
      value={formData.ngoName}
      onChange={changeHandler}
      className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
      />

      <br></br>
      <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="phoneNo">Phone No</label>
      <br></br>
      <input 
      type="number" 
      name="phoneNo"
      id="phoneNo"
      placeholder="Phone No"
      value={formData.phoneNo}
      onChange={changeHandler}
      className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" 
      />

      <br></br>
      <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left" htmlFor="email">Email</label>
      <br></br>
      <input 
      type="text" 
      name="email"
      id="email"
      placeholder="yashmathur14@gmail.com"
      value={formData.email}
      onChange={changeHandler}
      className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
      />

      <br></br>
      <label className="font-semibold text-sm font-Poppins tracking-wide sm:text-base whitespace-nowrap w-full text-white mt-2 mb-4 text-left"  htmlFor='address'>Address(Google Maps Url)</label>
      <br></br>
      <input
      type="text"
      name="address"
      id='address'
      value={formData.address}
      onChange={changeHandler}
      className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  bg-[#f7f3f5] focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2"
      />
        <br></br>
        <br></br>
      <button className='bg-blue-500 text-white font-bold rounded py-2 px-4 '>Save
      </button>

     </form>
    </div>
  );
}

export default App;