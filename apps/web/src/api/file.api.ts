import { useQuery, useMutation } from '@tanstack/react-query';
import { CreateFileDto, GetFilesDto } from '@repo/schemas';

import { apiService } from 'services';
import queryClient, { QueryKeys } from 'query-client';

export function useGet(fileId?: string | null, options = {}) {
  const req = () =>
    apiService.files.$get({
      params: {
        path: { fileId: fileId || '' },
      },
    });

  return useQuery({
    queryKey: [QueryKeys.Files, { fileId }],
    queryFn: req,
    select: ({ json }) => json,
    enabled: !!fileId,
    ...options,
  });
}

export function useList(params: GetFilesDto) {
  const req = () =>
    apiService.files.$get({
      query: params,
    });

  return useQuery(
    {
      queryKey: [QueryKeys.Files, params],
      queryFn: req,
      select: ({ json }) => json,
    },
    queryClient,
  );
}

export function useCreate() {
  const req = (data: CreateFileDto) =>
    apiService.files.$post({
      json: data,
    });

  return useMutation({
    mutationFn: req,
  });
}
