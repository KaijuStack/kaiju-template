import { hcWithType } from '@repo/api/hc';
import type { Client } from '@repo/api/hc';

const apiService: Client = hcWithType('http://localhost:3000', {
  init: {
    credentials: 'include',
  },
});

export default apiService;
