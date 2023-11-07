import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import LocalStorage from '@utils/localStorage';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'petstore.swagger.io/v2',
    prepareHeaders: (headers) => {
      const token = LocalStorage.get('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
    },
    paramsSerializer: (params: Record<string, unknown>) => {
      const createQueryString = (data: any, parentKey: string = ''): any => {
        return Object.keys(data)
          .map((key) => {
            const val = data[key];
            const formattedKey = parentKey ? `${parentKey}%5B${key}%5D` : key;

            if (val === undefined) {
              return '';
            } else if (val !== null && typeof val === 'object') {
              return createQueryString(val, formattedKey);
            }

            return `${formattedKey}=${val}`;
          })
          .filter((str) => str !== '')
          .join('&');
      };

      return createQueryString(params);
    },
  }),

  endpoints: () => ({}),
});

export default emptySplitApi;
