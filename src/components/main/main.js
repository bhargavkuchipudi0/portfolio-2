import './main.css';

function Main() {
    const sayHello = function () {
        var link = "mailto:bhargavkuchipudi0@gmail.com"
            + "?cc=myCCaddress@example.com"
            + "&subject= My Portfolio"
            + "&body= Hello!!"
            ;
        window.open(link, '_blank');
    }
    return (
        <section className="main">
            <div className="container sm-container">
                <section className="main-content">
                    <div className="main-sec">
                        <h1 className="heading-1 fadeup-1">Hello, I am</h1>
                        <h2 className="heading-2 fadeup-2">Bhargav Kuchipudi.</h2>
                        <h3 className="heading-3 fadeup-3">Full Stack Web Developer.</h3>
                        <p className="text-1 fadeup-4">
                            I’m a full stack web developer based in Sunnyvale, CA specializing in designing, developing and maintaining exceptional web sites, applications, and everything in between.
                        </p>
                        <button className="default-btn mg-l-7" onClick={() => { sayHello() }}>Say Hello!</button>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Main;