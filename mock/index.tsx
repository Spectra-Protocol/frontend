import { KeyMetric, MetricCategory, Portifolio, Profiler, ProfilerTagType, Token, Transaction, TransactionTagType } from "@/types";
import { faker } from "@faker-js/faker";


export const mockProject = {
    name: faker.company.name(),
    address: faker.finance.ethereumAddress(),
    floorPrice: faker.finance.amount({
        symbol: "$",
        autoFormat: true,
    }),
    avatar: faker.image.avatar(),
    tvl: faker.finance.amount({
        symbol: "ETH",
    }),
};

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

export const mockProfiler = {
    name: faker.person.fullName(),
    address: faker.finance.ethereumAddress(),
    avatar: faker.image.avatar(),
    tag: Math.random() > 0.2 ? ProfilerTagType.Whale : (Math.random() > 0.2 ? ProfilerTagType.Fund : ProfilerTagType.Anonymous),
    portifolio: Array.from({ length: 2}, () => ({
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