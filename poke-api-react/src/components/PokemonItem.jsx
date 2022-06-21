import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function PokemonItem(props) {
    let {id, name} = props;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const [url, setUrl] = useState(`http://127.0.0.1:8080/pokemon/api/v1/pokemon/${id}`)
    const [img, setImg] = useState("https://th.bing.com/th/id/OIP.Hs_QQCVlFVZNTnsWVUQnyAHaHa?pid=ImgDet&rs=1")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setImg(json['sprites']['front_default']))
            .catch(err => console.error(err))
    }, []);

    return <tr>
        <th className="align-middle" scope="row">{id}</th>
        <td className="align-middle"><img src={img} alt={"Sprite de frente de " + name} width="75"/></td>
        <td className="align-middle">{name} </td>
        <td className="align-middle"><Link to={`/poke-detail/${id}`}>Ver detalle</Link></td>
    </tr>
}

export default PokemonItem;
