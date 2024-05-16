import { RiAccountPinCircleLine } from "react-icons/ri";

const Register = () => {
  return (
    <>
      <div className="text-left ml-20 flex  ">
        <div>
          <RiAccountPinCircleLine  className="w-12 h-12 text-[#23414B] mr-4"/>
        </div>
        <div>
          <h2 class="text-4xl font-bold mb-4 text-[#23414B]">
            Manage My Account
          </h2>
        </div>
      </div>
      <div className="flex justify-between my-20">
        <div className="flex">
          <div className=" ">
            <img
              src="5.jpg "
              className=" h-20 w-20 rounded-full mx-10 border ml-20 border-white border-solid border-[4px]"
            ></img>
          </div>
          <div className="flex flex-col text-left">
            <div className=" font-bold">Alaa Mohamed</div>
            <div className=" text-xl">Product Design</div>
            <div>Eastern European Time (EET), Cairo UTC +3</div>
          </div>
        </div>
        <div className="flex">
          <div>
            {" "}
            <button className=" bg-slate-700 rounded-2xl h-12 w-52 border border-white border-solid border-[4px] font-bold text-white">
              Upload New Photo{" "}
            </button>
          </div>
          <div>
            <button className=" bg-white mx-20 rounded-2xl h-12 w-52 ml-36 border border-[#23414B] border-solid border-[4px] font-bold text-[#23414B]">
              Delete
            </button>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mb-4 ">User Registration Form</h2>
      <div className="flex justify-center">
        <div className=" h-full w-11/12">
          <div className="flex justify-between">
            <div class="mb-4 w-5/12 ml-6 ">
              <label
                for="firstName"
                class=" text-left block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-5/6 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="mb-4 w-5/12 mr-6">
              <label
                for="lastName"
                class="text-left block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-5/6 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="mb-4 mx-6 h-12">
            <label
              for="userName"
              class="text-left block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-4/5 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <hr className="my-20"></hr>

          <div className="flex justify-between">
            <div class="mb-4 w-5/12 ml-6">
              <label
                for="email"
                class="text-left block text-sm font-medium text-gray-700"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-5/6 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="mb-4 w-5/12 mr-6">
              <label
                for="phone"
                class="text-left block text-sm font-medium text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-5/6 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="mb-4 h-12 mx-6">
            <label
              for="location"
              class="text-left block text-sm font-medium text-gray-700"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-4/5 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <hr className="my-20"></hr>

          <div className="flex justify-between">
            <div class="mb-4 w-5/12 ml-6">
              <label
                for="currentPassword"
                class="text-left block text-sm font-medium text-gray-700"
              >
                Current Password:
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-5/6 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="mb-4 w-5/12 mr-6">
              <label
                for="newPassword"
                class="text-left block text-sm font-medium text-gray-700"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-5/6 shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="mb-4 h-12 mx-6">
            <label
              for="confirmPassword"
              class="text-left block text-sm font-medium text-gray-700"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-4/5 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end my-20 mr-12">
            <div className="flex">
              <div>
                {" "}
                <button className=" bg-slate-700 rounded-2xl h-12 w-52 border border-white border-solid border-[3px] font-bold text-white">
                  Cancel{" "}
                </button>
              </div>
              <div>
                <button className=" bg-white mx-10 rounded-2xl h-12 w-52 ml-20 border border-[#23414B] border-solid border-[3px] font-bold text-[#23414B]">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
