import { DexProjectResponse, KeyMetric, MetricCategory, Portifolio, Profiler, ProfilerTagType, Project, SwapTransaction, Token, Transaction, TransactionTagType } from "@/types";
import { faker } from "@faker-js/faker";


export const mockProject = {
    id: faker.number.int(),
    name: faker.company.name(),
    category: 'dex',
    contract_address: faker.finance.ethereumAddress(),
    created_at: faker.date.past().toString(),
    token: faker.finance.currencyName(),
    updated_at: faker.date.recent().toString(),
} satisfies Project;

export const mockProjectsTransactions = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),// Add unique identifier
    time: faker.date.recent(),
    from: {
        name: faker.person.suffix(),
        address: faker.finance.ethereumAddress(),
        avatar: faker.image.avatar(),
    },
    to: {
        name: faker.person.suffix(),
        address: faker.finance.ethereumAddress(),
        avatar: faker.image.avatar(),
    },
    value: faker.finance.amount({
        symbol: "ETH",
    }),
    token: {
        id: faker.string.uuid(),
        name: faker.finance.currencyName(),
        symbol: faker.finance.currencySymbol(),
        address: faker.finance.ethereumAddress(),
        icon: faker.image.url(),
    },
    tags: [Math.random() > 0.5 ? TransactionTagType.Buy : TransactionTagType.Sell],
} satisfies Transaction));

export const mockProjectDex = {
    categories: [
        {
            id: "1",
            name: "Market Cap (30d)",
            metrics: [
                {
                    id: "1",
                    name: "Total Value Locked",
                    value: faker.finance.amount(),
                    unit: "ETH",
                },
                {
                    id: "2",
                    name: "Daily Active Users",
                    value: faker.number.float(),
                    unit: "Users",
                },
                {
                    id: "3",
                    name: "Transaction Volume",
                    value: faker.finance.amount(),
                    unit: "ETH",
                },
                {
                    id: "4",
                    name: "New Wallets Created",
                    value: faker.number.float(),
                    unit: "Wallets",
                },
                {
                    id: "5",
                    name: "Exchange Volume",
                    value: faker.finance.amount(),
                    unit: "ETH",
                },
                {
                    id: "6",
                    name: "Total Market Cap",
                    value: faker.finance.amount(),
                    unit: "ETH",
                },
            ] satisfies KeyMetric[]
        },
        {
            id: "2",
            name: "User Engagement",
            metrics: [
                {
                    id: "1",
                    name: "Daily Active Users",
                    value: faker.number.int({ min: 0, max: 100 }),
                    unit: "Users",
                },
                {
                    id: "2",
                    name: "Monthly Active Users",
                    value: faker.number.float({ min: 0, max: 100 }),
                    unit: "Users",
                },
                {
                    id: "3",
                    name: "Average Session Duration",
                    value: faker.number.float({ min: 0, max: 100 }),
                    unit: "Minutes",
                },
                {
                    id: "4",
                    name: "Bounce Rate",
                    value: faker.number.float({ min: 0, max: 100 }),
                    unit: "%",
                },
                {
                    id: "5",
                    name: "Session per User",
                    value: faker.number.float({ min: 0, max: 100 }),
                    unit: "Sessions",
                },
                {
                    id: "6",
                    name: "Retention Rate",
                    value: faker.number.float({ min: 0, max: 100 }),
                    unit: "%",
                }
            ] satisfies KeyMetric[]
        },
        {
            id: "3",
            name: "Financial Metrics",
            metrics: [
                {
                    id: "1",
                    name: "Revenue",
                    value: faker.finance.amount(),
                    unit: "USD",
                },
                {
                    id: "2",
                    name: "Profit",
                    value: faker.finance.amount(),
                    unit: "USD",
                },
                {
                    id: "3",
                    name: "Expenses",
                    value: faker.finance.amount(),
                    unit: "USD",
                },
                {
                    id: "4",
                    name: "Net Income",
                    value: faker.finance.amount(),
                    unit: "USD",
                },
            ] satisfies KeyMetric[]
        }
    ] satisfies MetricCategory[]
}

export const mockDexDataResponse = {
    id: faker.number.int(),
    name: faker.company.name(),
    token: faker.finance.currencyName(),
    category: 'dex',
    contract_address: faker.finance.ethereumAddress(),
    num_chains: faker.number.int(),
    core_developers: faker.number.int(),
    code_commits: faker.number.int(),
    total_value_locked: faker.number.float(),
    token_max_supply: faker.number.int(),
    created_at: faker.date.past().toString(),
    updated_at: faker.date.recent().toString(),
    ath: faker.finance.amount(),
    ath_last: faker.finance.amount(),
    atl: faker.finance.amount(),
    atl_last: faker.finance.amount(),
    revenue_30d: faker.finance.amount(),
    revenue_annualized: faker.finance.amount(),
    expenses_30d: faker.finance.amount(),
    earnings_30d: faker.finance.amount(),
    fees_30d: faker.finance.amount(),
    fees_annualized: faker.finance.amount(),
    token_incentives_30d: faker.finance.amount(),
    monthly_active_users: faker.finance.amount(),
    afpu: faker.finance.amount(),
    arpu: faker.finance.amount(),
    token_trading_volume_30d: faker.finance.amount(),
    market_cap_fully_diluted: faker.number.float(),
    market_cap_circulating: faker.number.float(),
    transactions: Array.from({ length: 10 }, () => ({
        version: faker.number.int(),
        sender: faker.finance.ethereumAddress(),
        token_sold: faker.finance.currencyName(),
        token_sold_amount: faker.number.float(),
        token_bought: faker.finance.currencyName(),
        token_bought_amount: faker.number.float(),
    } satisfies SwapTransaction)),
    token_supply: faker.number.float(),
    num_token_holders: faker.number.int(),
    trading_volume: faker.number.float(),
    daily_active_users: faker.number.int(),
    weekly_active_users: faker.number.int(),
    daily_fees: faker.number.float(),
} satisfies DexProjectResponse;

export const mockProfiler = {
    name: faker.person.fullName(),
    address: faker.finance.ethereumAddress(),
    avatar: faker.image.avatar(),
    tag: Math.random() > 0.2 ? ProfilerTagType.Whale : (Math.random() > 0.2 ? ProfilerTagType.Fund : ProfilerTagType.Anonymous),
    portifolio: Array.from({ length: 20 }, () => ({
        id: faker.string.uuid(),
        asset: {
            id: faker.string.uuid(),
            name: faker.finance.currencyName(),
            symbol: faker.finance.currencySymbol(),
            address: faker.finance.ethereumAddress(),
            icon: faker.image.url(),
        } satisfies Token,
        price: faker.finance.amount(),
        holding: faker.finance.amount(),
        value: faker.finance.amount(),
    } satisfies Portifolio)),
} satisfies Profiler;