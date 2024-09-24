"use client";

import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { MetricsTable } from "@/components/dashboard";
import { mockProjectDex } from "@/mock";
import { KeyframesMultipleIcon } from "hugeicons-react";
import { MetricCategory } from "@/types";
import { useProjectDexAggregator } from "../../context";
import numeral from "numeral";

export default function KeyMetricsArea() {
    const project = useProjectDexAggregator();
    
    const categories: MetricCategory[] = [
        {
            id: "1",
            name: "General",
            metrics: [
                { id: "1-1", name: "Total Value Locked", value: numeral(project.total_value_locked).format("0,0.00"), unit: "USD" },
                { id: "1-2", name: "Market Cap (Fully Diluted)", value: numeral(project.market_cap_fully_diluted).format("0,0.00"), unit: "USD" },
                { id: "1-3", name: "Market Cap (Normal)", value: numeral(project.market_cap_normal).format("0,0.00"), unit: "USD" },
                { id: "1-4", name: "Token Supply", value: numeral(project.token_supply).format("0,0"), unit: "Tokens" },
                { id: "1-5", name: "Number of Token Holders", value: numeral(project.num_token_holders).format("0,0"), unit: "Holders" },
            ],
        },
        {
            id: "2",
            name: "Activity",
            metrics: [
                { id: "2-1", name: "Daily Active Users", value: numeral(project.daily_active_users).format("0,0"), unit: "Users" },
                { id: "2-2", name: "Weekly Active Users", value: numeral(project.weekly_active_users).format("0,0"), unit: "Users" },
                { id: "2-3", name: "Monthly Active Users", value: numeral(project.monthly_active_users).format("0,0"), unit: "Users" },
                { id: "2-4", name: "Trading Volume", value: numeral(project.trading_volume).format("0,0.00"), unit: "USD" },
                { id: "2-5", name: "Token Trading Volume (30d)", value: numeral(project.token_trading_volume_30d).format("0,0.00"), unit: "USD" },
            ],
        },
        {
            id: "3",
            name: "Financials",
            metrics: [
                { id: "3-1", name: "Revenue (30d)", value: numeral(project.revenue_30d).format("0,0.00"), unit: "USD" },
                { id: "3-2", name: "Revenue (Annualized)", value: numeral(project.revenue_annualized).format("0,0.00"), unit: "USD" },
                { id: "3-3", name: "Expenses (30d)", value: numeral(project.expenses_30d).format("0,0.00"), unit: "USD" },
                { id: "3-4", name: "Earnings (30d)", value: numeral(project.earnings_30d).format("0,0.00"), unit: "USD" },
                { id: "3-5", name: "Fees (30d)", value: numeral(project.fees_30d).format("0,0.00"), unit: "USD" },
                { id: "3-6", name: "Fees (Annualized)", value: numeral(project.fees_annualized).format("0,0.00"), unit: "USD" },
                { id: "3-7", name: "Token Incentives (30d)", value: numeral(project.token_incentives_30d).format("0,0.00"), unit: "USD" },
                { id: "3-8", name: "Daily Fees", value: numeral(project.daily_fees).format("0,0.00"), unit: "USD" },
            ],
        },
        {
            id: "4",
            name: "Performance",
            metrics: [
                { id: "4-1", name: "All-Time High (ATH)", value: numeral(project.ath).format("0,0.00"), unit: "USD" },
                { id: "4-2", name: "ATH Last", value: numeral(project.ath_last).format("0,0.00"), unit: "USD" },
                { id: "4-3", name: "All-Time Low (ATL)", value: numeral(project.atl).format("0,0.00"), unit: "USD" },
                { id: "4-4", name: "ATL Last", value: numeral(project.atl_last).format("0,0.00"), unit: "USD" },
            ],
        },
    ];

    return (
        <Area>
            <AreaHeader title="Key Metrics" icon={<KeyframesMultipleIcon size={24} />} />
            <AreaMain>
                <MetricsTable categories={categories} />
            </AreaMain>
        </Area>
    )
}