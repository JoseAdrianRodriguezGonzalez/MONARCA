const Promo=()=>{
    return(
        <>
            <section className="  container  flex justify-start items-center relative">
                <div className="">
                    <img src="/src/assets/pora.png" className="w-[70vw] h-[65vh]" alt="Entrada" />
                </div>
                <div className="container bg-[#000000]/70  absolute z-10 text-[#FFF] right-[2vw] w-[55vw] md:text-[2.4vw]  text-[4vw]">
                    <span>¿Quieres que tu casa se vea como un palacio?, ¿o te gusta más la arquitectura minimalista?
                    Monarca te ofrece elementos de construcción que enbellecerán tu hogar.</span>
                </div>
            </section>
        </>
    )
}

export default Promo;