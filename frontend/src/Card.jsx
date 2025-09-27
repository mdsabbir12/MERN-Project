import image1 from "./assets/Frame 781.svg"

export default function Card() {
    return (
        <div className="p-4 bg-white rounded-lg shadow max-w-80">
            <img className="" src={image1} alt="officeImage" />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">Your Card Title</p>
            <p className="text-gray-500 text-sm my-3 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
        </div>
    );
};