import dynamic from "next/dynamic"

const CollectionsContainer = dynamic(() => import("../collections"))
const ProjectsContainer = dynamic(() => import("../projects"))

export default function All() {
    return (
        <div className="flex flex-col gap-6">
             <CollectionsContainer />
             <ProjectsContainer/>
        </div>
    )
}