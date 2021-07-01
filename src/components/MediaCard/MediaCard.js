import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./MediaCard.css";

const MediaCard = ({ image, heading, children }) => (
  <Card className="media-card">
    <CardActionArea>
      <CardMedia image={image} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {heading}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {children}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default MediaCard;
