import { notifications } from '@mantine/notifications';

const showAlert = (message = 'Something went wrong', title?: string) => {
  notifications.show({
    color: 'red',
    message,
    title,
  });
};

export const handleError = ({ e }: { e: Error }) => {
  showAlert(e.message, 'Error');
};
