import { Metadata } from "next";

export default function makeMetadata(pageTitle: string): Metadata {
    return {
        title: `${pageTitle} - Haus Sonnenschein`,
        description: "Kindertagespflege in Sankt Augustin U3"
    }
}