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

//Function that retrieves the contents of the response json
export function getRequestResponseContent(requestId) {
    return(
        fetch('/requests/' + requestId.request + '.json', {
            method: "get",
        })
        .then(response => response.json())
    );
};

export function getAllTestRuns() {
    return(
        fetch('/loaddb/getAllTestRuns', {
            method: "get",
        })
        .then(response => response.json())
        .then(requestId => getRequestResponseContent(requestId))
        .then(responseJson => responseJson.data)
    );
};

export function getSystemUnderTestResources(runId) {
    return(
        fetch('/loaddb/getSystemUnderTestResources/' + runId, {
            method: "get",
        })
        .then(response => response.json())
        .then(requestId => getRequestResponseContent(requestId))
        .then(responseJson => responseJson.data)
    );
};

export function getPageResults(runId) {
    return(
        fetch('/loaddb/getPageResults/' + runId, {
            method: "get",
        })
        .then(response => response.json())
        .then(requestId => getRequestResponseContent(requestId))
        .then(responseJson => responseJson.data)
    );
};

/*
export function getAllTestRuns() {

    return (
        getAllTestRunsResponseId()
        .then(requestId => getRequestResponseContent(requestId))
        .then(responseJson => responseJson.data)
    );

};

*/