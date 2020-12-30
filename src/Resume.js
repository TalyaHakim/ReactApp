import React from 'react';

class Resume extends React.Component{
    render(){
        let fullName = 'Talya Hakim'
        let age = 22
        let Addresss = "Prof' Israel Yavin, Petah Tikva"
        let Description = "I'm a passionate FullStack Development student,Combines work in leumi offices on Capital Market Services"

        return <div className='cvBox'><h2>A littel about me :)</h2>
        <p>My name is {fullName}, I'm {age} years old
        <br></br>
        I live in Israel from {Addresss}
        </p>
        <h4>{Description}</h4>
        </div>
    }
}
export default Resume;  