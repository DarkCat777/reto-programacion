import {useEffect, useState} from "react";
import {Pagination} from "antd";
import PokemonItem from "../../../components/PokemonItem";

function PokemonList() {
    // Data args
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    // Pagination params
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [count, setCount] = useState(0);

    function fetchPokemonList() {
        const url = `http://127.0.0.1:8080/pokemon/api/v1/pokemon-list?limit=${limit}&offset=${offset}`;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setCount(json['count']);
                setData(json['results']);
            })
            .catch(error => console.log(error));
    }

    // Call to API
    useEffect(() => {
        fetchPokemonList()
    }, []);

    // Validate response
    useEffect(() => {
        if (data != null && data.length > 0) {
            setIsLoading(false);
        }
        console.log(data);
    }, [data]);

    // Call to api when change paginator
    useEffect(() => {
        fetchPokemonList()
    }, [offset, limit]);

    function handlePageChange(pageIndex, pageSize) {
        if (pageIndex - 1 <= 0)
            setOffset(0);
        else
            setOffset((pageIndex - 1) * pageSize);
    }

    function handleSizePageChange(currentPageSize, newPageSize) {
        setLimit(newPageSize);
    }

    // Rendered view
    return (
        <>
            <div className="container-md m-auto p-4">
                <div className="h1 pb-4"> Lista de pokemons </div>
                {
                    isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <table className="table table-hover table-bordered ">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sprite</th>
                                <th scope="col">Nombre del Pokemon</th>
                                <th scope="col">Ver detalle</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map(pokemon => (<PokemonItem name={pokemon.name} id={pokemon.id} key={pokemon.id}/>)
                            )
                            }
                            </tbody>
                        </table>
                    )
                }
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={limit}
                    onChange={handlePageChange}
                    onShowSizeChange={handleSizePageChange}
                    total={count}
                    responsive={true}
                    centered
                />
            </div>
        </>
    )
}

export default PokemonList
