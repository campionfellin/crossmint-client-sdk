import { CrossmintCheckoutEvent } from "./paymentElement";

export interface CrossmintEventError {
    message: string;
    code: string;
}

export interface CrossmintEventErrorPayload {
    error: CrossmintEventError;
}

export const CheckoutPaymentErrorEvents = {
    PAYMENT_PREPARATION_FAILED: "payment:preparation.failed",
    PAYMENT_PROCESS_CANCELED: "payment:process.canceled",
    PAYMENT_PROCESS_REJECTED: "payment:process.rejected",
} as const;
export type CheckoutPaymentErrorEvents = (typeof CheckoutPaymentErrorEvents)[keyof typeof CheckoutPaymentErrorEvents];

export const CheckoutPaymentEvents = {
    PAYMENT_PREPARATION_SUCCEEDED: "payment:preparation.succeeded",
    PAYMENT_PROCESS_STARTED: "payment:process.started",
    PAYMENT_PROCESS_SUCCEEDED: "payment:process.succeeded",
    ...CheckoutPaymentErrorEvents,
} as const;
export type CheckoutPaymentEvents = (typeof CheckoutPaymentEvents)[keyof typeof CheckoutPaymentEvents];

export const CheckoutOrderEvents = {
    ORDER_PROCESS_STARTED: "order:process.started",
    ORDER_PROCESS_FINISHED: "order:process.finished",
} as const;
export type CheckoutOrderEvents = (typeof CheckoutOrderEvents)[keyof typeof CheckoutOrderEvents];

export const CheckoutQuoteEvents = {
    QUOTE_STATUS_CHANGED: "quote:status.changed",
} as const;
export type CheckoutQuoteEvents = (typeof CheckoutQuoteEvents)[keyof typeof CheckoutQuoteEvents];

export const CheckoutRecipientEvents = {
    RECIPIENT_WALLET_CHANGED: "recipient:wallet.changed",
} as const;
export type CheckoutRecipientEvents = (typeof CheckoutRecipientEvents)[keyof typeof CheckoutRecipientEvents];

export const CheckoutTransactionErrorEvents = {
    TRANSACTION_FULFILLMENT_FAILED: "transaction:fulfillment.failed",
} as const;
export type CheckoutTransactionErrorEvents =
    (typeof CheckoutTransactionErrorEvents)[keyof typeof CheckoutTransactionErrorEvents];

export const CheckoutTransactionEvents = {
    TRANSACTION_FULFILLMENT_SUCCEEDED: "transaction:fulfillment.succeeded",
    ...CheckoutTransactionErrorEvents,
} as const;
export type CheckoutTransactionEvents = (typeof CheckoutTransactionEvents)[keyof typeof CheckoutTransactionEvents];

export const CheckoutErrorEvents = {
    ...CheckoutPaymentErrorEvents,
    ...CheckoutTransactionErrorEvents,
} as const;
export type CheckoutErrorEvents = (typeof CheckoutErrorEvents)[keyof typeof CheckoutErrorEvents];

export const CheckoutEvents = {
    ...CheckoutPaymentEvents,
    ...CheckoutOrderEvents,
    ...CheckoutQuoteEvents,
    ...CheckoutRecipientEvents,
    ...CheckoutTransactionEvents,
} as const;
export type CheckoutEvents = (typeof CheckoutEvents)[keyof typeof CheckoutEvents];

export const PaymentElementSDKEvents = {
    PARAMS_UPDATE: "params-update",
} as const;
export type PaymentElementSDKEvents = (typeof PaymentElementSDKEvents)[keyof typeof PaymentElementSDKEvents];

export interface ListenToMintingEventsProps {
    orderIdentifier: string;
}

export type ListenerType<T extends CheckoutEvents = CheckoutEvents> = (event: CrossmintCheckoutEvent<T>) => void;

export const UiEvents = {
    UI_HEIGHT_CHANGED: "ui:height.changed",
} as const;
export type UiEvents = (typeof UiEvents)[keyof typeof UiEvents];

export interface UiEventMap {
    [UiEvents.UI_HEIGHT_CHANGED]: { height: number };
}
