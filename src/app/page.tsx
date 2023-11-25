import Keywords from "./components/Keywords"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Keywords />
        </div> 
        <Sidebar />
      </div>
    </main>
  )
}
