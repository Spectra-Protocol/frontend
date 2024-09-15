import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { NodeEditIcon } from "hugeicons-react";

export default function TestArea() {
    return (
        <Area className="h-full" id="test-area">
            <AreaHeader title="Test Area" subtitle="This is a test area" icon={<NodeEditIcon size={24} />} />
            <AreaMain>
                Hello World
            </AreaMain>
        </Area>
    )
}