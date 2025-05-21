import style from "./styles/About.module.css"

function About () {
    return (
        <div className={style.body}>
             {/* <img className={style.back} src="https://i.pinimg.com/736x/ca/ad/39/caad39e7c4d53a0e209eb8b4d8e6922e.jpg" alt="body"/> */}

            {/* ตัวละคร */}
             {/* <div className={style.cen1}>
                <h1 className="text-[24px] ...">ตัวละคร</h1>
             </div> */}

             <div className={style.ic}>
                <div>
                    <img className={style.img} src="https://i.pinimg.com/736x/db/39/eb/db39ebda1ff66fd5229150acc504ec5c.jpg" alt="naja"/>
                </div>
                <div>
                <img className={style.img} src="https://i.pinimg.com/736x/d2/81/b7/d281b75b433f5d91c95a1cb98f8e8a1e.jpg" alt="orwping"/>
                </div>
                <div>
                <img className={style.img} src="https://i.pinimg.com/736x/04/76/33/047633a1698f93f946a5dba79725aab6.jpg" alt="daddy"/>
                </div>
             </div>
        </div>
    )
}
    
 
export default About;