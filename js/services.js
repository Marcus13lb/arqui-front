function getServices() {
    return fetch(`${Constants.apiUrl}/servicios`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(e => {
            console.log('Hubo un problema con la petición Fetch:' + e.message);
        });
}