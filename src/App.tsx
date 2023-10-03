import { Navbar } from "@/components"
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setISTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setISTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setISTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}

      />
    </div>
  )
}

export default App
