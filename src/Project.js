import { ReactComponent as AndroidLogo } from './icons/android.svg';
import upmsgif from './images/upms.gif'

import { ReactComponent as PHPLogo } from './icons/php-brands.svg';
import { ReactComponent as BootstrapLogo } from './icons/bootstrap-brands.svg'
import { ReactComponent as HTML5Logo } from './icons/html5-brands.svg'
import { ReactComponent as LaravelLogo } from './icons/laravel-brands.svg'
function Project() {
    return (
        <div>
      <section id="project_details">
          
            <div className="grid grid-cols-2 mx-40 my-40">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/o8RKMNZ5Q-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="w-12 fill-green-500 mx-auto mt-5">
                        {/* <AndroidLogo /> */}
                    </div>
                </div>
                <div className="text-center align-top my-auto pl-40">
                    <h2 className="font-bold  text-5xl ">Fitnergy</h2>


                    <p className="mt-5 font-light">Designed and developed with @nickiyui99 @yukine5627 @YiWee @Narresh12</p>
                    <p className="mt-5 font-regular text-justify">Fitnergy is a mobile fitness application dedicated towards young working adults that have an interest of starting a fitness routine. It is developed on the native android platform.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 mx-40 my-40">

                <div className="mx-auto">

                    <img src={upmsgif} />

                    <div className="fill-black mt-5 grid grid-cols-4 place-items-center ">
                        <LaravelLogo className='fill-red-600 w-11' /><HTML5Logo className='fill-orange-600 w-9' /><BootstrapLogo className='fill-purple-500 w-12' /><PHPLogo className='fill-blue-600 w-12' />
                    </div>
                </div>


                <div className="text-center align-middle my-auto pl-40">
                    <h2 className="font-bold  text-5xl ">University Parcel Management System</h2>


                    <p className="mt-5 font-light">Designed and developed with @Nicholas @CheeKin @YiWee @Narresh</p>
                    <p className="mt-5 font-regular text-justify">UPMS is an parcel management system created to digitize the university's current parcel collection process. It is developed with the Laravel framework, Bootstrap, and MySQL database.</p>
                </div>


            </div>
            </section>
        </div>







    )
}
export default Project;