import { Network } from "@aptos-labs/ts-sdk";

// APP CONSTANTS
export const APP_NAME = 'Spectra';
export const APP_VERSION = '1.0.0';

// API CONSTANTS
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// OPENSEA CONSTANTS
export const OPENSEA_API_URL = process.env.NEXT_PUBLIC_OPENSEA_API_URL as string;
export const OPENSEA_API_KEY = process.env.NEXT_PUBLIC_OPENSEA_API_KEY as string;

// APTOS CONSTANTS
export const NETWORK = process.env.NEXT_PUBLIC_NETWORK as Network;

// UTILS CONSTANTS
export const USING_MOCK = process.env.NEXT_PUBLIC_USING_MOCK === 'true';