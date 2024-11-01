import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@argon/ui-shadcn-components-ui';
import { UserList } from '@argon/users-user-list-feature';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <p>User list</p>
        <UserList />
      </CardContent>
    </Card>
  );
}
