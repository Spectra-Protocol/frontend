import { SkeletonPortfolioArea } from "../../components/PortfolioArea";
import { SkeletonProfileHeader } from "../../components/Profile";
import { SkeletonTransactionArea } from "../../components/TransactionsArea";

export default function Loading() {
    return (
        <div className="w-full h-full flex flex-col gap-6 overflow-y-auto">
            <SkeletonProfileHeader />
            <SkeletonPortfolioArea />
            <SkeletonTransactionArea />
        </div>
    )
}