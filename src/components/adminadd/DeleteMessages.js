import React from 'react';
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/Constants";
import Button from "react-bootstrap/Button";

function DeleteMessege(props) {
    const history = useHistory();


    function messageDelete() {
        confirmAlert({
            message: 'Are you sure to delete this message!!.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteThis(),
                },
                {
                    label: "no",
                },
            ],
        });
    }


  async function deleteThis() {
    
    
    const url = BASE_URL + "contacts/" + props.id;
    const options = { headers, method: DELETE};
    console.log('prpsurl',url);

    await fetch(url, options);
    history.push("/adminadd/MessageList");
}

return (
    <Button variant="danger" onClick={messageDelete}>
        Delete
    </Button>
);
}

export default DeleteMessege;