import React from "react";
import ReactDOM from "react-dom/client";

function Ejemplo() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            soy un componente de ejemplo!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ejemplo;

if (document.getElementById("ejemplo")) {
    const Index = ReactDOM.createRoot(document.getElementById("ejemplo"));

    Index.render(
        <React.StrictMode>
            <Ejemplo />
        </React.StrictMode>
    );
}
