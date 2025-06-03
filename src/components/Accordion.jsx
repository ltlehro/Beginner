import React, {useState} from 'react'
import '../styles/accordion.css'

const Accordion = ({title, content}) => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <section className="accordion-card" key={Math.random()}>
            <div className="header" onClick={()=>setIsOpen(!isOpen)}>
                <div>{title}</div>
                <p className="icon">{isOpen ? '-' : '+'}</p>
            </div>

            <div className="content">
                {isOpen && <p className="card-info">{content}</p>}
            </div>
        </section>
    )
}
export default Accordion
