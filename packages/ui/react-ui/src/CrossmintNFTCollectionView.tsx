import * as React from "react";

import {
    NFTCollectionViewProps,
    assertValidNFTCollectionViewProps,
    getNFTCollectionViewSrc,
} from "@crossmint/client-sdk-base";

import { LIB_VERSION } from "./version";

export function CrossmintNFTCollectionView(props: NFTCollectionViewProps) {
    assertValidNFTCollectionViewProps(props);

    const src = getNFTCollectionViewSrc(props, LIB_VERSION);

    return (
        <iframe
            src={src}
            width="100%"
            height="100%"
            style={{
                flexGrow: "1",
                border: "none",
                margin: "0",
                padding: "0",
            }}
            role="nft-collection-view"
        />
    );
}
