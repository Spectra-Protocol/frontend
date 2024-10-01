
import { LinearContainer } from '@/components/ui/container';
import Header from './components/header';
import Toolbar from './components/toolbar';
import TabsEngine from './components/toolbar/tabs';
import Providers from './providers';

export default function Home() {
    return (
        <Providers>
            <LinearContainer direction='column' space="lg" className='w-full h-full overflow-y-scroll no-scrollbar'>
                <Header />
                <Toolbar />
                <TabsEngine />
            </LinearContainer>
        </Providers>
    )
}