const Header = ({text}) => <h1>{text}</h1>

const Part = ({name, exercises}) => <li>{name} {exercises}</li>

const Content = ({course}) => {
    const {parts} = course
    return (
        <div>
            <ul>
                {parts.map((part) => (
                    <Part key={part.id} {...part}/>
                ))}
            </ul>
        </div>
    )
}

const Total = ({course}) => {
    const total = course.parts.reduce((s, p) => ({exercises: s.exercises + p.exercises}))
    return <p>Total = {total.exercises}</p>
}

export const Course = ({courses}) => {
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <Header text={course.name} />
                    <Content course={course}/> 
                    <Total course={course} />
                </div>               
            ))}
        </div>
    )
}