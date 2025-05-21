
//import { useNavigate } from "react-router";
import styles from "./styles/Homes.module.css"
import photo from "./image/pro.jpg"
import items from "./styles/Icon.module.css"




function Home ()  {
    //const Navigate = useNavigate ();

    return (
        <div className={styles.body}>
           {/* img*/}
           <div className={styles.h1}>
                < img className={styles.photo} src={photo} alt="photo"/>
           </div>

           {/* con1*/}
           <div className={styles.c1}>
            <h1  className={styles.titel}> Top values for you </h1>
            <h5 className="text-[14px] ..."> Try variety of benefits when using our services</h5>
           </div>

            {/* icon*/}
           <div className={styles.mgi}>
                <div className={items.id}>
                    <img src="https://cdn-icons-png.freepik.com/256/15250/15250921.png" alt="air" width="50px" height={100}/>
                    <p className={items.desc}>Ariport</p>
                    <p className={items.desc1}>We provide </p>
                </div>
                <div className={items.id}>
                    <img src="https://cdn-icons-png.freepik.com/256/15250/15250889.png" alt="image" width="50px" height={100}/>
                    <p className={items.desc}>Easy booking</p>
                    <p className={items.desc1}>Quilk and easy</p>
                </div>
                <div className={items.id}>
                    <img src="https://cdn-icons-png.freepik.com/256/15250/15250854.png" alt="guide" width="50px" height={100}/>
                    <p className={items.desc}>Best tour guide</p>
                    <p className={items.desc1}>Our beat tour guide </p>
                </div>
                <div className={items.id}>
                    <img src="https://cdn-icons-png.freepik.com/256/15250/15250786.png" alt="bit" width="50px" height={100} />
                    <p className={items.desc}>Lots of promos</p>
                    <p className={items.desc1}>Promotion</p>
                </div>   
            </div>

           {/* con2*/}
           <div className={styles.c2}>
                Choose your tour
           </div>

           {/* icon2 */}
           <div className={styles.mgi}>
                <div className={items.pola} >
                    <img className={items.pola} src="https://i.pinimg.com/736x/ab/f6/fe/abf6fed1750d4373f8949baf53c19e5e.jpg" alt="alone" width="250px" />
                    <p className={items.container}>Alone</p>
                    <div className={styles.icon}>
                        <p className={items.con}>$100/person </p>
                        <img  src="https://cdn-icons-png.freepik.com/256/12857/12857930.png" alt="alone" width="30px" />
                    </div>
                </div>
                <div className={items.pola} >
                    <img className={items.pola} src="https://i.pinimg.com/736x/25/4d/41/254d41c8de6fa7057c49122e187f0534.jpg" alt="jeep" width="250px" />
                    <p className={items.container}>Jeep ride</p>
                    <div className={styles.icon}>
                        <p className={items.con}>$200/person </p>
                        <img  src="https://cdn-icons-png.freepik.com/256/12857/12857930.png" alt="alone" width="30px" />
                    </div>
                </div>
                <div className={items.pola} >
                    <img className={items.pola} src="https://i.pinimg.com/736x/6b/5d/c5/6b5dc533b3e6cef961fe108d2588a5e1.jpg" alt="sakura" width="250px" />
                    <p className={items.container}>Sakura Fuji</p>
                    <div className={styles.icon}>
                        <p className={items.con}>$250/person </p>
                        <img  src="https://cdn-icons-png.freepik.com/256/12857/12857930.png" alt="alone" width="30px" />
                    </div>
                </div>
                <div className={items.pola} >
                    <img className={items.pola} src="https://i.pinimg.com/736x/63/d8/f1/63d8f1933d56786fccd0ce8667de174d.jpg" alt="Harbin" width="250px" />
                    <p className={items.container}>Harbin</p>
                    <div className={styles.icon}>
                        <p className={items.con}>$150/person </p>
                        <img  src="https://cdn-icons-png.freepik.com/256/12857/12857930.png" alt="alone" width="30px" />
                    </div>
                </div>   
            </div>

                <button  className={styles.button}>
                    See all
                </button>
        </div>
    );
}

export default Home;