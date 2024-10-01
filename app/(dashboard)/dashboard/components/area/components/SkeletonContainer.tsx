import { SkeletonShortcutCard } from "@/components/dashboard/cards/ShortcutCard";

export default function SkeletonContainer() {
    return (
        <>
            {
                Array.from({ length: 32 }).map((_, index) => (
                    <SkeletonShortcutCard key={index} />
                ))
            }
        </>
    )
}