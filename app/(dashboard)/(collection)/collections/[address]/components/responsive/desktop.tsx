"use client";

import { Tab, Tabs } from "@nextui-org/react";
import React from "react";

import DetailsArea from "../../components/details-area";
import NFTsArea from "../../components/nfts-area";
import TransactionArea from "../../components/transactions-area";
import SearchEngine from "@/components/dashboard/search";
import { LinearContainer } from "@/components/ui/container";


export default function Desktop() {
    const items = [
        {
            key: "nfts",
            title: "NFTs",
            content: <NFTsArea />
        },
        {
            key: "transactions",
            title: "Transactions",
            content: <TransactionArea />
        }
    ]

    return (<>
        <div className="row-start-2 lg:row-start-2 lg:col-start-3 col-span-1 overflow-y-auto flex flex-col gap-6 h-full">
            <DetailsArea />
        </div>
        <LinearContainer direction="column" space="lg" className="lg:row-start-2 lg:col-start-1 col-span-2 overflow-y-auto h-full">
            <SearchEngine />
            <Tabs
                aria-label="Collection page tabs"
                variant="light"
                classNames={{
                    cursor: "group-data-[selected=true]:bg-foreground-100 group-data-[selected=true]:text-foreground-900 border-none",
                    tabContent: "group-data-[selected=true]:text-foreground-900",
                    panel: "w-full",
                }}
            >
                {
                    items.map((item, index) => (
                        <Tab key={item.key + index} title={item.title}>
                            {item.content}
                        </Tab>
                    ))
                }
            </Tabs>
        </LinearContainer>
    </>
    )
}