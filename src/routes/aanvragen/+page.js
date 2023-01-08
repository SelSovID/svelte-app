/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const response = await fetch(
        '/api/request'
    )
    const data = await response.json()

    if (response.status === 200) {
        // status van 200 betekend dat de data gefeched kan worden
        return {
            items: data
        }
    } else {
        // moet nog iets werkends hebben dat je redirect naar login als je niet bent ingelogd
        // als hij niet iets kan fetchen en dus een status van 401 heeft, dan is hij dus niet ingelogd
        return {
            items: data
        }
    }
}