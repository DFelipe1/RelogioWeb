export async function api(url) {
    const response = await fetch(url).then(response => response.json())
    return response
}

