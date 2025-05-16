import { useQuery, useMutation } from '@tanstack/react-query';
import { CreateFileDto, GetFilesDto } from '@repo/schemas';

import apiService from 'services/api.service';
import queryClient, { QueryKeys } from 'query-client';

export function useGet(fileId?: string | null, options = {}) {
  const req = async () => {
    const res = await apiService.api.files[':id'].$get({
      param: {
        id: fileId || '',
      },
    });

    return res.json();
  };

  return useQuery({
    queryKey: [QueryKeys.Files, { fileId }],
    queryFn: req,
    enabled: !!fileId,
    ...options,
  });
}

export function useList(params: GetFilesDto) {
  const req = async () => {
    const res = await apiService.api.files.$get({
      query: {
        page: params.page.toString(),
        limit: params.limit.toString(),
      },
    });

    return res.json();
  };

  return useQuery(
    {
      queryKey: [QueryKeys.Files, params],
      queryFn: req,
    },
    queryClient,
  );
}

export function useCreate() {
  const req = (data: CreateFileDto) =>
    apiService.api.files.$post({
      json: data,
    });

  return useMutation({
    mutationFn: req,
  });
}
