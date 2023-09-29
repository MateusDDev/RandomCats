import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Dispatch, ReduxState } from './types';
import { fetchAPI } from './redux/actions';

function App() {
  const allData = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  const defaultCat =
    'https://content-assets.betrybe.com/prod/eb34a38d-a37f-43ca-9def-1575752cf6b2-cat-img-thunk.gif';

  return (
    <main className="App">
      <h1>Show me a CAT!!</h1>
      <section>
        <div className="gallery-container">
          {allData.isLoading && <div>Loading...</div>}
          {allData.useDefaultImg && <img src={defaultCat} alt="default fox" />}
          {!allData.isLoading && !allData.useDefaultImg && (
            <img src={allData.imgURL} alt="random cat" />
          )}
        </div>
        <button
          onClick={() => {
            dispatch(fetchAPI());
          }}
          type="button"
        >
          Find a cat!
        </button>
      </section>
    </main>
  )
}

export default App
