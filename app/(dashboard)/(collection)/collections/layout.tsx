import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Collections",
    description: "Explore all collections",
}

export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}