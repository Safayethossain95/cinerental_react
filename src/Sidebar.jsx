import { getImgrealIcon } from "./cine-utils/getImgUrl"
import { useState } from "react"

const Sidebar = () => {
    const [isPrimary,setisPrimary]=useState("option1")
  return (
    <>
        <aside className="mt-10">
            <ul className="space-y-2">
                <li>
                    <a onClick={()=>setisPrimary("option1")} className={`flex items-center space-x-2 px-5 py-5 rounded-lg text-black ${isPrimary=='option1' ? 'bg-primary' : ''}`} href="#">
                        <img src={getImgrealIcon(`trending.svg`)} alt="" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
          <a
           className={`flex items-center space-x-2 px-5 py-5 rounded-lg text-black ${isPrimary=='option2' ? 'bg-primary' : ''}`}
            href="#"
            onClick={()=>setisPrimary("option2")}
          >
            <img src={getImgrealIcon(`newRelease.svg`)} width="24" height="24" alt="" />
            <span>New Releases</span>
          </a>
        </li>
            </ul>
        </aside>
    </>
  )
}

export default Sidebar