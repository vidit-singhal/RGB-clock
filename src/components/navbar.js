import React from 'react'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-icon" href="/">
                        <img src="https://www.freeiconspng.com/uploads/stopwatch-icon-12.png" alt="" width="24" height="24" />
                    </a>
                    <a className="navbar-brand" href="/">RGB-Clock</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

window.addEventListener('mousemove', function (e) {
    var item = this.document.getElementsByClassName("nav-link")
    let x = (e.x / 6) * 2;
    let y = (e.y / 6) * 2;

    document.getElementsByClassName("navbar-icon")[0].style.background = "rgb(" + x + ", 120, " + y + ")"

    document.getElementsByClassName("navbar-brand")[0].style.color = "rgb(" + x + ", 120, " + y + ")";
    let i = 0;
    for (i = 0; i < item.length; i++) {
        item[i].style.color = "rgb(" + x + ", 120, " + y + ")"
    }
})