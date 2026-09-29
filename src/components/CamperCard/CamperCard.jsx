import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/favoritesSlice';
import {
  IconStar,
  IconMapPin,
  IconAutomatic,
  IconEngine,
  IconVan,
  IconFullyIntegrated,
  IconAlcove,
} from '../Icons/Icons';
import css from './CamperCard.module.css';

export default function CamperCard({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === item.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item));
  };

  const imageUrl =
    item.gallery?.[0]?.thumb || item.gallery?.[0]?.original || item.gallery?.[0];

  const formattedPrice = `€${Number(item.price).toFixed(2)}`;
  const reviewCount = item.reviews ? item.reviews.length : 0;

  const getFormLabel = (form) => {
    if (form === 'panelTruck') return 'Panel Van';
    if (form === 'fullyIntegrated') return 'Integrated';
    if (form === 'alcove') return 'Alcove';
    if (form === 'semiIntegrated') return 'Semi Integrated';
    return form;
  };

  const getFormIcon = (form) => {
    if (form === 'panelTruck') return <IconVan width={20} height={20} />;
    if (form === 'fullyIntegrated') return <IconFullyIntegrated width={20} height={20} />;
    if (form === 'alcove') return <IconAlcove width={20} height={20} />;
    return null;
  };

  // 3 Key Badges matching Figma Version 1: Engine, Transmission, Camper form
  const badges = [];

  if (item.engine) {
    badges.push({
      key: 'engine',
      label: item.engine,
      icon: <IconEngine />,
    });
  }

  if (item.transmission) {
    badges.push({
      key: 'transmission',
      label: item.transmission,
      icon: <IconAutomatic />,
    });
  }

  if (item.form) {
    badges.push({
      key: 'form',
      label: getFormLabel(item.form),
      icon: getFormIcon(item.form),
    });
  }

  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <img src={imageUrl} alt={item.name} className={css.image} />
      </div>

      <div className={css.content}>
        <div>
          {/* Header Row: Title & Price + Heart */}
          <div className={css.header}>
            <h2 className={css.title}>{item.name}</h2>
            <div className={css.priceWrapper}>
              <span className={css.price}>{formattedPrice}</span>
              <button
                type="button"
                className={css.favButton}
                onClick={handleToggleFavorite}
                aria-label="Add to favorites"
              >
                <svg
                  width="24"
                  height="24"
                  className={isFavorite ? css.heartActive : css.heartDefault}
                >
                  <use href="/icons.svg#icon-heart" />
                </svg>
              </button>
            </div>
          </div>

          {/* Subheader: Rating & Location */}
          <div className={css.subHeader}>
            <div className={css.rating}>
              <IconStar />
              <span className={css.ratingText}>
                {item.rating}({reviewCount} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <IconMapPin />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className={css.description}>{item.description}</p>

          {/* 3 Key Badges */}
          <div className={css.badges}>
            {badges.map((badge) => (
              <span key={badge.key} className={css.badge}>
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Show More Link - Opens in new tab */}
        <a
          href={`/catalog/${item.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.showMoreBtn}
        >
          Show more
        </a>
      </div>
    </article>
  );
}
