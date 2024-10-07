import { BasicProjectResponse, Collection, DexProjectResponse, KeyMetric, MetricCategory, Portifolio, Profiler, ProfilerTagType, Project, SwapTransaction, Token, TokenEventTransaction, Transaction, TransactionTagType } from "@/types";
import { faker } from "@faker-js/faker";


const generateMockProject = () => ({
    id: faker.number.int(),
    name: faker.company.name(),
    category: ProfilerTagType.Dex,
    contract_address: faker.finance.ethereumAddress(),
    created_at: faker.date.past().toString(),
    token: faker.finance.currencyName(),
    updated_at: faker.date.recent().toString(),
}) satisfies Project;

export const mockProject = generateMockProject();
export const mockProjects: BasicProjectResponse[] = [
    {
        id: 1,
        avatar_url: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=035",
        name: "PancakeSwap",
        token: "CAKE",
        category: ProfilerTagType.Dex,
        contract_address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 2,
        avatar_url: "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=035",
        name: "Uniswap",
        token: "UNI",
        category: ProfilerTagType.Dex,
        contract_address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 3,
        avatar_url: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=035",
        name: "SushiSwap",
        token: "SUSHI",
        category: ProfilerTagType.Dex,
        contract_address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 4,
        avatar_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/19966.png",
        name: "QuickSwap",
        token: "QUICK",
        category: ProfilerTagType.Dex,
        contract_address: "0x6c28aef8977c9b773996d0e8376d2ee379446f2f",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 5,
        avatar_url: "https://bsc.bakeryswap.org/static/media/logo_white.b1858a79.svg",
        name: "BakerySwap",
        token: "BAKE",
        category: ProfilerTagType.Dex,
        contract_address: "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 6,
        avatar_url: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png?v=035",
        name: "Curve Finance",
        token: "CRV",
        category: "DEX",
        contract_address: "0xd533a949740bb3306d119cc777fa900ba034cd52",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 7,
        avatar_url: "https://cryptologos.cc/logos/1inch-1inch-logo.png?v=035",
        name: "1inch",
        token: "1INCH",
        category: ProfilerTagType.Dex,
        contract_address: "0x111111111117dc0aa78b770fa6a738034120c302",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 8,
        avatar_url: "https://cryptologos.cc/logos/balancer-bal-logo.png?v=035",
        name: "Balancer",
        token: "BAL",
        category: ProfilerTagType.Dex,
        contract_address: "0xba100000625a3754423978a60c9317c58a424e3d",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 9,
        avatar_url: "https://cryptologos.cc/logos/serum-srm-logo.png?v=035",
        name: "Serum",
        token: "SRM",
        category: ProfilerTagType.Dex,
        contract_address: "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 10,
        avatar_url: "https://cryptologos.cc/logos/0x-zrx-logo.png?v=035",
        name: "0x Protocol",
        token: "ZRX",
        category: ProfilerTagType.Dex,
        contract_address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 11,
        avatar_url: "https://cryptologos.cc/logos/loopring-lrc-logo.png?v=035",
        name: "Loopring",
        token: "LRC",
        category: ProfilerTagType.Dex,
        contract_address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 12,
        avatar_url: "https://cryptologos.cc/logos/just-jst-logo.png?v=035",
        name: "JustSwap",
        token: "JST",
        category: ProfilerTagType.Dex,
        contract_address: "0x8e3bcc334657560253b83f08331d85267316e08a",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 13,
        avatar_url: "https://cryptologos.cc/logos/kyber-network-knc-logo.png?v=035",
        name: "Kyber Network",
        token: "KNC",
        category: ProfilerTagType.Dex,
        contract_address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 14,
        avatar_url: "https://cryptologos.cc/logos/terra-luna-luna-logo.png?v=035",
        name: "TerraSwap",
        token: "LUNA",
        category: ProfilerTagType.Dex,
        contract_address: "0x0000000000000000000000000000000000000000",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 15,
        avatar_url: "https://cryptologos.cc/logos/venus-xvs-logo.png?v=035",
        name: "Venus",
        token: "XVS",
        category: ProfilerTagType.Dex,
        contract_address: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 16,
        avatar_url: "https://cryptologos.cc/logos/cream-finance-cream-logo.png?v=035",
        name: "Cream Finance",
        token: "CREAM",
        category: ProfilerTagType.Dex,
        contract_address: "0x2ba592f78db6436527729929aaf6c908497cb200",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 17,
        avatar_url: "https://cryptologos.cc/logos/alpha-finance-lab-alpha-logo.png?v=035",
        name: "Alpha Finance",
        token: "ALPHA",
        category: ProfilerTagType.Dex,
        contract_address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 18,
        avatar_url: "https://cryptologos.cc/logos/ellipsis-eps-logo.png?v=035",
        name: "Ellipsis",
        token: "EPS",
        category: ProfilerTagType.Dex,
        contract_address: "0xa7f552078dcc247c2684336020c03648500c6d9f",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 19,
        avatar_url: "https://cryptologos.cc/logos/ankr-ankr-logo.png?v=035",
        name: "Ankr",
        token: "ANKR",
        category: ProfilerTagType.Dex,
        contract_address: "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: 20,
        avatar_url: "https://cryptologos.cc/logos/defichain-dfi-logo.png?v=035",
        name: "DeFiChain",
        token: "DFI",
        category: ProfilerTagType.Dex,
        contract_address: "0x0000000000000000000000000000000000000000",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }

];
export const mockProjectsTransactions = Array.from({ length: 10 }, () => ({
    version: faker.date.recent().getMilliseconds(),
    sender: faker.finance.ethereumAddress(),
    receiver: faker.finance.ethereumAddress(),
    amount: faker.number.float({ min: 0, max: 100 }),
    timestamp: faker.date.recent().toString(),
    function: Math.random() > 0.5 ? "mint" : "transfer",
    gas_amount: faker.number.float({ min: 0, max: 100 })
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
export const mockDexProjects: DexProjectResponse[] =
    mockProjects.map((project) => ({
        ...project,
        token: faker.finance.currencyName(),
        contract_address: project.contract_address,
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
    }) satisfies DexProjectResponse);

export const mockDexDataResponse = {
    id: faker.number.int(),
    name: faker.company.name(),
    token: faker.finance.currencyName(),
    category: ProfilerTagType.Dex,
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
        } satisfies any,
        price: faker.finance.amount(),
        holding: faker.finance.amount(),
        value: faker.finance.amount(),
    } satisfies any)),
} satisfies any;

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
    }) satisfies any),
}) satisfies any;
export const mockTokens = Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, generateMockToken);
export const mockToken = generateMockToken();

export const generateMockCollection = (): Collection => ({
    collection_name: faker.finance.currencyName(),
    collection_id: faker.finance.ethereumAddress(),
    max_supply: faker.number.int(),
    mutable_description: true,
    mutable_uri: true,
    creator_address: faker.finance.ethereumAddress(),
    collection_properties: null,
    table_handle_v1: faker.internet.url(),
    total_minted_v2: faker.number.int(),
    description: faker.lorem.sentence(),
    current_supply: faker.number.int(),
}) satisfies Collection;

export const mockCollections = Array.from({
    length:
        faker.number.int({ min: 1, max: 100 })
}, generateMockCollection);

export const mockCollection = generateMockCollection();

