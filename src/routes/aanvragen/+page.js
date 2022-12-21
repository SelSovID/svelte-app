/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const response = await fetch(
        '/api/request'
    )
    const data = await response.json()
    return {
        items: data
    }
}