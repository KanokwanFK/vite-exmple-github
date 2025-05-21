import { useRef, useState } from 'react'
import './App.css'
import TodoListBoxinput from './components/TodoListBoxinput.tsx';
import CardTodoList from './components/CardTodoList.tsx';
import Counter from './Counter.tsx';
type counterRefType = {
  increment: () => void;
  decrement: () => void;
}

function App() {
  const [list, setList] = useState<string[]>([
    "ล้างจาน",
    "ซักผ้า",
    "อ่านหนังสือ",
  ]);

  const [index_edit, setIndexEdit] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string>("");


  const onChange = (data: string) => {
    setName(data);
  };

  const devRef = useRef<HTMLDivElement>(null);
  const devRef2 = useRef<HTMLDivElement>(null);
  const Count = useRef<counterRefType>(null);

  
  return (
    <>
      <div 
        ref={devRef}
        style={{
          height: "100px",
          overflow: "auto",
          background:"green",
          width:"200px",
        }}
      >
        {Array.from({length:100},(_,i) =>(
          <div>{i}</div>
        )) }
      </div>
      <div 
        ref={devRef2}
        style={{
          height: "100px",
          overflow: "auto",
        //  background:backgroundColor || "red",
          width:"200px",
        }}
      >
        {Array.from({length:100},(_,i) =>(
          <div>{i}</div>
        )) }
      </div>

      <button 
      onClick={() =>{
        devRef.current?.scrollTo({
          behavior: "smooth",
          top: 0,
        });
        devRef2.current?.scrollTo({
          behavior: "smooth",
          top: 0,
        }); 
      }}
      >
        button
      </button>
      <Counter ref={Count}/>

      <button
      onClick={() =>{
        Count.current?.increment(); //.current เป็นรูปแบบในการเรียกใช้งานสำหรับ type ของตัวมันเอง
      } }
      >
       increment เพิ่ม
      </button>
      <button
      onClick={() =>{
        Count.current?.decrement();
      } }
      >
       decrement ลด
      </button>

      <TodoListBoxinput
        name={name}
        onChange={(data) => {
          setName(data);
        }}

        /* เพิ่มตัว*/
        onClickAdd={() => {
          // ...list การกระจายค่า array ข้างในให้มันอยู่ในค่าเดียวกัน
          // เพ่ิ่มฟังก์ชันตรวจสอบว่าชื่อไม่ว่าง และยังไม่มีใน list โดยใช้ fillter array
          if (name !== ""  && !list.includes(name)) {
            setList([...list, name]);
            setName(""); //การเพิ่มแบบไม่ลบค่า
          } else if (list.includes(name)) {
            alert("รายการนี้มีอยู่แล้ว");
          }
        }}

        onClickEdit={() => {
          console.log("on clik edit")
          if (index_edit != undefined) {
            const new_list = list;
            new_list[index_edit] = name;
            setList([...new_list]);
            setIndexEdit(undefined);
          }


        }}

        index_edit={index_edit}
      />
      <div> TO DO LIST</div>
      {list.map((item, index,) => {
        return (
          <CardTodoList
            title={item}

            onDelete={() => {
              const new_list = list
              new_list.splice(index, 1);
              setList([...new_list]);
            }}

            onEdit={() => {
              console.log("edit", index)
              setName(item);
              setIndexEdit(index);
            }}
          />
        )
      })}

    </>
  );
}

export default App
