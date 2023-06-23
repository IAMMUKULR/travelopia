import Navbar from "./components/Navbar";
import "./CSS/HomePage.css";
// import img1 from "../Travelopia/Carousel-shutterstock_386710591-Civita-di-Bagnoregio.jpg";
// import img2 from "..Travelopia/samuel-chenard-7wI5SECPq9Q-unsplash.jpg";
// import img3 from "..Travelopia/MOORINGS-BAHAMAS-UPTOPMEDIA-141-1-e1640033699282.jpg";
// import img4 from "../Travelopia/Quark-Expeditions_Under-the-Northern-Lights_zodiac_cruise_bernstorff_isfjord_eastgreenland_acaciajohnson__4.jpg";
// import img5 from "../Travelopia/hero-3-e1640030498707.jpg";
// import img6 from "../Travelopia/Santorini.jpg";
// import a from "../"

import img1 from "../src/Travelopia/Carousel-shutterstock_386710591-Civita-di-Bagnoregio.jpg";
import img5 from "../src/Travelopia/hero-3-e1640030498707.jpg";
import img3 from "../src/Travelopia/MOORINGS-BAHAMAS-UPTOPMEDIA-141-1-e1640033699282.jpg";
import img4 from "../src/Travelopia/Quark-Expeditions_Under-the-Northern-Lights_zodiac_cruise_bernstorff_isfjord_eastgreenland_acaciajohnson__4.jpg";
import img2 from "../src/Travelopia/samuel-chenard-7wI5SECPq9Q-unsplash.jpg";
import img6 from "../src/Travelopia/Santorini.jpg";
import { Multiselect } from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import axios from "axios";

const country = [
  { group: "Africa", value: "Botswana" },
  { group: "Africa", value: "Egypt" },
  { group: "Africa", value: " ESwatini (Swaziland)" },
  { group: "Africa", value: "Kenya" },
  { group: "Africa", value: "Lesotho" },
  { group: "Africa", value: "Malawi" },
  { group: "Africa", value: "Mauritius" },
  { group: "Africa", value: "Morocco" },
  { group: "Africa", value: "Mozambique" },
  { group: "Africa", value: "Namibia" },
  { group: "Africa", value: "Rwanda" },
  { group: "Africa", value: "Seychelles" },
  { group: "Africa", value: "South Africa" },
  { group: "Africa", value: "Tanzania" },
  { group: "Africa", value: "Uganda" },
  { group: "Africa", value: "Zambia" },
  { group: "Africa", value: "Zimbabwe" },
  { group: "Asia", value: "Bhutan" },
  { group: "Asia", value: "China" },
  { group: "Asia", value: "Cambodia" },
  { group: "Asia", value: "Indonesia" },
  { group: "Asia", value: "Japan" },
  { group: "Asia", value: "Laos" },
  { group: "Asia", value: "Malaysia" },
  { group: "Asia", value: "Maldives" },
  { group: "Asia", value: "Myanmar" },
  { group: "Asia", value: "Nepal" },
  { group: "Asia", value: "Singapore" },
  { group: "Asia", value: "Sri Lanka" },
  { group: "Asia", value: "Tibet" },
  { group: "Asia", value: "Thailand" },
  { group: "Asia", value: "Vietnam" },
  { group: "Europe", value: "Croatia & Slovenia" },
  { group: "Europe", value: "European Cities" },
  { group: "Europe", value: "France" },
  { group: "Europe", value: "Germany" },
  { group: "Europe", value: "Greece" },
  { group: "Europe", value: "Iceland" },
  { group: "Europe", value: "Italy" },
  { group: "Europe", value: "Portugal" },
  { group: "Europe", value: "Spain" },
  { group: "Europe", value: "Switzerland" },
  { group: "Europe", value: "UK & Ireland" },
  { group: "India", value: "North India" },
  { group: "India", value: "South India" },
  { group: "India", value: "Central & West India" },
  { group: "India", value: "East India" },
  { group: "India", value: "Himalayas" },
  { group: "India", value: "Islands & Beaches" },
  //
  { group: "Central America", value: "Costa Rica" },
  { group: "Central America", value: "Guatemala" },
  { group: "Central America", value: "Mexico" },
  { group: "Central America", value: "Panama" },
  //
  { group: "Middle East", value: "Jordan" },
  { group: "Middle East", value: "Oman" },
  { group: "Middle East", value: "United Arab Emirates" },
  //
  { group: "North America", value: "Alaska" },
  { group: "North America", value: "Hawaii" },
  //
  { group: "Oceania", value: "Australia" },
  { group: "Oceania", value: "Cook Islands" },
  { group: "Oceania", value: "Fiji" },
  { group: "Oceania", value: "French Polynesia" },
  { group: "Oceania", value: "New Zealand" },
  { group: "Oceania", value: "Samoa" },
  //
  { group: "Polar Regions", value: "The Arctic" },
  { group: "Polar Regions", value: "Antarctica" },
  //
  { group: "South America", value: "Argentina" },
  { group: "South America", value: "Bolivia" },
  { group: "South America", value: "Brazil" },
  { group: "South America", value: "Chile" },
  { group: "South America", value: "Colombia" },
  { group: "South America", value: "Ecuador & Galapagos" },
  { group: "South America", value: "Peru" },
  { group: "South America", value: "Uruguay" },
];

