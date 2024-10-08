import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type CardProps = React.ComponentProps<typeof Card>;
type CustomCardProps = CardProps & {
  cardHeader?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
};

export default function CustomCard({
  className,
  cardHeader,
  cardContent,
  cardFooter,
  ...props
}: CustomCardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>{cardHeader}</CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
}
