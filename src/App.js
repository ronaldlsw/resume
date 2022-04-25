import logo from './logo.svg';
import profilePicture from './images/profile-picture.jpg';

function App() {
  return (
    <div className="max-w-full max-h-full">

      <div className=" bg-gradient-to-r from-red-500 to-orange-200  text-center px-10 py-5  md:py-16 md:px-8  ">

        <div className="grid md:grid-cols-2 grid-cols-1   md:my-8 md:mx-40  bg-gray-300 rounded-2xl">


          {/* column 1 */}
          <div className="px-10 py-10 md:px-20 md:py-8">

            <img className="border-4  rounded-full lg:h-80 lg:w-80 mx-auto md:h-40 md:w-40 h-30 w-30 mb-5" src={profilePicture} ></img>
            <h1 className="text-4xl md:mb-5 font-bold text-gray-800">Ronald Lim Sheng Wei</h1>
            <div class="py-4">
              <div className="border-2 border-gray-500"></div>
            </div>
            <p className="text-center text-xl text-gray-700">Bachelor of Computer Science (Software Engineering) with Honours</p>

          </div>

          {/* column 2 */}
          <div className="px-10 py-10 md:py-8 md:px-20 ">
            <h1 className="text-7xl font-extrabold mb-5 lg:mt-24">Hi There.</h1>
            <h1 className="text-3xl font-bold mb-5">Here's who I am and what I can do.</h1>
            <div className="grid xl:grid-cols-4  grid-cols-1 gap-4">

       
                <button className="font-semibold rounded-full bg-slate-500 py-1 px-4 hover:bg-gradient-to-r from bg-sky-600 to-orange-400">LinkedIn</button>
                <button className="font-semibold rounded-full bg-slate-500 py-1 px-4 hover:bg-gradient-to-r from bg-sky-600 to-orange-400">Github</button>
    
       
                <button className="font-semibold rounded-full bg-slate-500 py-1 px-4 hover:bg-gradient-to-r from bg-sky-600 to-orange-400">Projects</button>
                <button className="font-semibold rounded-full bg-slate-500 py-1 px-4 hover:bg-gradient-to-r from bg-sky-600 to-orange-400">Contact Me</button>
           
            </div>


          </div>

        </div>
      </div>

    </div>

  );
}

export default App;
