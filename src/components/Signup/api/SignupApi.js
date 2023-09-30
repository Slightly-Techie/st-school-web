async function handleFetch(url, options = {
    method : 'GET',
    headers : {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}


/* - api fetch call to fetch tech stack responses */
export async function fetchTechStack(){
    const url = 'https://a3e6-154-160-19-217.ngrok-free.app/stacks'
    return handleFetch(url)
}


/* - api fetch route to make payments */
export async function makePayments() {
    const url = 'payments_url '
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }

    return handleFetch(url, options)
}