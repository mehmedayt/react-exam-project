/* eslint-disable react/prop-types */
export default function PopUp({isRequired}){

    return(
        <>
        {isRequired && ( 
        <div className="popUp">
            <img src="../public/images/popUp.jpg" alt="red-cross" className="red-cross"/>
            <h3>Sorry!</h3>
            <p>All fields are required!</p>
        </div>)};
        </>
    );
}