export type plan = {
    title: string
    type: "plan"
    subtitle: string
    description: string
    price: string
    discount?: string
    unit: string
    pkg: string
    font: string
    color?: string
    url: string
    link: string
    features: string[]
}

export type block = {
    classes: string[]
    page?: number
    children?: (copy | image | video | button | div | a)[]
    type: string
}

export type div = block & {
    type: "div"
}

export type copy = block & {
    text: string
    tag?: "h1" | "h2" | "h3" | "p" | "span"
    type: "copy"
}
export type a = block & {
    text: string
    href: string
    type: "a"
}

export type button = block & {
    title: string
    alt?: string
    subtitle?: string
    href?: string
    function?: "link" | "javascript"
    type: "button"
}

export type image = block & {
    url: string
    alt: string
    type: "image"
}

export type word = {
    word: string
    start: number
    end: number
}

export type subtitles = block & {
    type: "subtitles"
    words: word[]
}

export type video = block & {
    url: string
    id: string
    controls: boolean
    autoPlay: boolean
    loop: boolean
    muted: boolean
    playsInline: boolean
    type: "video"
    subtitles?: subtitles
}

export type child = copy | image | video | button | div | plan | a

export type scene = {
    id: string
    backgroundURL: string
    imageURLs?: string[]
    title?: string
    pages?: number
    subtitle?: string
    classes?: string[]
    blocks: (child)[]
    toggle?: button | div
}
