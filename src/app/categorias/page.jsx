import Cartaa from "@/components/Cartaa";
import Link from "next/link";

export default function Ofertas() {
    const imagenes = [
        {
            url: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/07/10122718/vodka-3.jpg",
            nombre: "Vodka",
            href: "/vodka"
        },
        {
            url: "https://www.elchiguirebipolar.net/wp/wp-content/uploads/2018/07/ron1-643x337.jpg",
            nombre: "Ron",
            href: "/ron"
        },
        {
            url: "https://pbs.twimg.com/media/DcN7zq8W0AApA41.jpg",
            nombre: "Bebidas",
            href: "/bebidas"
        },
        {
            url: "https://img.freepik.com/fotos-premium/tequila-vaso_74095-1055.jpg",
            nombre: "Tequila",
            href: "/tequila"
        },
        {
            url: "https://www.losvinos.com.ar/wp-content/uploads/2019/05/preparacion-coctel-caipirina-1320x923.jpg",
            nombre: "Aguardiente",
            href: "/aguardiente"
        },
        {
            url: "https://i.revistapym.com.co/cms/2023/09/28131213/old-par.png?w=480",
            nombre: "Whisky",
            href: "/whisky"
        },
        {
            url: "https://media.istockphoto.com/id/955502004/es/foto/caf%C3%A9-con-sabor-irland%C3%A9s-whisky-crema-verter-en-un-vaso.jpg?s=612x612&w=0&k=20&c=Y5JiFZhBMGA0C5KQLND_sKUVlOilaAMNAB-jquhdHZ8=",
            nombre: "Crema de Whisky",
            href: "/cremawhisky"
        },
        {
            url: "https://media.istockphoto.com/id/1093593288/es/foto/cerca-de-cerveza-verter-en-vaso-barman.jpg?s=612x612&w=0&k=20&c=0B0VJ4XDVdHD3CxlRSgDD7boyoD58u0ZiafdjYyxdrE=",
            nombre: "Cerveza",
            href: "/cerveza"
        },
        {
            url: "https://i2.wp.com/shakeadito.com/wp-content/uploads/2021/09/Shots-Vintage_PORTADA-NOTA-scaled.jpg",
            nombre: "Licor",
            href: "/licor"
        },
        {
            url: "https://i0.wp.com/decoriente.co/wp-content/uploads/2023/03/COPAS.png",
            nombre: "Vino",
            href: "/vino"
        },
    ];

    return (
        <div className="flex flex-wrap justify-evenly gap-1">
            {imagenes.map((img, index) => (
                <Link key={index} href={img.href}>
                    <Cartaa url={img.url} nombre={img.nombre} />
                </Link>
            ))}
        </div>
    );
}
