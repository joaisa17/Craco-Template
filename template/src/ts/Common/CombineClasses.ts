export default function CombineClasses(a? : string, b? : string) {
    return (
        (a && b && `${a} ${b}`) ||
        a ||
        b
    )
}