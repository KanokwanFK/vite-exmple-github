type TodoListBoxinputType = {
    name: string;
    onChange: (data: string) => void;
    onClickAdd: () => void;
    onClickEdit: () => void;
    index_edit: number| undefined;
};

const TodoListBoxinput = ({
    name,
    onChange,
    onClickAdd,
    onClickEdit,
    index_edit,
}: TodoListBoxinputType) => {
    console.log(index_edit)
    return <div>
        <input
            onChange={(e) => { /* การอ่านและเรียกใช้ฟังก์ชัน ที่ได้รับจาก TodoListBoxinput เพื่อส่งค่ากลับ ถ้าทำการเช็คค่าในตัวลูกเลยจไม่สามารถเช็ทค่าส่งกลับไปหาตัวแม่ได้*/
                console.log(e.target.value);
                onChange(e.target.value);
            }}
            value={name} type="text" placeholder="กรุณากรอก To Do List" />
        {index_edit == undefined ? (<button
            onClick={() => {
                onClickAdd();
            }}
        > เพิ่ม </button>) :
          (  <button
                onClick={() => {
                    onClickEdit();
                }}
            > แก้ไข </button>)
        }

    </div>
}

export default TodoListBoxinput;