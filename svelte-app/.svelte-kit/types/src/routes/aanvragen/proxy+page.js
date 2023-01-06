// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */

export async function load({ fetch }) {
    const response = await fetch(
        '/api/request'
    )
    const data = await response.json()
    return {
        items: data
    }
}