export default function LogoWithLink({data}) {
    return (
        <div className="flex items-center justify-center">
            <img src={data.url} alt={data.title} className="block object-contain h-8 lg:h-10"/>
        </div>
    );
}