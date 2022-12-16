// /** @type {import('../$types').PageLoad} */

// export async function load({ fetch, params }) {
//     console.log(params)

//     const fetchRequest = async (/** @type {any} */ id) => {
//         const res = await fetch(`/api/request`)
//         const data = await res.json()
//         return data
//     }
// }

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