async function theFetch(url: string){
    const response = await fetch(url);
    const post = await response.json();
    return post;
}

export default theFetch;