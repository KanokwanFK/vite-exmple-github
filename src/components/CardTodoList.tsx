type CardTodoListType = {
    title: string;
    onDelete: () => void;
    onEdit: () => void;
};

const CardTodoList =({title ,onDelete,onEdit}:CardTodoListType) => {
    return <div
        style={{
            background: "white",
            padding:10,
            marginBottom: 5,
        }}
    >
        <div
           style={{
            color:"black",
        }} 
        > 
        {title}
        </div>
        <button 
        onClick={() =>{
            onEdit();
        }}
        >
             แก้ไข </button>
        <button 
        onClick={() => {
            onDelete();
        }}
        > ลบ</button>
    </div>
}

export default CardTodoList;