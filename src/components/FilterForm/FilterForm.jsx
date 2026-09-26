import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter, resetCampers } from '../../redux/campers/campersSlice';
import { getCampers } from '../../redux/campers/operations';
import css from './FilterForm.module.css';

export default function FilterForm() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [formType, setFormType] = useState('');
  const [engine, setEngine] = useState('');
  const [transmission, setTransmission] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryFilters = {
      page: 1,
      limit: 4,
    };

    if (location.trim()) {
      queryFilters.location = location.trim();
    }

    if (formType) {
      queryFilters.form = formType;
    }

    if (engine) {
      queryFilters.engine = engine;
    }

    if (transmission) {
      queryFilters.transmission = transmission;
    }

    dispatch(changeFilter(queryFilters));
    dispatch(getCampers(queryFilters));
  };

  const handleClearFilters = () => {
    setLocation('');
    setFormType('');
    setEngine('');
    setTransmission('');

    const defaultParams = { page: 1, limit: 4 };
    dispatch(resetCampers());
    dispatch(
      changeFilter({ location: '', form: '', engine: '', transmission: '' })
    );
    dispatch(getCampers(defaultParams));
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      {/* Location */}
      <div className={css.locationSection}>
        <label htmlFor="location-input" className={css.label}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <input
            id="location-input"
            type="text"
            className={css.input}
            placeholder="Kyiv"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <h3 className={css.filterHeading}>Filters</h3>

      {/* Camper form */}
      <div className={css.filterGroup}>
        <span className={css.subTitle}>Camper form</span>
        <div className={css.radioList}>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="camperForm"
              value="alcove"
              checked={formType === 'alcove'}
              onChange={() => setFormType('alcove')}
              className={css.radioInput}
            />
            Alcove
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="camperForm"
              value="panelTruck"
              checked={formType === 'panelTruck'}
              onChange={() => setFormType('panelTruck')}
              className={css.radioInput}
            />
            Panel Van
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="camperForm"
              value="fullyIntegrated"
              checked={formType === 'fullyIntegrated'}
              onChange={() => setFormType('fullyIntegrated')}
              className={css.radioInput}
            />
            Integrated
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="camperForm"
              value="semiIntegrated"
              checked={formType === 'semiIntegrated'}
              onChange={() => setFormType('semiIntegrated')}
              className={css.radioInput}
            />
            Semi Integrated
          </label>
        </div>
      </div>

      {/* Engine */}
      <div className={css.filterGroup}>
        <span className={css.subTitle}>Engine</span>
        <div className={css.radioList}>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="engineType"
              value="diesel"
              checked={engine === 'diesel'}
              onChange={() => setEngine('diesel')}
              className={css.radioInput}
            />
            Diesel
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="engineType"
              value="petrol"
              checked={engine === 'petrol'}
              onChange={() => setEngine('petrol')}
              className={css.radioInput}
            />
            Petrol
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="engineType"
              value="hybrid"
              checked={engine === 'hybrid'}
              onChange={() => setEngine('hybrid')}
              className={css.radioInput}
            />
            Hybrid
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="engineType"
              value="electric"
              checked={engine === 'electric'}
              onChange={() => setEngine('electric')}
              className={css.radioInput}
            />
            Electric
          </label>
        </div>
      </div>

      {/* Transmission */}
      <div className={css.filterGroup}>
        <span className={css.subTitle}>Transmission</span>
        <div className={css.radioList}>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="transmissionType"
              value="automatic"
              checked={transmission === 'automatic'}
              onChange={() => setTransmission('automatic')}
              className={css.radioInput}
            />
            Automatic
          </label>
          <label className={css.radioOption}>
            <input
              type="radio"
              name="transmissionType"
              value="manual"
              checked={transmission === 'manual'}
              onChange={() => setTransmission('manual')}
              className={css.radioInput}
            />
            Manual
          </label>
        </div>
      </div>

      <div className={css.buttonsWrapper}>
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
        <button
          type="button"
          className={css.clearBtn}
          onClick={handleClearFilters}
        >
          × Clear filters
        </button>
      </div>
    </form>
  );
}
