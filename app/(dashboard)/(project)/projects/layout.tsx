import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Projects",
    description: "Explore all projects",
}
export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}