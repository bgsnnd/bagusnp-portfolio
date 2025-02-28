import Link from "next/link"
import { Button } from "./ui/button"


// component
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className=" container mx-auto flex justify-between items-center ">
            {/* LOGO */}
            <Link href="/">
                <h1 className="text-4xl font-semibold ">
                    Bagus<span className="text-accent">.</span>
                </h1>
            </Link>
            
            
            {/* DESKTOP NAVBAR */}
            <div className=" hidden xl:flex items-center gap-8 ">
              <Navbar/>
              <Link href="/contact">
                <Button>Hire Me</Button>
              </Link>
            </div>    


            {/* MOBILE NAVBAR */}
            <div className="xl:hidden"> Mobile Navbar
            </div>
        </div>

    
        
    </header>
  )
}

export default Header