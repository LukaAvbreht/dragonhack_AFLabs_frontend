import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";


const ExampleToast = ({children}) => {
    const [show, toggleShow] = useState(true);

    return (
        <div>
            {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto">React-Bootstrap</strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </div>
    );
};

function AppContainer() {
    return (
        <ExampleToast>
            We now have Toasts
            <span role="img" aria-label="tada">
                🎉
            </span>
        </ExampleToast>

    );
}

export default AppContainer;