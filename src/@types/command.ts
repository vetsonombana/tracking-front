export type Product = {
    _id: string
    mass: number
    key: string
    image: string
    name: string
}

export type Package = {
    _id: string
    state: boolean
    products: Product[],
    estimation: number
}

export type Command = {
    _id: string
    packages: Package[]
    created_at: string
    from: string
    to: string
}