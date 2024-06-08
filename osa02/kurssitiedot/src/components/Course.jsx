const Course = ({ course }) => {
    return (
        <>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(part =>
                    <li key={part.id}>
                        {part.name} {part.exercises}
                    </li>
                )}
            </ul>
            <h2>total of {course.parts.reduce((acc, cur) => {
                //console.log('what is happening', acc, cur.exercises)
                return acc + cur.exercises;
            }, 0)} exercises</h2>
        </>
    )
};


export default Course;