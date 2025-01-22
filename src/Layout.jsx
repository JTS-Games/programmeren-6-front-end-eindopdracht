import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className="mx-auto max-w-screen-2xl">
            <header>
                <nav className="flex gap-4 text-5xl p-4">
                    <Link to={'/'} className="rotate-12 text-green-400">Home </Link>
                    <Link to={'/spots'} className="rotate-12 text-green-400">Stepcharts </Link>
                    <Link to={'/spots/create'} className="rotate-12 text-green-400">create </Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Layout;