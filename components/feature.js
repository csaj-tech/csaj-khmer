export default function FeatureText({ info }) {
    return (
        <div className="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row ">
            <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
                <h2 className="pb-2 text-5xl font-extrabold cursor-pointer lg:text-6xl text-gray-800">{info.title}</h2>
            </div>

            <div className="relative w-full mt-6 overflow-hidden md:mt-1 md:w-9/12">
                <div className="w-full space-y-6" >
                    <h3 className="text-2xl font-bold leading-7 text-gray-600">{info.abstract}</h3>
                    <p className="text-base font-normal leading-none text-gray-700 md:text-lg">{info.detail}</p>
                    <br />
                </div>
            </div>
        </div>
    );
}