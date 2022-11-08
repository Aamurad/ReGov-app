import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(props: { children: any }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="h-[90vh]">{props.children}</main>
            <Footer />
        </div>
    )
}
