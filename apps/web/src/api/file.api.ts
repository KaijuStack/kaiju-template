import { useQuery, useMutation } from '@tanstack/react-query';
import { GetFilesDto } from '@repo/schemas';

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
  const req = async ({ name, file }: { name: string; file: File }) => {
    const response = await apiService.api.files.$post({
      form: {
        file: new File([file], name, {
          type: file.type,
        }),
      },
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    return response.json();
  };

  return useMutation({
    mutationFn: req,
  });
}
