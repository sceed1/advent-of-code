export interface RpsInput {
    elv: string,
    me: string,
}

export type RpsInputWithResult = RpsInput & {
    result: string
}
