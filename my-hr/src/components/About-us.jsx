export default function About() {
    return (
      <div className="font-sans bg-gray-900 p-6">
        <div className="py-12">
          
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-700">About Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover the latest features, trends, and technology in human resource development and employee management.
            </p>
          </section>
  
          {/* Services Section */}
          <div className=" justify-around grid grid-cols-5 px-6">
            <div className=" justify-between items-center bg-[#87AFB1] py-3 px-2 mx-4 text-center rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">
                <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="10em"
                    width="10em"
                    className="mx-auto mb-2 text-stone-800"
                    >
                    <path d="M341.52 285.56c33.65 0 82.34-6.94 82.34-47 .22-6.74.86-1.82-20.88-96.24-4.62-19.15-8.68-27.84-42.31-44.65-26.09-13.34-82.92-35.37-99.73-35.37-15.66 0-20.2 20.17-38.87 20.17-18 0-31.31-15.06-48.12-15.06-16.14 0-26.66 11-34.78 33.62-27.5 77.55-26.28 74.27-26.12 78.27 0 24.8 97.64 106.11 228.47 106.11M429 254.84c4.65 22 4.65 24.35 4.65 27.25 0 37.66-42.33 58.56-98 58.56-125.74.08-235.91-73.65-235.91-122.33a49.55 49.55 0 014.06-19.72C58.56 200.86 0 208.93 0 260.63c0 84.67 200.63 189 359.49 189 121.79 0 152.51-55.08 152.51-98.58 0-34.21-29.59-73.05-82.93-96.24" />
                </svg>    
                <div className="">
                    <h3 className="text-3xl font-bold text-stone-800">Talent Acquisition</h3>
                    <p className="mt-4 text-stone-900">
                        Recruit the best talents with our streamlined services.
                    </p>
                    <button className="mt-6 bg-stone-800 text-white py-2 px-7 rounded hover:bg-stone-600">
                        Explore
                    </button>
                </div>
              
            </div>


           
          </div>
        </div>
      </div>
    );
  }
  