function attributes(){
    // myStyle is created like object in camelCased keys
    const myStyle={
        backgroundColor:"red",
        color:"black",
        fontSize:"50px"
    }
    return(
        <h1 className="styling" style={myStyle}>This is attributes</h1>
        //here for assigning class we'll use className bcz class is a reserved keyword in JavaScript
    )
}

export default attributes