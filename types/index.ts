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
export interface Project extends BasicProjectResponse {
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
  description?: string;
  value?: number;
  symbol?: string;
  address: string;
  lastPrice?: number;
  image?: string;
  traits?: any;
  transactions?: TokenEventTransaction[];
}
/**
 * Token Event Transaction
 */
export interface TokenEventTransaction {
  event: string;
  version: Date | number;
  token: Token;
  from_address: string;
  to_address: string;
  value: number;
}

/**
 * Collection
 */
export interface Collection {
  name: string;
  description: string;
  avatar_url?: string;
  contract_address: string;
  owner_address: string;
  supply?: number;
  floor_price?: number;
  total_volume?: number;
  tokens?: Token[];
  created_at?: Date | number;
  chain: string;
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
  value: any;
  unit: string;
}


// ==============================
// ========= SDK Types ==========
// ==============================

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
  avatar_url?: string;
  name: string;
  token: string;
  category: string;
  contract_address?: string;
  created_at: string;
  updated_at: string;
}

// DexProjectResponse
export interface DexProjectResponse extends BasicProjectResponse {
  avatar_url?: string;
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
