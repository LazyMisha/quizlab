export default async function getImage(path) {
    const res = await import(`./${path}.png`);
    return res.default;
}
