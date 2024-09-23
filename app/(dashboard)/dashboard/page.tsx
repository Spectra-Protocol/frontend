
import dynamic from 'next/dynamic';
const TestArea = dynamic(() => import('./areas/test-area/TestArea'), { ssr: false });

export default function Home() {
    return (
        <div>
            <TestArea />
        </div>
    )
}