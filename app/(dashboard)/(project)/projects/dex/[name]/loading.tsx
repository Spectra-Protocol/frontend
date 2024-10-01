import { LoadingKeyMetricsArea } from "./components/key-metric-area";
import { LoadingProfileHeader } from "./components/profile";
import { LoadingTransactionArea } from "./components/transactions-area";

export default function Loading() {
    return (
        <div className="w-full flex flex-col gap-6">
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