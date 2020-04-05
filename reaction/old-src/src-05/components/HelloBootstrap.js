import React from "react";

function HelloBootstrap() {
    return <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
            </a>
        </nav>
        <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" role="button">Learn more</a>
            </p>
        </div>
        <div className="card">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>;
}

export default HelloBootstrap;
