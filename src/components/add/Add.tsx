import { GridColDef } from '@mui/x-data-grid';
import './add.scss';

type Props = {
    slug: string;
    colums: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

};
const Add = (props:Props) => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={()=> props.setOpen(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
            {
                props.colums
                .filter((item) => item.field !== "id" && item.field !== "img")
                .map((colum) => (
                    <div className="item">
                        <label>{colum.headerName}</label>
                        <input type={colum.type} />
                    </div>
                ))
            }
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add
