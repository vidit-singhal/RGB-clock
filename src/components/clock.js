import React, { useState } from 'react';


function Clock() {
    var time = new Date().toLocaleTimeString();

    const [ctime, setctime] = useState(time);

    const updateTime = () => {
        var time = new Date().toLocaleTimeString();
        setctime(time);

    }

    setInterval(updateTime, 1000);
    var date = new Date().toLocaleTimeString();

    const [cdate, setcdate] = useState(date);

    const updateDate = () => {
        var date = new Date().toLocaleDateString();
        setcdate(date);

    }

    setInterval(updateDate, 1000);

    return (
        <>
            <div className="container">
                <div className="text-border">
                    <div className="text">
                        <h2><b> {cdate} </b></h2><h2><b> {ctime} </b></h2>
                    </div>
                </div>
            </div>
        </>
    );

}
window.addEventListener('mousemove', function (e) {
    let x = (e.x / 6) * 2;
    let y = (e.y / 6) * 2;
    document.getElementsByClassName("container")[0].style.background = "rgb(" + x + ", 120, " + y + ")"
})


export default Clock;
