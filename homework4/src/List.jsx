import {useState, useEffect} from "react"


function List(){
    const [posts, setPost] = useState([])
    const [results, setResults] = useState([])

    useEffect( () => {
        const getFetch = async () => {
            try {
                let result = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!result.ok) {
                    throw new Error(`HTTP error! status: ${result.status}`);
                 }
                    let json = await result.json()
            
                     console.log(json);
                     setResults(json)
                    console.log(results);
           } catch (err) {
                console.log(err);
           }
    }
    getFetch()
    },[])

    const resultTitleArray = results.map((results) => )
    return(
        <div>
          <h3>Grocery List</h3>
          <ul>

          </ul>



       
        </div>
    )
}





export default List