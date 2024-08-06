/* eslint-disable react/prop-types */
export default function PopUp({isRequired, text}){

    return(
        <>
        {isRequired && ( 
        <div className="popUp">
            <img src="../public/images/popUp.jpg" alt="red-cross" className="red-cross"/>
            <h3>Sorry!</h3>
            <p>{text}</p>
        </div>)};
        </>
    );
}