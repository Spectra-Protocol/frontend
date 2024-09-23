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