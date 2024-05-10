const Register = () => {
  return (
    <>
      <div className="flex justify-between my-20">
        <div className="flex"><div><img src="5.jpg " className="h-16 w-16 rounded-full mx-10"></img></div>
        <div className="flex flex-col">
        <div>alla</div>
        <div>alla</div>
        <div>alla</div>
        </div>
        </div>
        <div className="flex">
        <div> <button className=" bg-slate-700">ggggg</button></div>
        <div><button className=" bg-red-600 mx-20">ggggg</button></div>
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

          <button
            type="submit"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
