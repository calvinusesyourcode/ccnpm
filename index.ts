export type a = block & {
    href: string
    text: string
    type: "a"
}

export type block = {
    classes: string[]
    children?: (copy | image | video | button | div | a)[]
    page?: number
    type: string
}

export type button = block & {
    alt?: string
    function?: "link" | "javascript"
    href?: string
    subtitle?: string
    title: string
    type: "button"
}

export type child = copy | image | video | button | div | plan | a

export type copy = block & {
    tag?: "h1" | "h2" | "h3" | "p" | "span"
    text: string
    type: "copy"
}

export type div = block & {
    type: "div"
}

export type image = block & {
    alt: string
    type: "image"
    url: string
}

export type plan = {
    color?: string
    description: string
    discount?: string
    font: string
    link: string
    pkg: string
    price: string
    subtitle: string
    title: string
    type: "plan"
    unit: string
    url: string
    features: string[]
}

export type scene = {
    backgroundURL: string
    blocks: (child)[]
    classes?: string[]
    imageURLs?: string[]
    id: string
    pages?: number
    subtitle?: string
    title?: string
    toggle?: button | div
}

export type subtitles = block & {
    type: "subtitles"
    words: word[]
}

export type video = block & {
    autoPlay: boolean
    controls: boolean
    id: string
    loop: boolean
    muted: boolean
    playsInline: boolean
    type: "video"
    url: string
    subtitles?: subtitles
}

export type word = {
    end: number
    start: number
    word: string
}