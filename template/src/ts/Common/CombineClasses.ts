export default function CombineClasses(a? : any, b? : any) {
    return (
        (a as string && b as string && `${a} ${b}`) ||
        a as string ||
        b as string
    )
}