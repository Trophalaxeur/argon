import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@argon/shared-shadcn-components-ui';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Character</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Your character</p>
      </CardContent>
    </Card>
  );
}
