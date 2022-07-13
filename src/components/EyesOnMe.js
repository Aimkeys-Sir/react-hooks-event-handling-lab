// Code EyesOnMe Component Here
export default function EyesOnMe(){
    function isEyesOnMe(){
        console.log("Good!")
    }
    function isEyesOffMe(){
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onBlur={isEyesOffMe} onFocus={isEyesOnMe}>Eyes on me</button>
    )
}
