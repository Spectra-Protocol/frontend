import React from "react";
import { useProjectDexAggregator } from "../../../context";
import { MetricCard } from "../components/ui/metric-card";
import { title } from "process";
import MetricField02 from "../components/ui/metric-fields";
import { Button } from "@nextui-org/button";

export default function FinancialsMetric() {
    const project = useProjectDexAggregator();
    const [showMore, setShowMore] = React.useState(false);
    const [currentItems, setCurrentItems] = React.useState(2);

    const items= [
        {
            title: "Revenue (30d)",
            description: "Total revenue",
            value: project.revenue_30d,
        },
        {
            title: "Revenue (Annualized)",
            description: "Total revenue (annualized)",
            value: project.revenue_annualized,
        },
        {
            title: "Expenses (30d)",
            description: "Total expenses",
            value: project.expenses_30d,
        },
        {
            title: "Earnings (30d)",
            description: "Total earnings",
            value: project.earnings_30d,
        },
        {
            title: "Fees (30d)",
            description: "Total fees",
            value: project.fees_30d,
        },
        {
            title: "Fees (Annualized)",
            description: "Total fees (annualized)",
            value: project.fees_annualized,
        },
        {
            title: "Daily Fees",
            description: "Total daily fees",
            value: project.daily_fees,
        }
    ]

    const itemsToShow = showMore ? items : items.slice(0, 2);


    return(
        <MetricCard
            name="Financials"
            description="Revenue and expense metrics"
            classNames={{
                wrapper: "p-6 rounded-3xl bg-foreground-100"
            }}
            className="flex flex-col gap-4"
        >
            {itemsToShow.map((item, index) => (
                <MetricField02
                    key={index}
                    name={item.title}
                    description={item.description}
                    value={item.value}
                />
            ))}
            <Button
                onClick={() => setShowMore(!showMore)}
                className="w-full"
                fullWidth
                color="default"
            >
                {showMore ? "Show Less" : "Show More"}
            </Button>
        </MetricCard>
    )
}