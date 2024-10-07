"use client";

interface ProvidersProps extends React.PropsWithChildren {

}
export default function Providers(props: ProvidersProps) {
    return (
        <>
            {props.children}
        </>
    )
}