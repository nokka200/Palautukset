const Course = ({ course }) => {

    const counter = (acc, cur) => {
        console.log('what is happening', acc, cur.exercises)
        return acc + cur.exercises
    };

    const listItems = course.parts.map(part => 
        <li key={part.id}>
            {part.name} {part.exercises}
        </li>
    );

    const total = course.parts.reduce((acc, cur) => counter(acc, cur), 0);

    return (
        <>
            <h1>{course.name}</h1>
            <ul>
                {listItems}
            </ul>
            <h2>total of {total} exercises</h2>
        </>
    )
};


export default Course;