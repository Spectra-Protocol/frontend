
import Header from './components/header';
import Toolbar from './components/toolbar';

export default function Home() {
    return (
        <div className='w-full h-full flex flex-col gap-8'>
            <Header />
            <Toolbar />
        </div>
    )
}