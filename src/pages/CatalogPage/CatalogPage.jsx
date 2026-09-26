import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/campers/operations';
import FilterForm from '../../components/FilterForm/FilterForm';
import CamperCard from '../../components/CamperCard/CamperCard';
import Loader from '../../components/Loader/Loader';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, total, page, isLoading, error, filters } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    // Load initial 4 campers if items list is currently empty
    if (items.length === 0) {
      dispatch(getCampers({ page: 1, limit: 4, ...filters }));
    }
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(getCampers({ page: nextPage, limit: 4, ...filters }));
  };

  const hasMore = items.length > 0 && items.length < total;

  return (
    <main className={css.catalogContainer}>
      <FilterForm />

      <section className={css.listSection}>
        {items.length > 0 ? (
          <div className={css.cardsList}>
            {items.map((camper) => (
              <CamperCard key={camper.id} item={camper} />
            ))}
          </div>
        ) : (
          !isLoading && (
            <p className={css.noResults}>
              No campers found matching your filter criteria.
            </p>
          )
        )}

        {isLoading && <Loader />}

        {!isLoading && hasMore && (
          <button
            type="button"
            className={css.loadMoreBtn}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}

        {error && <p style={{ color: 'red' }}>Error loading data: {error}</p>}
      </section>
    </main>
  );
}
