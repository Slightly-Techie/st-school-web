const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export async function handleFetch(url, options = {
    method : "GET",
    headers : {
        "Content-Type": "application/json"
    },
    mode : "cors"
}) {
    const response = await fetch(url, options);
    if (! response.ok) {
        throw new Error(`err ${
            response ?. statusText
        } `);
    }

    return response.json();
}

/* - api fetch call to fetch tech stack responses */
export async function fetchTechStack() {
    const url = `${apiUrl}/stacks`;
    return handleFetch(url);
}

/* - api fetch route to make payments */
export async function createUser(user) {
    const url = `${apiUrl}/users`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(user)
    };

    return handleFetch(url, options);
}
