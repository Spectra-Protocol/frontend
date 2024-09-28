import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

interface SearchParamContextProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchParamContext = createContext<SearchParamContextProps | undefined>(undefined);

export const SearchParamProvider = ({ children }: { children: ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    React.useEffect(() => {
        router.push(`${pathname}?${createQueryString('search', searchTerm)}`)
    }, [searchTerm])

    return (
        <SearchParamContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchParamContext.Provider>
    );
};

export const useSearchParam = () => {
    const context = useContext(SearchParamContext);
    if (context === undefined) {
        throw new Error('useSearchParam must be used within a SearchParamProvider');
    }
    return context;
};