'use client';

import clsx from "clsx";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import './toaster.css';
import 'react-toastify/dist/ReactToastify.css';

const contextClass = {
    success: "bg-forground-100 shadow-lg shadow-success",
    error: "bg-foreground-100 shadow-lg shadow-danger",
    info: "bg-forground-100 shadow-lg",
    warning: "bg-foreground-100 shadow-lg shadow-warning",
    default: "bg-foreground-100 shadow-lg",
    dark: "bg-gray-600",
};

export function MyToastContent({
    title,
    message,
}: {
    title?: string,
    message: string,
}) {
    return (
        <div className="flex flex-col items-start justify-center">
            <h6 className="text-sm text-foreground font-semibold">{title}</h6>
            <p className="text-xs text-foreground">{message}</p>
        </div>
    )
}
export function Toaster() {
    const { theme } = useTheme();

    return (
        <ToastContainer
            theme={theme === 'dark' ? 'dark' : 'light'}
            toastClassName={(context) =>
                contextClass[context?.type || "default"] +
                clsx(
                    "relative flex p-4 rounded-2xl justify-between items-center overflow-hidden cursor-pointer text-foreground-700",
                    "backdrop-blur-lg"
                )
            }
            newestOnTop={true}
            stacked={true}
        />
    )
}
