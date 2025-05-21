type CardType ={
    name: string;
    age: number;
    nickname: string;
};

const Card = ({name,age,nickname} : CardType) =>{
    return (
       <div
       style={{
        background :"white",
        color: "black"
       }}
       >
       ชื่อ : {name}  , ชื่อเล่น : {nickname} {age !== undefined ? "อายุ :" + age : ""}
       </div>
    )
}

export default Card;