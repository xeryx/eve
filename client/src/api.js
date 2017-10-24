export function getModel() {
    return(
        fetch('/datamodel', {
            method: "get",
        })
        .then(response => response.json())
    );
};

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

export function submitAgent(agentInfo) {
    return(
        fetch('/agents', {
            headers: {
                'Content-Type': 'application/json'
              },
            method: "post",
            body: JSON.stringify(agentInfo)
        })
        .then(response => response.json())
    );
};

