import numeral from "numeral";
import { useProjectDexAggregator } from "../../../context";
import { MetricCard } from "../components/ui/metric-card";
import { MetricField01 } from "../components/ui/metric-fields";
import clsx from "clsx";

/**
 * General metrics for a project.
 * @field Market Cap (Fully Diluted) - The market capitalization of the project, assuming all tokens are in circulation.
 * @field Market Cap (Circulating) - The market capitalization of the project, based on the number of tokens currently in circulation.
 * @field Token Supply - The total number of tokens in circulation.
 * @field Number of Token Holders - The total number of unique addresses holding the project's token.
 */
export default function GeneralMetric() {
    const project = useProjectDexAggregator();

    const items = [
        {
            title: "MC (FD)",
            description: "Market Cap (Fully Diluted)",
            value: numeral(project.market_cap_fully_diluted).format("$0,0.000a")
        },
        {
            title: "MC (C)",
            description: "Market Cap (Circulating)",
            value: numeral(project.market_cap_circulating).format("$0,0.000a")
        },
        {
            title: "Token Supply",
            value: numeral(project.token_supply).format("0,0a")
        },
        {
            title: "NOTH",
            description: "Number of Token Holders",
            value: numeral(project.num_token_holders).format("0,0a")
        }
    ];
    return (
        <MetricCard
            className={clsx(
                "grid grid-cols-2 grid-rows-2 gap-6 w-full justify-start items-start",
            )}
            classNames={{
                wrapper: "shadow-none"
            }}
        >
            {items.map((item, index) => (
                <MetricField01
                    key={index}
                    className="bg-foreground-100 p-6 rounded-3xl shadow"
                    useTooltip={!!item.description}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                />
            ))}
        </MetricCard>
    )
}