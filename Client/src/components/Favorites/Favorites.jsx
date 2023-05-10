import{ link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from "../card/Card"
const Favorites = (props)=>{

    const { myFavorites } = props;
    return (
        <div>
            <a href='/home' ><span>To Home</span></a>
            {myFavorites.map((character) =>{
                return <Card
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites);

// import{ Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Cards from "../cards/Cards"
// const Favorites = (props)=>{

//     const { myFavorites } = props;
//     return (
//         <div>
//             <Link to='/home' ><span>To Home</span></Link>
//             {/* <Cards myFavorites={myFavorites} /> */}
//             <Cards characters={myFavorites} />
//         </div>
//     )
// }

// const mapStateToProps = (state) =>{
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect (mapStateToProps, null)(Favorites);