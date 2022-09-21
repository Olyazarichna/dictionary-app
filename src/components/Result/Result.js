
export const Result=(props)=>{
    console.log('props',props);
    // let info = props.data;
    // console.log('info',info);

    return(
        <>
        <div>
            {props ?(
                <p></p>
            ):(<p>Search a word</p>)}

        </div>
        </>
    )
}
export default Result;