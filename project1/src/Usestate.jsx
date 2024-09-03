import { useState } from 'react';
import './use.css';

const Usestate = () => {
    const [value, setValue] = useState({
        name: "",
        age: "",
        gender: "",
        isMarried: ""
    });

    return (
        <div className="container">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{value.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{value.age}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{value.gender}</td>
                    </tr>
                    <tr>
                        <th>Marital Status</th>
                        <td>{value.isMarried ? "Married" : "Single"}</td>
                    </tr>
                </tbody>
            </table>
            <input 
                type="text"  
                placeholder='Enter the Name'
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
            <input 
                type="number"  
                placeholder='Enter the Age'
                value={value.age}
                onChange={(e) => setValue({ ...value, age: e.target.value })}
            />
            <label htmlFor="male">
                <input 
                    id="male" 
                    type="radio" 
                    checked={value.gender === "Male"} 
                    value="Male"
                    onChange={(e) => setValue({ ...value, gender: e.target.value })}
                />
                Male
            </label>
            <label htmlFor="female">
                <input 
                    id="female" 
                    type="radio" 
                    checked={value.gender === "Female"} 
                    value="Female"
                    onChange={(e) => setValue({ ...value, gender: e.target.value })}
                />
                Female
            </label>
            <label htmlFor="isMarried">
                <input 
                    id="isMarried" 
                    type="checkbox" 
                    checked={value.isMarried} 
                    onChange={(e) => setValue({ ...value, isMarried: e.target.checked })}
                />
                Married
            </label>
        </div>
    );
}

export default Usestate;
 