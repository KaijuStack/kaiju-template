import { hcWithType } from '@repo/api/hc';

const apiService = hcWithType('http://localhost:3000/api', {
  init: {
    credentials: 'include',
  },
});

export default apiService;
