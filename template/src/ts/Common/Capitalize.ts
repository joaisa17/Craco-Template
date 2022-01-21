export default function Capitalize(str : string) {
    const words = str.split(" ");

    words.forEach((word, i) => {
        words[i] = word[0].toUpperCase() + word.substring(1);
    });

    return words.join(" ");
}