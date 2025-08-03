export const QueryStringParams = {
    MODAL: "modal"
} as const;

export type QueryStringParams = Readonly<typeof QueryStringParams[keyof typeof QueryStringParams]>;
