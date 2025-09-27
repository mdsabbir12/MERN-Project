import bodyimg from "../assets/Rectangle 161124259.png"
import elics from "../assets/Ellipse 23.png"
import rac from "../assets/rac2.png"
export default function Example() {
    
    return (
        <>
        
            <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
                
                

                
                <div className="text-sm text-slate-600 max-w-lg w-[100%]">
                    <button
                        className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-white py-3 px-8 rounded-full text-green-700 border-2">
                        <span>Business Owners</span>
                        
                    </button>
                    <h1 className="mt-10 text-[24px] font-semibold text-black-bold">Assign jobs, monitor performance, and streamline operations.</h1>
                    
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you're launching a SaaS app, landing page or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                    
                </div>
                <div className="ml-[200px]" style={{
                                backgroundImage: `url(${elics})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '500px',
                                width: '100%',

                            }}>
                                
                    <div className="relative  rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl "
                        src={rac}
                        alt="" />
                    
                    </div>
                </div>
            </section>
        </>
    );
};