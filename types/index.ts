import { SVGProps } from "react";

// ==============================
// Frontend Types
// ==============================

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// ==============================
// Core Types
// ==============================

// Transaction
export enum TransactionTagType {
  Buy = "Buy",
  Sell = "Sell",
  Transfer = "Transfer",
  Deposit = "Deposit",
  Withdraw = "Withdraw",
  Swap = "Swap",
  Other = "Other",
}
export interface Transaction {
  id: string;
  time: Date;
  from: Profiler;
  to: Profiler;
  value: number | string;
  token: Token;
  tags: TransactionTagType[];
}

// Project
export interface Project {
  category: string;
  code_commits: number;
  contract_address: string;
  core_developers: number;
  created_at: string;
  id: number;
  num_chains: number;
  token: string;
  token_max_supply: number;
  total_value_locked: number;
  updated_at: string;
}

// Profiler
export enum ProfilerTagType {
  Whale = "Whale",
  Fund = "Fund",
  Anonymous = "Anonymous"
}
export type Portifolio = {
  id: string | number;
  asset: Token;
  price: number | string;
  holding: number | string;
  value: number | string;
}
export interface Profiler {
  name?: string;
  address: string;
  avatar?: string;
  tag?: ProfilerTagType
  portifolio?: Portifolio[]
}


// Token
/**
 * Token
 * @param id Token id
 * @param name Token name
 * @param symbol Token symbol
 * @param address Token address
 * @param icon Token icon
 */
export interface Token {
  id: string | number;
  name: string;
  value?: number;
  symbol?: string;
  address: string;
  icon?: string;
}


// Key Metric
export interface MetricCategory {
  id: string | number;
  name: string;
  metrics: KeyMetric[];
}
export interface KeyMetric {
  id: string | number;
  name: string;
  value: number | string;
  unit: string;
}

// NewAccount
export interface NewAccount {
  address: string;
  entity_id?: number;
}

// AccountResponse
export interface AccountResponse {
  id: number;
  address: string;
  entity_id?: number;
  created_at: string;
  updated_at: string;
}

// UpdateAccount
export interface UpdateAccount {
  entity_id?: number;
}

// CreateEntityInfo
export interface CreateEntityInfo {
  name: string;
}

// EntityResponse
export interface EntityResponse {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

// Message
export interface Message {
  message: string;
}

interface Attributes {
  [key: string]: any;
}

// NewProject
export interface NewProject {
  name: string;
  token: string;
  category: string;
  contract_address?: string;
  attributes: Attributes;
}

// UpdateProject
export interface UpdateProject {
  name?: string;
  token?: string;
  category?: string;
  contract_address?: string;
  attributes?: Attributes;
}

// Profile
export interface Profile {
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

// TokenResponse
export interface TokenResponse {
  token: string;
}

// LoginInfo
export interface LoginInfo {
  email: string;
  password: string;
}

// RegisterInfo
export interface RegisterInfo {
  name: string;
  email: string;
  password: string;
}

// SwapTransaction
export interface SwapTransaction {
  version: number;
  sender: string;
  token_sold: string;
  token_sold_amount: number;
  token_bought: string;
  token_bought_amount: number;
}

// BasicProjectResponse
export interface BasicProjectResponse {
  id: number;
  name: string;
  token: string;
  category: string;
  contract_address?: string;
  created_at: string;
  updated_at: string;
}

// DexProjectResponse
export interface DexProjectResponse extends BasicProjectResponse {
  num_chains?: number;
  core_developers?: number;
  code_commits?: number;
  total_value_locked?: number;
  token_max_supply?: number;
  ath?: string;
  ath_last?: string;
  atl?: string;
  atl_last?: string;
  revenue_30d?: string;
  revenue_annualized?: string;
  expenses_30d?: string;
  earnings_30d?: string;
  fees_30d?: string;
  fees_annualized?: string;
  daily_fees?: number;
  token_incentives_30d?: string;
  monthly_active_users?: string;
  afpu?: string;
  arpu?: string;
  token_trading_volume_30d?: string;
  market_cap_fully_diluted?: number;
  market_cap_circulating?: number;
  token_supply?: number;
  num_token_holders?: number;
  trading_volume?: number;
  daily_active_users?: number;
  weekly_active_users?: number;
  transactions: SwapTransaction[];
}

export interface AccountDetailsResponse {
  name?: string;
  category: string;
  transactions: Transaction[];
  coins: Coin[];
}

export interface Transaction {
  version: number;
  timestamp: string;
  sender: string; 
  receiver: string;
  function: string;
  amount: number;
  gas_amount: number;
}

export interface Coin {
  asset_type: string;
  name: string;
  symbol: string;
  amount: number;
}

export interface CoinPriceResponse {
  decimals: number,
  price: number,
}
