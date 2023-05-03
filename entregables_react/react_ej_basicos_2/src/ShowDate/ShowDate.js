const ShowDate = () => {
    const getDate = () => {
        const date = new Date();
        return date.toLocaleDateString();
    };

    return ( 
        <div>
            <p>{getDate()}</p>
        </div>
     );
}
 
export default ShowDate;