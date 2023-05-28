import React, { useState } from "react";
import MuiCard from "@mui/material/Card";
import {
  Box,
  CardContent,
  CardMedia,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { cardProps, IAbilityProp } from "./Card.types";

export const Card = (props: cardProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <MuiCard sx={{display:'flex'}}>
       {loading && (
        <Box sx={{width:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <CircularProgress />
          </Box>
          )}

      <CardMedia
        sx={{width:'50%', objectFit:'fill'}}
        component="img"
        image={props.image}
        title={props.name}
        loading="lazy"
        onLoad={()=>setLoading(false)}
        onError={()=>setLoading(false)}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{textTransform:'capitalize'}}>
          {props.name}
        </Typography>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Typography variant="body2" color="text.secondary">
            Height : {props.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight : {props.weight}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{display:'flex', flexDiretion:'column'}}>
          Location
          <a href={props.location} target="_blank" rel="noreffer">
            {props.location}
          </a>
        </Typography>
        <Box>
          <Typography variant="h6" component="div">
            Abilities
          </Typography>
          <List dense={false} sx={{ lineHeight: "1px" }}>
            {props.abilities.map((ability: IAbilityProp, i:number) => (
              <ListItem key={i}>
                <ListItemText
                  primary={ability.ability.name}
                  secondary={ability.ability.url}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </MuiCard>
  );
};
