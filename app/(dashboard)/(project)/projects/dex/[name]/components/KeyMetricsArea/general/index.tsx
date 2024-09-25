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
            title: "Market Cap (Fully Diluted)",
            value: numeral(project.market_cap_fully_diluted).format("$0,00")
        },
        {
            title: "Market Cap (Circulating)",
            value: numeral(project.market_cap_circulating).format("$0,00")
        },
        {
            title: "Token Supply",
            value: numeral(project.token_supply).format("0,0")
        },
        {
            title: "Number of Token Holders",
            value: numeral(project.num_token_holders).format("0,0")
        }
    ];
    return (
        <MetricCard className={clsx(
            "grid grid-cols-2 grid-rows-2 gap-6",
        )}>
            {items.map((item, index) => (
                <MetricField01
                    key={index}
                    className="bg-foreground-100 p-6 rounded-3xl shadow"
                    title={item.title}
                    value={item.value}
                />
            ))}
        </MetricCard>
    )
}