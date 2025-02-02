import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
    const res = await fetch('https://zenn.dev/api/articles?username=hebo4096');
    return await res.json();
});
