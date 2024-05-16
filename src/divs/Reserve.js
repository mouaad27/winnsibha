const Reserve = () => {
  return (
    <>
      <div className="">
        <div className="flex mx-20 ">
          <img src="rec.jpg" className="mr-4" />
          <div>
            <h2 className="text-sm text-col font-poppins ">
              Your Reservation Form
            </h2>
          </div>
        </div>

        <div className="bg-[#B3BBBC] mx-20 rounded-lg p-8">
          <div className="flex justify-between mb-36">
            <div className="w-1/2 mr-4 text-left">
              <label
                htmlFor="firstName"
                className="input-name block mb-2 text-col font-bold font-montserrat "
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="eg.Alaa"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="lastName"
                className="input-name block mb-2 text-col font-bold font-montserrat"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="eg.Mohamed"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
          </div>
          <div className="flex justify-between mb-36">
            <div className="w-1/2 mr-4 text-left">
              <label
                htmlFor="wilaya"
                className="input-name block mb-2 text-col  font-bold font-montserrat"
              >
                Wilaya
              </label>
              <input
                id="wilaya"
                type="text"
                placeholder="eg.Bejaia"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="commune"
                className="input-name block mb-2 text-col font-bold   font-montserrat"
              >
                Commune
              </label>
              <input
                id="commune"
                type="text"
                placeholder="eg.Amizour"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
          </div>
          <div className="flex justify-between mb-36">
            <div className="w-1/2 mr-4  text-left">
              <label
                htmlFor="productNumber"
                className="input-name block mb-2 text-col  font-bold font-montserrat"
              >
                N° of product
              </label>
              <input
                id="productNumber"
                type="number"
                placeholder="eg.2"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="phoneNumber"
                className="input-name block mb-2 text-col font-bold font-montserrat"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 bg-no-repeat bg-left pl-8"
                style={{
                  backgroundImage: "url(Phone.jpg)",
                  backgroundPosition: "10px center",
                }}
              />
            </div>
          </div>

          <div className="flex items-center">
            <img src="rec.jpg" className="mr-4" />
            <div>
              <h2 className="text-lg text-sm text-col font-poppins ">
                The owner will contact you as soon as possible
              </h2>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink2 text-col font-bold font-poppins px-10 py-2 border border-col rounded shadow-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      <div className="bg-pink my-20 mx-10 px-8 justify-between ">
        <div className="flex justify-between ">
          <div className="flex items-center  ">
            <img src="yes.png" className="mr-4" />
            <div>
              <h2 className="text-lg font-bold font-poppins text-col">
                Add New Product
              </h2>
            </div>
          </div>

          <div className="flex justify-end space-x-8">
            <div className="">
              <button
                type="submit"
                className="bg-white text-col font-bold font-montserrat px-10 py-2 border border-col rounded shadow-md"
              >
                Cancel
              </button>
            </div>

            <div className=" mx-20">
              <button
                type="submit"
                className="bg-pink2 text-col font-bold font-montserrat px-10 py-2 border border-col rounded shadow-md flex"
              >
                <img src="yes.png" className="mr-3" />
                Add product
              </button>
            </div>
          </div>
        </div>

        <div className="flex  justify-between">
          <div className="bg-[#B3BBBC] mx-20 rounded-lg p-8 my-20 justify-between ">
            <div className="font-bold font-montserrat text-blue ">
              <h3>General Informations</h3>
            </div>
            <div className="p-4 ">
              <label
                htmlFor="productName"
                className=" block mb-2 text-col font-bold font-montserrat"
              >
                Product Name:
              </label>
              <input
                type="text"
                id="productName"
                placeholder="Havic HV G-92 Gamepad"
                name="productName"
                className="p-8 border placeholder-poppins placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="">
              <label
                htmlFor="productDescription"
                className="block mb-2 text-col font-bold font-montserrat"
              >
                Product Description:
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
                className="p-8 placeholder-poppins placeholder-[#B3BBBC] text-base italic"
              ></textarea>
            </div>
          </div>

          <div className="bg-[#B3BBBC] mx-20 rounded-lg p-8 my-20">
            <div className="mt-4">
              <label htmlFor="productImage" className="block mb-1 font-bold">
                Product Image:
              </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                className="border rounded-md py-2 px-3 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
