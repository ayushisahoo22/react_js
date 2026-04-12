function condition(){
    //we can write the condition,function,object before the return part
    const x=5;
    let y="Apple";
    if(x>10) y="Banana";
    return(
        // fragment - the one top level empty tag
        <>   
            <p>The value is:</p>
            <p>{y}</p>
            {/*we can use ternary operator inside the return statement*/}
            <p>{x>10 ? "Banana":"Apple"}</p>
        </>
    )
}

export default condition