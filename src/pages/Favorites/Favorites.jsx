import { useDispatch, useSelector } from "react-redux"
import { FavoritesContainer } from "./Favorites.styled"
import { selectFavorites } from "../../redux/selectors"
import { CardList } from "components/CardList/CardList"
import { useEffect } from "react"
import { fetchFavorites } from "../../redux/favorites/operations"

const Favorites = ({ authUser }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      if (authUser && authUser.uid) {
        const userId = authUser.uid;
        console.log('userId before dispatch:', userId);
        try {
          dispatch(fetchFavorites(userId));
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      } else {
        console.log('Користувач не увійшов в систему або authUser є undefined');
      }
    };

    fetchUserFavorites();
  }, [dispatch, authUser]);

  console.log('Улюблені в компоненті:', favorites);


return (
    <FavoritesContainer>
       <CardList teachers = {favorites} authUser={authUser}/>
    </FavoritesContainer>
)
}

export default Favorites 


