import { Collection, DexProjectResponse, KeyMetric, MetricCategory, Portifolio, Profiler, ProfilerTagType, Project, SwapTransaction, Token, TokenEventTransaction, Transaction, TransactionTagType } from "@/types";
import { faker } from "@faker-js/faker";


const generateMockProject = () => ({
    id: faker.number.int(),
    name: faker.company.name(),
    category: 'dex',
    contract_address: faker.finance.ethereumAddress(),
    created_at: faker.date.past().toString(),
    token: faker.finance.currencyName(),
    updated_at: faker.date.recent().toString(),
}) satisfies Project;

export const mockProject = generateMockProject();

export const mockProjectsTransactions = Array.from({ length: 10 }, () => ({
    version: faker.date.recent().getMilliseconds(),
    sender: faker.finance.ethereumAddress(),
    receiver: faker.finance.ethereumAddress(),
    amount: faker.number.float({min: 0, max: 100}),
    timestamp: faker.date.recent().toString(),
    function: Math.random() > 0.5 ? "mint" : "transfer",
    gas_amount: faker.number.float({min: 0, max: 100})
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
            image: faker.image.url(),
        } satisfies Token,
        price: faker.finance.amount(),
        holding: faker.finance.amount(),
        value: faker.finance.amount(),
    } satisfies Portifolio)),
} satisfies Profiler;

export const generateMockToken = () => ({
    id: faker.string.uuid(),
    name: faker.finance.currencyName(),
    description: faker.lorem.sentence(),
    symbol: faker.finance.currencySymbol(),
    address: faker.finance.ethereumAddress(),
    image: faker.image.urlPicsumPhotos(),
    lastPrice: faker.number.float({ min: 0, max: 100 }),
    traits: {
        rarity: faker.number.float({ min: 0, max: 1 }),
        color: faker.color.hsl(),
        chain: faker.finance.currencyName(),
        hatCount: faker.number.int({ min: 0, max: 100 }),
        glassesCount: faker.number.int({ min: 0, max: 100 }),
    },
    transactions: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () => ({
        version: faker.date.recent(),
        from_address: faker.finance.ethereumAddress(),
        to_address: faker.finance.ethereumAddress(),
        event: Math.random() > 0.5 ? "mint" : "transfer",
        value: faker.number.float({ min: 0, max: 100 }),
        token: {
            address: faker.finance.ethereumAddress(),
            id: faker.string.uuid(),
            name: faker.finance.currencyName(),
        },
    }) satisfies TokenEventTransaction),
}) satisfies Token;
export const mockTokens = Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, generateMockToken);
export const mockToken = generateMockToken();

export const generateMockCollection = () => ({
    name: faker.finance.currencyName(),
    avatar_url: faker.image.avatar(),
    contract_address: faker.finance.ethereumAddress(),
    supply: faker.number.int({ min: 10, max: 10e3 }),
    total_volume: faker.number.float({ min: 10, max: 10e3 }),
    description: faker.lorem.sentence({ min: 50, max: 150 }),
    owner_address: faker.finance.ethereumAddress(),
    tokens: Array.from({ length: faker.number.int({ min: 1, max: 10}) }, generateMockToken),
    chain: faker.finance.currencyName(),
    floor_price: faker.number.float({ min: 0, max: 1000 }),
    created_at: faker.date.past(),
}) satisfies Collection;

export const mockCollections = Array.from({
    length:
        faker.number.int({ min: 1, max: 100 })
}, generateMockCollection);

export const mockCollection = generateMockCollection();

