export function getAgents() {
    return(
        fetch('/agents', {
            method: "get"
        })
        .then(response => response.json())
    );
};


export function deleteAgents() {
    return(
        fetch('/agents', {
            method: "delete"
        })
        .then(response => response.json())
    );
};

