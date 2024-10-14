export const data = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    marketcap: Math.floor(Math.random() * 1000),
    tvl: Math.floor(Math.random() * 1000),
    volume: Math.floor(Math.random() * 1000),
}));

export const generateData = (length: number = 30) => Array.from({ length }, (_, i) => ({
    day: i + 1,
    marketcap: Math.floor(Math.random() * 1000),
    tvl: Math.floor(Math.random() * 1000),
    volume: Math.floor(Math.random() * 1000),
}));