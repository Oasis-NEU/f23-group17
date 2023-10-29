import React, { useState} from 'react'
import ClassForm from './course_taken_form';

export function CourseTakenButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
            <button onClick={ () => setIsOpen(true)}>
                Add Courses Taken
            </button>

            {isOpen && (
                <div>
                    <div>
                        <ClassForm>
                            
                        </ClassForm>
                        
                    </div>
                    <button onClick={() =>setIsOpen(false)}>
                    Close Tab
                    </button>
                </div>
            )

            }

            
        </div>
    );
}

// export default CourseTakenButton

{/* <form>
                            <label>
                            Course Name: <input type="text" name="Course Name"></input>
                            </label>
                            <input type="submit" value="Add Class"></input>
                        </form> */}