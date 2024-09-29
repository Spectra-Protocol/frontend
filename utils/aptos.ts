import { NETWORK } from "@/config";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";


const aptos = new Aptos(new AptosConfig({ network: NETWORK }));


export function aptosClient() {
  return aptos;
}
