import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/campers/operations';
import { changeFilter, resetCampers } from '../../redux/campers/campersSlice';
import FilterForm from '../../components/FilterForm/FilterForm';
import CamperCard from '../../components/CamperCard/CamperCard';
import Loader from '../../components/Loader/Loader';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, total, page, isLoading, error, filters } = useSelector(
    (state) => state.campers
  );
  // true when loading additional pages (Load More), false on first load
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    // Load initial 4 campers if items list is currently empty
    if (items.length === 0) {
      dispatch(getCampers({ page: 1, limit: 4, ...filters }));
    }
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setIsLoadingMore(true);
    dispatch(getCampers({ page: nextPage, limit: 4, ...filters })).finally(() =>
      setIsLoadingMore(false)
    );
  };

  const handleClearFilters = () => {
    dispatch(changeFilter({ location: '', form: '', features: [] }));
    dispatch(resetCampers());
    dispatch(getCampers({ page: 1, limit: 4 }));
  };

  const handleViewAll = () => {
    dispatch(changeFilter({ location: '', form: '', features: [] }));
    dispatch(resetCampers());
    dispatch(getCampers({ page: 1, limit: 4 }));
  };

  const hasMore = items.length > 0 && items.length < total;
  const showEmpty = !isLoading && !error && items.length === 0;

  return (
    <main className={css.catalogContainer}>
      <FilterForm />

      <section className={css.listSection}>
        {items.length > 0 && (
          <div className={css.cardsList}>
            {items.map((camper) => (
              <CamperCard key={camper.id} item={camper} />
            ))}
          </div>
        )}

        {/* Initial page load: full overlay */}
        {isLoading && !isLoadingMore && <Loader overlay />}

        {/* Load More: inline card below existing cards */}
        {isLoadingMore && <Loader />
        }

        {showEmpty && (
          <div className={css.emptyState}>
            {/* Camper SVG illustration */}
            <svg
              className={css.emptyIllustration}
              viewBox="0 0 260 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Mountains */}
              <path d="M20 130 L60 70 L100 130Z" stroke="#DADDE1" strokeWidth="2" fill="#F7F8FA"/>
              <path d="M70 130 L120 55 L170 130Z" stroke="#DADDE1" strokeWidth="2" fill="#F0F1F3"/>
              {/* Tree */}
              <rect x="18" y="108" width="6" height="22" rx="2" fill="#DADDE1"/>
              <ellipse cx="21" cy="102" rx="12" ry="14" fill="#E4E7EC"/>
              {/* Camper body */}
              <rect x="60" y="98" width="130" height="54" rx="8" fill="#E4E7EC" stroke="#C5CAD1" strokeWidth="1.5"/>
              {/* Camper cabin */}
              <rect x="60" y="88" width="52" height="30" rx="6" fill="#D0D5DD" stroke="#C5CAD1" strokeWidth="1.5"/>
              {/* Windows cabin */}
              <rect x="67" y="94" width="16" height="12" rx="3" fill="#F7F8FA" stroke="#C5CAD1" strokeWidth="1"/>
              <rect x="87" y="94" width="16" height="12" rx="3" fill="#F7F8FA" stroke="#C5CAD1" strokeWidth="1"/>
              {/* Window main */}
              <rect x="120" y="105" width="32" height="22" rx="4" fill="#F7F8FA" stroke="#C5CAD1" strokeWidth="1"/>
              <rect x="158" y="105" width="22" height="22" rx="4" fill="#F7F8FA" stroke="#C5CAD1" strokeWidth="1"/>
              {/* Door */}
              <rect x="90" y="108" width="20" height="30" rx="3" fill="#C5CAD1" stroke="#B0B7BF" strokeWidth="1"/>
              {/* Wheels */}
              <circle cx="93" cy="155" r="16" fill="#D0D5DD" stroke="#B0B7BF" strokeWidth="2"/>
              <circle cx="93" cy="155" r="8" fill="#F7F8FA" stroke="#C5CAD1" strokeWidth="1.5"/>
              <circle cx="163" cy="155" r="16" fill="#D0D5DD" stroke="#B0B7BF" strokeWidth="2"/>
              <circle cx="163" cy="155" r="8" fill="#F7F8FA" stroke="#C5CAD1" strokeWidth="1.5"/>
              {/* Ground line */}
              <line x1="10" y1="162" x2="250" y2="162" stroke="#DADDE1" strokeWidth="1.5" strokeLinecap="round"/>
              {/* Search circle */}
              <circle cx="210" cy="112" r="28" fill="#F7F8FA" stroke="#DADDE1" strokeWidth="2"/>
              <circle cx="207" cy="109" r="12" fill="none" stroke="#C5CAD1" strokeWidth="2.5"/>
              <line x1="215" y1="117" x2="224" y2="126" stroke="#C5CAD1" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>

            <h2 className={css.emptyTitle}>No campers found</h2>
            <p className={css.emptyDesc}>
              We couldn&apos;t find any campers that match your filters.
              <br />
              Try adjusting your search or clearing some filters.
            </p>

            <div className={css.emptyActions}>
              <button
                type="button"
                className={css.clearFiltersBtn}
                onClick={handleClearFilters}
              >
                ✕ Clear filters
              </button>
              <button
                type="button"
                className={css.viewAllBtn}
                onClick={handleViewAll}
              >
                View all campers
              </button>
            </div>
          </div>
        )}

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
