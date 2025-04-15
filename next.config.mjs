/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SECRET_KEY: process.env.SECRET_KEY,
        ACCESS_KEY: process.env.ACCESS_KEY
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dislicoresqa.vtexassets.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'http2.mlstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'olimpica.vtexassets.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.distrilicores.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'laprincipaldelicores.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'kapikua.com.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.compreloadomicilio.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'web.superboom.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lacaretalicores.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'supertiendascomunal.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.licoresmerakivid.com.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'bevgo.com.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'unionglobal.com.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'licorya.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'vaquitaexpress.com.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'drinkcentral.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'distribucionesimca.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'licoresmedellin.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'vipsboutique.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'gruposotillo.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mercaenlinea.nyc3.digitaloceanspaces.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'megatiendas.vtexassets.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'kyva.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'jumbocolombiaio.vtexassets.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'tiendaestrena.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.elchiguirebipolar.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.losvinos.com.ar',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.diageocms.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i2.wp.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'licoresinmemorial.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'exitocol.vteximg.com.br',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'bodegasantalucia.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.lalicorera.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'licoreslarebaja.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.revistapym.com.co',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;