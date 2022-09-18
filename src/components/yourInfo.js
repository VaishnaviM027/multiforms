import React from 'react'

class YourInfo extends React.Component{
    back=(e)=>{
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {firstName,lastName,btCourse,cgpa,pgCourse,country}=this.props

        return(
            <>
                <h2>This is the info you have entered</h2>
                <div className='info' style={{padding:"3rem",
                fontWeight:"bolder",
                lineHeight:"4rem",
                fontSize:"40px"}}>
                    FirstName:{firstName} <br />
                    LastName:{lastName} <br />
                    B.Tech:{btCourse}<br />
                    CGPA:{cgpa}<br />
                    P.G course:{pgCourse}<br />
                    Country:{country}<br />
                </div>
                <button className="btn waves-effect waves-light blue" type="submit" name="action"
          onClick={this.back}>
            <i className="material-icons right">Prev</i>
          </button>
            </>
        )
    }


}
export default YourInfo