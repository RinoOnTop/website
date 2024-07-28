import Head from 'next/head';
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Layout({
    children,
    title = '',
}) {
    title = `${title && `${title} —`} Rinoo`
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>{title}</title>
                <meta name="description" content="A Sysadmin and tech enthusiast from Egypt." />
                <meta name="keywords" content="HTML,CSS,JavaScript,Python,SQL,MySQL,PostgreSQL,MongoDB,Redis,Flask,Falcon,Tailwind,TailwindCSS,Bootstrap" />
                <meta name="author" content="Ahmed Amr" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={`Ahmed B.${title && ` - ${title}`}`} />
                <meta property="og:description" content="A Sysadmin and tech enthusiast from Egypt" />
                <meta property="og:image" content="" />
                <meta name="theme-color" content="#F43F5E" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Ahmed B.${title && ` - ${title}`}`} />
                <meta name="twitter:description" content="A Sysadmin and tech enthusiast from Egypt" />
                <meta name="twitter:image" content="" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}