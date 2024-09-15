"use client";

import {
    WalletSortingOptions,
    useWallet,
} from "@aptos-labs/wallet-adapter-react";
import { Modal, useDisclosure, ModalContent, ModalBody, ModalHeader, Tooltip } from "@nextui-org/react";
import React from "react";
import { toast } from "react-toastify";

import { Button } from "@/components";
import dynamic from "next/dynamic";

const DynamicConnectWalletDialog = dynamic(() => import("./ConnectWalletDialog"));

export function WalletSelector(walletSortingOptions: WalletSortingOptions) {
    const { isOpen, onOpenChange, onClose, onOpen } = useDisclosure();
    const { connected, wallet } = useWallet();

    const handleNotify = React.useCallback(() => {
        if (connected) {
            toast.success(`Connected to ${wallet?.name} successfully!`);
        }
    }, [connected, wallet]);

    React.useEffect(() => {
        handleNotify();
    }, [handleNotify]);

    return (
        <>
            <Button fullWidth onClick={onOpen}>
                Connect Wallet
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="lg" hideCloseButton
                className="rounded-[32px] relative"
                backdrop="transparent"
                size="sm"
                classNames={{
                    wrapper: "bg-primary/5 w-fit h-fit left-1/2 top-1/2 !-translate-x-1/2 !-translate-y-1/2 backdrop-blur-sm rounded-[32px] p-6 border-t border-primary/50",
                }}
            >
                <DynamicConnectWalletDialog close={onClose} {...walletSortingOptions} />
            </Modal>

        </>
    );
}





export default WalletSelector;