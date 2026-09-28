import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getCamperDetails } from '../../redux/campers/operations';
import Loader from '../../components/Loader/Loader';
import styles from './CamperDetailsPage.module.css';

/* ── Inline SVG icons matching Figma UI Kit ────── */
function StarIcon({ filled = true }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1.33333L10.06 5.50667L14.6667 6.18L11.3333 9.42667L12.12 14L8 11.8333L3.88 14L4.66667 9.42667L1.33333 6.18L5.94 5.50667L8 1.33333Z"
        fill={filled ? '#FFC531' : '#E4E7EC'}
        stroke={filled ? '#FFC531' : '#D0D5DD'}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.56209 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.56209 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
        stroke="#101828"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.6667C10.6667 12 13.3333 9.74543 13.3333 6.66667C13.3333 3.72115 10.9455 1.33334 8 1.33334C5.05448 1.33334 2.66667 3.72115 2.66667 6.66667C2.66667 9.74543 5.33333 12 8 14.6667Z"
        stroke="#101828"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.campers.currentCamper);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    if (id) {
      setActiveImageIdx(0);
      dispatch(getCamperDetails(id));
    }
  }, [dispatch, id]);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success('Booking successfully submitted!');
    e.target.reset();
  };

  if (isLoading) {
    return (
      <main className={styles.container}>
        <Loader />
      </main>
    );
  }

  if (error || !camper) {
    return (
      <main className={styles.container}>
        <div className={styles.errorContainer}>
          <p>{error || 'Camper details could not be found.'}</p>
          <Link to="/catalog" className={styles.backLink}>
            Back to Catalog
          </Link>
        </div>
      </main>
    );
  }

  const {
    name = '',
    rating = 0,
    location = '',
    price = 0,
    description = '',
    transmission = '',
    engine = '',
    form = '',
    length = '',
    width = '',
    height = '',
    tank = '',
    consumption = '',
    gallery = [],
    reviews = [],
    AC,
    kitchen,
    radio,
  } = camper;

  const getImgSrc = (img) => {
    if (!img) return '';
    if (typeof img === 'string') return img;
    return img.original || img.thumb || '';
  };

  const formatFormLabel = (val) => {
    if (!val) return '-';
    if (val === 'panelTruck') return 'Panel van';
    if (val === 'fullyIntegrated') return 'Fully integrated';
    if (val === 'alcove') return 'Alcove';
    if (val === 'semiIntegrated') return 'Semi-integrated';
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  const formatDimension = (val) => {
    if (!val) return '-';
    return String(val).replace(/^(\d+(?:\.\d+)?)\s*([a-zA-Z/]+)$/, '$1 $2');
  };

  const capitalize = (val) => (val ? val.charAt(0).toUpperCase() + val.slice(1) : '');

  const displayedImage = getImgSrc(gallery[activeImageIdx] || gallery[0]);

  /* Only show badges that are truthy in data – matching Figma badge order */
  const badges = [
    transmission && capitalize(transmission),
    AC && 'AC',
    engine && capitalize(engine),
    kitchen && 'Kitchen',
    radio && 'Radio',
    form && formatFormLabel(form),
  ].filter(Boolean);

  return (
    <div className={styles.container}>
      {/* ── TOP SECTION ─────────────────────────── */}
      <div className={styles.topSection}>

        {/* LEFT: Gallery */}
        <div className={styles.galleryColumn}>
          <img
            className={styles.mainImage}
            src={displayedImage}
            alt={name}
          />
          <div className={styles.thumbnails}>
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`${styles.thumbWrapper} ${activeImageIdx === i ? styles.activeThumb : ''}`}
                onClick={() => setActiveImageIdx(i)}
                role="button"
                aria-label={`Show image ${i + 1}`}
              >
                <img
                  src={img.thumb || img.original || getImgSrc(img)}
                  alt={`${name} ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Info */}
        <div className={styles.infoColumn}>
          {/* Top info card: name, rating, price, description */}
          <div className={styles.infoCard}>
            <h2>{name}</h2>

            <div className={styles.ratingLocation}>
              {/* Rating */}
              <div className={styles.ratingItem}>
                <StarIcon filled />
                <span className={styles.ratingUnderline}>
                  {rating}&nbsp;({reviews.length} Reviews)
                </span>
              </div>
              {/* Location */}
              <div className={styles.locationItem}>
                <MapPinIcon />
                <span>{location}</span>
              </div>
            </div>

            <p className={styles.price}>€{Number(price).toFixed(2)}</p>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Vehicle Details Card */}
          <div className={styles.vehicleDetailsCard}>
            <h3>Vehicle details</h3>

            <div className={styles.badges}>
              {badges.map((label) => (
                <span key={label} className={styles.badge}>{label}</span>
              ))}
            </div>

            <div className={styles.specsTable}>
              <div><span>Form</span><span>{formatFormLabel(form)}</span></div>
              <div><span>Length</span><span>{formatDimension(length)}</span></div>
              <div><span>Width</span><span>{formatDimension(width)}</span></div>
              <div><span>Height</span><span>{formatDimension(height)}</span></div>
              <div><span>Tank</span><span>{formatDimension(tank)}</span></div>
              <div><span>Consumption</span><span>{formatDimension(consumption)}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION ──────────────────────── */}
      <div className={styles.bottomSection}>

        {/* LEFT: Reviews */}
        <div className={styles.reviewsColumn}>
          <h3>Reviews</h3>
          {reviews.map((rev, i) => {
            const ratingNum = Number(rev.reviewer_rating) || 0;
            return (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>
                    {rev.reviewer_name ? rev.reviewer_name[0].toUpperCase() : 'U'}
                  </div>
                  <div className={styles.reviewerMeta}>
                    <span className={styles.reviewerName}>{rev.reviewer_name}</span>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <StarIcon key={s} filled={s <= ratingNum} />
                      ))}
                    </div>
                  </div>
                </div>
                <p>{rev.comment}</p>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Booking */}
        <div className={styles.bookingColumn}>
          <div className={styles.bookingCard}>
            <div>
              <h3>Book your campervan now</h3>
              <p>Stay connected! We are always ready to help you.</p>
            </div>
            <form onSubmit={handleBooking} className={styles.bookingForm}>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <button type="submit" className={styles.sendBtn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
