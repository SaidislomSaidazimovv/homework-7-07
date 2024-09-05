import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IMG_URL } from "../hooks/useEnv";
import { Link, useNavigate } from "react-router-dom";

export default function MovieCard({ item }) {
  const navigate = useNavigate()
  
  return (
    <Card className="rounded-lg relative" sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${IMG_URL}/${item.poster_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.original_title}
            </Typography>
            <Typography
              className="line-clamp-3"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {item.overview}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate(`/${item.id}`)} variant="outlined" size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
  );
}
