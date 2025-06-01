import React, {useState} from 'react'
import '../styles/testimonials.css'

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "In the middle of every difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            quote: "Life is really simple, but we insist on making it complicated.",
            author: "Confucius"
        },
        {
            quote: "The best way to predict your future is to create it.",
            author: "Abraham Lincoln"
        }
    ]

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length)
    }

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
    }

    return (
        <div className="testimonial-container">
            <span>{testimonials[currentIndex].quote}</span>
            <span>{testimonials[currentIndex].author}</span>

            <button onClick={handleNextClick}>Next</button>
            <button onClick={handlePrevClick}>Prev</button>
        </div>
    )
}
export default Testimonials
