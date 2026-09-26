import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const fetchCampers = async (params = {}) => {
  const { page = 1, limit = 4, location, form, ...filters } = params;

  const queryParams = {
    page,
    limit,
  };

  if (location && typeof location === 'string' && location.trim() !== '') {
    queryParams.location = location.trim();
  }

  if (form && typeof form === 'string' && form.trim() !== '') {
    queryParams.form = form.trim();
  }

  Object.keys(filters).forEach((key) => {
    const val = filters[key];
    if (val !== undefined && val !== null && val !== '' && val !== false) {
      queryParams[key] = val;
    }
  });

  const response = await instance.get('/campers', { params: queryParams });
  return response.data;
};

export const fetchCamperById = async (id) => {
  const response = await instance.get(`/campers/${id}`);
  return response.data;
};
