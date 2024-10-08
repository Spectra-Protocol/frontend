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
// export interface Transaction {
//   id: string;
//   time: Date;
//   from: Profiler;
//   to: Profiler;
//   value: number | string;
//   token: Token;
//   tags: TransactionTagType[];
// }

// Project
export interface Project extends BasicProjectResponse {
}

// Profiler
export enum ProfilerTagType {
  Whale = "Whale",
  Fund = "Fund",
  Anonymous = "Anonymous",
  Collection = "Collection",
  NFT = "NFT",
  Dex = "Dex",
}
export type Portifolio = {
  id: string | number;
  asset: Token;
  price: number | string;
  holding: number | string;
  value: number | string;
}
export interface Profiler extends AccountDetailsResponse {
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
  collection_id: string;
  cdn_asset_uris: {
    cdn_image_uri: string;
  };
  token_name: string;
  token_data_id: string;
  token_uri: string;
  decimals: number;
  token_properties: Record<string, unknown>;
  last_transaction_version: number;
  last_transaction_timestamp: Date;
  description?: string;
}
export interface TokenActivity {
  transaction_version: number;
  transaction_timestamp: Date;
  from_address: string;
  to_address: string;
  entry_function_id_str: string;
  token_amount: number;
  current_token_data?: Token;
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
 * @param collection_name Collection name
 * @param collection_id Collection id
 * @param max_supply Collection max supply
 * @param mutable_description Collection mutable description
 * @param mutable_uri Collection mutable uri
 * @param table_handle_v1 Collection table handle v1
 * @param total_minted_v2 Collection total minted v2
 * @param description Collection description
 * @param current_supply Collection current supply
 * @param creator_address Collection creator address
 * @param collection_properties Collection properties
 */
export interface Collection {
  collection_name: string;
  collection_id: string;
  max_supply: number;
  mutable_description: boolean;
  mutable_uri: boolean;
  table_handle_v1: string;
  total_minted_v2: number | null;
  description: string;
  current_supply: number;
  creator_address: string;
  collection_properties?: any;
  uri?: string;
  cdn_asset_uris?: {
    cdn_image_uri?: string;
  }
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

/**
 * AccountDetailsResponse
 * @param name Account name
 * @param category Account category
 * @param transactions Account transactions
 * @param coins Account coins
 */
export interface AccountDetailsResponse {
  name?: string;
  category: string;
  transactions: Transaction[];
  coins: Coin[];
}

/**
 * Transaction
 * @param version Transaction version
 * @param timestamp Transaction timestamp
 * @param sender Transaction sender
 * @param receiver Transaction receiver
 * @param function Transaction function
 * @param amount Transaction amount
 * @param gas_amount Transaction gas amount
 */
export interface Transaction {
  version: number;
  timestamp: string;
  sender: string;
  receiver: string;
  function: string;
  amount: number;
  gas_amount: number;
}

/**
 * Coin
 * @param asset_type Coin asset type
 * @param name Coin name
 * @param symbol Coin symbol
 * @param amount Coin amount
 */
export interface Coin {
  asset_type: string;
  name: string;
  symbol: string;
  amount: number;
}
