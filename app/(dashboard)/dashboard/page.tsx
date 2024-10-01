
import Header from './components/header';
import Toolbar from './components/toolbar';

export default function Home() {
    return (
        <div className='w-full h-full flex flex-col gap-6 overflow-y-scroll no-scrollbar'>
            <Header />
            <Toolbar />
        </div>
    )
}