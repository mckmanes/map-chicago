import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Props = {
  image?: string;
  name?: string;
  onClick: () => void;
};

export function FeatureCard(props: Props) {
  return (
    <Card
      className="bg-white shadow-md rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl cursor-pointer"
      onClick={props.onClick}
    >
      <CardContent className="flex flex-row items-center gap-4 p-4">
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src={props.image} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <Badge variant="secondary">{props.name}</Badge>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Channel Name</h2>
          <Badge variant="secondary" className="text-xs">
            YouTube Channel
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
