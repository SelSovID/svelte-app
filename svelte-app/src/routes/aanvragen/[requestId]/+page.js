/** @type {import('../$types').PageLoad} */

export async function load({ fetch, params }) {
    const response = await fetch(
        `/api/request/${params.requestId}`
    )
    const data = await response.json()
    return {
        items: data
    }
}