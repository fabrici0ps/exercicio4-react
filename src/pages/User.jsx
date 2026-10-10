import { useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams()
    return (
        <div>
            <p>Usuário de id: {id}</p>
        </div>
    );
}
 
export default User;