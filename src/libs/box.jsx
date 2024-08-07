const Box=({text})=>{
    return (
        <div className="w-[30vw] h-[12vh] bg-black rounded-[3vw] flex justify-center items-center m-1">
            <h2 className=" md:text-[2.5vw] text-[4vw]">{text}</h2>
         </div>
    );
}
export default Box;
