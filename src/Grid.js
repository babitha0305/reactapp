import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function Grid() {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "300px", gap: "20px" }}>
      
      {/* First Block */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "15px" }}>
          <p>SHREYA</p>
        </div>
        <div>
          <StyledRating
            name="customized-color-1"
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Button variant="contained">Enter</Button>
        </div>
      </div>

      {/* Second Block */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "15px" }}>
          <p>TANMAI</p>
        </div>
        <div>
          <StyledRating
            name="customized-color-2"
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Button variant="contained">Enter</Button>
        </div>
      </div>

      {/* Third Block */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "15px" }}>
          <p>LIKHITHA</p>
        </div>
        <div>
          <StyledRating
            name="customized-color-3"
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Button variant="contained">Enter</Button>
        </div>
      </div>

    </div>
  );
}
