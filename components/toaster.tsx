'use client';

import clsx from "clsx";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import './toaster.css';
import 'react-toastify/dist/ReactToastify.css';

const contextClass = {
    success: "bg-gradient-to-r from-success/25 to-default/40",
    error: "bg-gradient-to-r from-danger/25 to-default/40",
    info: "bg-default-50",
    warning: "bg-gradient-to-r from-warning/25 to-default/40",
    default: "bg-gradient-to-r from-default/25 to-default/40",
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
            <h6 className="text-sm text-foreground-900 font-semibold">{title}</h6>
            <p className="text-xs text-foreground-900">{message}</p>
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
                    "relative flex p-4 rounded-2xl justify-between items-center overflow-hidden cursor-pointer",
                    "backdrop-blur-lg"
                )
            }
            newestOnTop={true}
            stacked={true}
        />
    )
}
