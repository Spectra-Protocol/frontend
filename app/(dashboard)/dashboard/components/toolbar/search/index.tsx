import { Input } from "@nextui-org/react";
import clsx from "clsx";
import { useSearchParam } from "@/components/dashboard/search/context";

interface SearchEngineProps extends React.HTMLAttributes<HTMLElement> {
}

export default function SearchEngine(props: SearchEngineProps) {
    const { searchTerm, setSearchTerm } = useSearchParam();
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='w-full lg:w-fit flex flex-row items-center'>
            <Input
                placeholder="Search anything..."
                radius="md"
                fullWidth
                className={clsx(
                    "w-full lg:min-w-[256px] lg:max-w-[360px]",
                )}
                classNames={{
                    input: "group-data-[has-value=true]:text-foreground-900"
                }}
                onChange={handleSearchChange}
            />
        </div>
    )
}