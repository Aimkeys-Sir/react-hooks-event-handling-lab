// Code Keypad Component Here
export default function Keypad(){
    function printItOut(event){
        console.log(`Entering password...`)
    }
return (
    <form>
        <label htmlFor="inputP">Enter Password</label>
        <input id="inputP" onChange={printItOut} type={"password"}/>
    </form>
)
}
