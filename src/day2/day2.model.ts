export interface rpsInput {
    elv: string,
    me: string,
}

export type rpsInputWithResult = rpsInput & {
    result: string
}
