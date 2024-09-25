import { LoadingKeyMetricsArea } from "./components/KeyMetricsArea";
import { LoadingProfileHeader } from "./components/Profile";
import { LoadingTransactionArea } from "./components/transactions-area";

export default function Loading() {
    return (
        <div className="w-full flex flex-col gap-8">
            <LoadingProfileHeader />
            <div className="flex flex-row gap-4 w-full">
                <div className="flex-grow-[3] h-full">
                    <LoadingTransactionArea />
                </div>
                <div className="flex-grow-[1] h-full">
                    <LoadingKeyMetricsArea />
                </div>
            </div>
        </div>
    );
}