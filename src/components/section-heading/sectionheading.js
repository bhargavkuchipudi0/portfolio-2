import './sectionheading.css';

function SectionHeading({ heading, text }) {
    return (
        <section className="section-heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </section>
    );
}

export default SectionHeading;
