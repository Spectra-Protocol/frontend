
import dynamic from 'next/dynamic';
const DynamicTestArea = dynamic(() => import('./areas/test-area/TestArea'), { ssr: false });

export default function Home() {
    return (
        <div>
            <DynamicTestArea />
        </div>
    )
}