const interest = [
  { value: "Adventure & Outdoors" },
  { value: "Heritage & Culture" },
  { value: "Nature & Landscapes" },
  { value: "Wildlife & Safaris" },
  { value: "Wine & Food" },
  { value: "Beaches" },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  const images = [img1, img2, img3, img4, img5];

  const [tripData, setTripData] = useState({
    area: [],
    interests: [],
    no_of_travelers: "",
    budget_per_person: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    tripDuration: "",
    when: "",
    planningStage: "",
  });
  const [phone, setPhone] = useState("");

  function tripHandle(e) {
    const newMessage = { ...tripData };
    newMessage[e.target.id] = e.target.value;
    setTripData(newMessage);

    console.log(tripData);
  }

  const [showModal, setShowModal] = useState(false);

  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedValueInterest, setSelectedValueInterest] = useState([]);

  useEffect(() => {
    console.log(selectedValue, selectedValueInterest);
  }, [selectedValue, selectedValueInterest]);

  const onSelect = (event) => {
    setSelectedValue(event);
  };
  const onRemove = (event) => {
    // console.log(event);
  };

  const onSelectInterest = (event) => {
    setSelectedValueInterest(event);
  };
  const onRemoveInterest = (event) => {
    // console.log(event);
  };

  var area = selectedValue.map(function (obj) {
    return obj.value;
  });

  var inter = selectedValueInterest.map(function (obj) {
    return obj.value;
  });

  function handleShowModel(e, bidId) {
    e.preventDefault();
    setShowModal(true);
  }

  function submitQuery(e) {
    e.preventDefault();
    tripData.phoneNumber = phone;
    tripData.area = area;
    tripData.interests = inter;
    axios
      .post("https://travelopia-zz3k.onrender.com/api/create-trip", tripData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.statusText);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    
    <div className="w-[100dvw]  overflow-hidden">
      <div className="H-01 bg-img ">
        <Navbar />
        <div className="h-[80dvh] flex flex-col justify-center items-center space-y-1 text-white overflow-hidden">
          <p className="H-02">THE WORLD'S LEADING COLLECTION OF</p>
          <h1 className="H-03 ">EXPERIENTIAL TRAVEL BRANDS</h1>
        </div>
      </div>
      <div className="H-04">
        <span className="hero__logo flex justify-center items-center mx-auto  -mt-[3.5rem] ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 219 222"
            className="w-[7rem]"
          >
            {" "}
            <g fill="none" fillRule="evenodd" transform="translate(.512 .13)">
              {" "}
              <ellipse
                cx="109.147"
                cy="110.5"
                fill="#FFF"
                rx="109.147"
                ry="110.5"
              ></ellipse>{" "}
              <path
                fill="#185274"
                fillRule="nonzero"
                d="M83.4908973,196.5 C42.5908973,187.4 12.7908973,158.7 2.39089733,118.4 C-0.909102666,105.4 -0.809102666,85.4 2.79089733,71.9 C10.6908973,41.8 30.1908973,17.9 57.9908973,4.4 C65.5908973,0.7 68.0908973,0 72.8908973,0 C80.2908973,0 84.5908973,2.5 87.3908973,8.4 C89.4908973,12.6 89.4908973,13.9 89.4908973,82.4 L89.4908973,152.2 L76.7908973,151.8 C65.5908973,151.5 63.3908973,151.2 59.0908973,149 C52.3908973,145.6 45.1908973,137.3 40.4908973,127.6 C36.6908973,119.7 32.4908973,105.9 32.4908973,101.3 C32.4908973,99.6 31.8908973,99 30.3908973,99 C28.1908973,99 28.1908973,99.2 30.0908973,143.8 L30.6908973,157 L75.5908973,157 L120.490897,157 L120.490897,85.3 C120.490897,17.8 120.690897,13.3 122.390897,9.5 C123.390897,7.2 125.690897,4.2 127.390897,2.7 C130.190897,0.4 131.490897,0 137.190897,0 C142.890897,0 144.790897,0.6 152.690897,4.5 C180.490897,18.3 199.690897,41.8 207.690897,71.8 C210.590897,82.8 211.190897,101.9 209.090897,113.3 C204.790897,136 193.390897,156.2 176.190897,171.9 C165.390897,181.6 148.090897,190.9 132.990897,195.1 C122.590897,198 93.7908973,198.8 83.4908973,196.5 Z M179.890897,150.3 C180.190897,146.5 180.690897,133.5 181.090897,121.3 C181.590897,102.5 181.490897,99 180.290897,99 C179.290897,99 178.390897,101.8 177.190897,108.1 C174.390897,122.7 165.790897,138.7 157.090897,145.4 C153.090897,148.4 142.990897,153.6 139.190897,154.5 C131.990897,156.3 136.990897,157 157.290897,157 L179.290897,157 L179.890897,150.3 Z"
                transform="matrix(1 0 0 -1 3.997 202.87)"
              ></path>{" "}
            </g>{" "}
          </svg>{" "}
        </span>
      </div>
      <div className="H-05 flex justify-center items-center  mx-auto  text-center mt-[5rem] mb-[5rem] p-4">
        <p className="H-06 ">
          We are travel experts. Our award-winning travel brands create unique
          experiences for our guests around the world. From wildlife encounters
          to polar expeditions, from cultural tours to yachting adventures, our
          business is not just about showing people the world, but designing new
          ways to experience it.
        </p>
      </div>
      {/* Number Container */}
      <div className="H-07 flex justify-center items-center ">
        <ul className="H-08    ">
          <li>
            <div className=" w-[9rem] text-center">
              <div className="text-[#185274] font-extrabold text-xl">150+</div>
              <div className="text-lg">destinations visited every year</div>
            </div>
          </li>
          <li>
            <div className=" w-[9rem] text-center">
              <div className="text-[#185274] font-extrabold text-xl">
                500,000+
              </div>
              <div className="text-lg">guests welcomed each year</div>
            </div>
          </li>
          <li>
            <div className=" w-[9rem] text-center">
              <div className="text-[#185274] font-extrabold text-xl">26</div>
              <div className="text-lg">specialist brands working together</div>
            </div>
          </li>
          <li>
            <div className=" w-[9rem] text-center">
              <div className="text-[#185274] font-extrabold text-xl">2000</div>
              <div className="text-lg">colleagues across the world</div>
            </div>
          </li>
        </ul>
      </div>
      {/* Number Conatiner Ends  */}
      {/*form container */}
      <div className="">
        <div className="text-center flex justify-center mt-[5rem] mb-[2rem] text-4xl font-semibold">
          Welcome To Travelopia
        </div>
        {/* form start*/}
        <div className="-z-10 form-bg p-[2rem] flex justify-center item-center mb-8 ">
          <div className="w-[100%]">
            <form class="backdrop-blur-sm bg-white/10 drop-shadow-2xl rounded p-[2rem] pb-[8rem] ">
              <div class="mb-4">
                <Multiselect
                  selectedValues={setSelectedValue} // Preselected value to persist in dropdown
                  onSelect={onSelect} // Function will trigger on select event
                  onRemove={onRemove} // Function will trigger on remove event
                  options={country}
                  displayValue="value"
                  groupBy="group"
                  showCheckbox={false}
                  className="bg-white rounded-lg "
                  placeholder="Where you want to go ?"
                />
              </div>
              <div class="mb-6">
                <Multiselect
                  selectedValues={setSelectedValueInterest} // Preselected value to persist in dropdown
                  onSelect={onSelectInterest} // Function will trigger on select event
                  onRemove={onRemoveInterest} // Function will trigger on remove event
                  options={interest}
                  displayValue="value"
                  groupBy="group"
                  showCheckbox={false}
                  className="bg-white rounded-lg"
                  placeholder="Your Interests ?"
                />
              </div>
              <div>
                <select
                  className="my-3 text-gray-900  border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  id="no_of_travelers"
                  onChange={(e) => tripHandle(e)}
                >
                  <option selected="true" disabled="disabled">
                    No. of travelers
                  </option>
                  <option value="1 Traveler">1 Traveler</option>
                  <option value="2 Travelers">2 Travelers</option>
                  <option value="3 Travelers">3 Travelers</option>
                  <option value="4 Travelers">4 Travelers</option>
                  <option value="5 Travelers">5 Travelers</option>
                  <option value="6 Travelers">6 Travelers</option>
                  <option value="6+ Travelers">6+ Travelers</option>
                </select>
                <select
                  id="budget_per_person"
                  tabindex="3"
                  onChange={(e) => tripHandle(e)}
                  className="my-3  border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option
                    className=".text-6xl .font-extrabold"
                    selected="true"
                    disabled="disabled"
                  >
                    Budget Per Person
                  </option>
                  <option value="$4000 to $5000">$4000 to $5000</option>
                  <option value="$5000 to $6000">$5000 to $6000</option>
                  <option value="$6000 to $7000">$6000 to $7000</option>
                  <option value="$7000 to $8000">$7000 to $8000</option>
                  <option value="$8000 to $10000">$8000 to $10000</option>
                  <option value="$10000+">$10000+</option>
                </select>
              </div>
              <div className="flex justify-center item-center">
                <button
                  onClick={(e) => handleShowModel(e)}
                  class="block text-white font-bold rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[2rem]"
                  type="button"
                >
                  Create My Trip Now
                </button>
              </div>
            </form>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
                  <div className="relative w-auto pt-[25rem] my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between bg-white p-5 border-b border-solid border-slate-200 rounded-t mt-10">
                        <h3 className="text-3xl font-semibold">
                          Almost There!
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-7 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-6 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}

                      <form class="w-full max-w-lg py-3 px-4 bg-white">
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full  px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Full Name
                            </label>
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              type="text"
                              placeholder="Jane"
                              id="fullName"
                              onChange={(e) => tripHandle(e)}
                              value={tripData.fullName}
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full  px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Email Address
                            </label>
                            <input
                              value={tripData.email}
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              type="email"
                              placeholder="@gmail.com"
                              id="email"
                              onChange={(e) => tripHandle(e)}
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full  px-3 mb-6 md:mb-0 ">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Phone Number
                            </label>
                            <div className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                              <PhoneInput
                                id="phoneNumber"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                                defaultCountry="in"
                                value={phone}
                                onChange={setPhone}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Trip Duration
                            </label>
                            <input
                              id="tripDuration"
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="text"
                              placeholder="Trip Duration"
                              onChange={(e) => tripHandle(e)}
                              value={tripData.tripDuration}
                            />
                          </div>
                          <div class="w-full md:w-1/2 px-3 mb-8 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-state"
                            >
                              When ?
                            </label>
                            <div class="relative">
                              <select
                                value={tripData.when}
                                onChange={(e) => tripHandle(e)}
                                id="when"
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              >
                                <option value="June 2023">June 2023</option>
                                <option value="July 2023">July 2023</option>
                                <option value="August 2024">August 2024</option>
                                <option value="September 2023">
                                  September 2023
                                </option>
                                <option value="October 2023">
                                  October 2023
                                </option>
                                <option value="November 2023">
                                  November 2023
                                </option>
                                <option value="December 2023">
                                  December 2023
                                </option>
                                <option value="January 2024">
                                  January 2024
                                </option>
                                <option value="February 2024">
                                  February 2024
                                </option>
                                <option value="March 2024">March 2024</option>
                                <option value="April 2024">April 2024</option>
                                <option value="May 2024">May 2024</option>
                                <option value="June 2024">June 2024</option>
                                <option value="July 2024">July 2024</option>
                                <option value="August 2024">August 2024</option>
                                <option value="September 2024">
                                  September 2024
                                </option>
                                <option value="October 2024">
                                  October 2024
                                </option>
                                <option value="November 2024">
                                  November 2024
                                </option>
                                <option value="December 2024">
                                  December 2024
                                </option>
                                <option value="January 2025">
                                  January 2025
                                </option>
                                <option value="February 2025">
                                  February 2025
                                </option>
                                <option value="March 2025">March 2025</option>
                                <option value="April 2025">April 2025</option>
                                <option value="May 2025">May 2025</option>
                                <option value="June 2025">June 2025</option>
                                <option value="July 2025">July 2025</option>
                              </select>
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                  class="fill-current h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full  px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-state"
                            >
                              What stage of planning are you in ?
                            </label>
                            <div class="relative">
                              <select
                                value={tripData.planningStage}
                                onChange={(e) => tripHandle(e)}
                                id="planningStage"
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              >
                                <option value="Still dreaming / researching">
                                  Still dreaming / researching
                                </option>
                                <option value="Definately traveling, need destination expertise">
                                  Definately traveling, need destination
                                  expertise
                                </option>
                                <option value="I want to book a trip">
                                  I want to book a trip
                                </option>
                              </select>
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                  class="fill-current h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/*footer*/}
                      <div className="flex bg-white items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={submitQuery}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
        {/* form end */}

        {/* Grid Image */}
        <section className="H-09 p-4 ">
          <div className="H-10 ">
            <div>
              <img src={img1} alt="img1" />
            </div>
            <div className="row-span-2">
              <img src={img2} alt="img2" />
            </div>
            <div>
              <img src={img3} alt="img3" />
            </div>
            <div>
              <img src={img4} alt="img4" />
            </div>
            <div className="col-start-3">
              <img src={img5} alt="img5" />
            </div>
          </div>
        </section>
        {/* Image Courasel */}
        <section className="H-11  justify-center items-center ">
          <div
            id="default-carousel"
            className="relative w-[30rem] mb-[3rem]"
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* Render the current slide */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={image}
                    className="w-[33rem] absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-gray-300"
                  }`}
                  aria-current={index === currentSlide ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                ></button>
              ))}
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handlePrevSlide}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleNextSlide}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* Work With us  */}
      <section>
        <div className="max-w-md mx-auto bg-white p-4  shadow-md overflow-hidden md:max-w-6xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-[30rem] object-cover md:h-full "
                src={img6}
                alt="img6"
              />
            </div>
            <div className="p-8 bg-[#117CA8] text-white space-y-4">
              <div>
                <div className="uppercase tracking-wide text-sm  font-semibold">
                  Work With us
                </div>
                <p className="mt-2 ">
                  Travelopia brings together over 2000 colleagues from around
                  the world, who work together to create industry-leading travel
                  experiences. Join us on our journey forward.
                </p>
              </div>

              <a href="https://globalcareers.travelopia.com/">
                <button
                  href=""
                  className="block mt-1 text-lg leading-tight font-medium  hover:underline bg-black text-white p-5"
                >
                  View Global Vaccencies
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer container --> */}
      <footer className="flex flex-col  justify-center items-center  bg-neutral-100 text-center text-neutral-600  lg:text-left">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="self-center w-[100%] mx-6 py-10 text-center md:text-left">
          <div className="FC  p-4 ">
            {/* <!-- Tailwind Elements section --> */}
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Travelopia
              </h6>
              <p>
                Origin One, 108 High Street, Crawley, West Sussex, RH10 1BD
                United Kingdom
              </p>
            </div>
            {/* <!-- About section --> */}
            <div className="">
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/about-us/"
                  className="text-neutral-600 "
                >
                  About Us
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/our-brands/"
                  className="text-neutral-600 "
                >
                  Our Brands
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/sustainability/"
                  className="text-neutral-600 "
                >
                  Sustainability
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/leadership/"
                  className="text-neutral-600 "
                >
                  Leadership
                </a>
              </p>
              <p>
                <a
                  href="https://www.travelopia.com/our-brands/travelopia-group-functions/"
                  className="text-neutral-600 "
                >
                  Travelopia Group Functions
                </a>
              </p>
              <p>
                <a
                  href="https://www.travelopia.com/reports/"
                  className="text-neutral-600 "
                >
                  Reports
                </a>
              </p>
            </div>
            {/* <!-- Contact Us section --> */}
            <div className="">
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/"
                  className="text-neutral-600 "
                >
                  Contact Us
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/work-with-us/"
                  className="text-neutral-600 "
                >
                  Work with us
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/privacy-policy/"
                  className="text-neutral-600 "
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="https://www.travelopia.com/cookies-policy/"
                  className="text-neutral-600 "
                >
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className=" p-6 flex flex-col justify-center items-center mx-auto text-left max-w-5xl space-y-8">
          <div className="text-neutral-600 ">
            Travelopia Holdings Limited is a registered company in England
            (Company No 5934241). Registered Office: Origin One, 108 High
            Street, Crawley, West Sussex RH10 1BD
          </div>
          <div className="self-start">Copyright © Travelopia 2023</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
