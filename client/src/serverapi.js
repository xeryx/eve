export function getDataSchemas() {
    return(
        fetch('/dataschema', {
            method: "get",
        })
        .then(response => response.json())
    );
};

export function getDataSchemaByName(schemaName) {
    return(
        fetch('/dataschema/'+ schemaName, {
            method: "get",
        })
        .then(response => response.json())
    );
};

export function getAllDataElements(schemaName) {
    return(
        fetch('/data/'+ schemaName, {
            method: "get"
        })
        .then(response => response.json())
    );
};

export function getAllDataElementsFromAllTypes() {
    return(
        fetch('/data', {
            method: "get"
        })
        .then(response => response.json())
    );
};

export function deleteAllDataElements(schemaName) {
    return(
        fetch('/data/' + schemaName, {
            
            method: "delete"
        })
        .then(response => response.json())
    );
};



export function submitDataElement(data,schemaName) {
    return(
        fetch('/data/' + schemaName, {
            headers: {
                'Content-Type': 'application/json'
              },
            method: "post",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        
    );
};

