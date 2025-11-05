import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

export const Sidebar = ({ button, size, setSize }) => (
  <div className="aside">
    <aside>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6">Details</Typography>
          {button.properties ? (
            <Typography variant="h6">Ort: {button.properties.place}</Typography>
          ) : (
            ""
          )}{" "}
          {button.properties ? <p>Magnitude: {button.properties.mag}</p> : ""}{" "}
          {button.properties ? (
            <p>Zeit: {new Date(button.properties.time).toLocaleString()}</p>
          ) : (
            ""
          )}{" "}
          {button.geometry ? (
            <p>
              Lat: {button.geometry.coordinates[1]},<br /> Lon:{" "}
              {button.geometry.coordinates[0]}
            </p>
          ) : (
            ""
          )}
        </CardContent>
      </Card>
      <Box sx={{ width: 200, p: 2 }}>
        <Slider
          value={size}
          step={0.5}
          marks
          min={1}
          max={3}
          onChange={(e, newSize) => setSize(newSize)}
        />
      </Box>
    </aside>
  </div>
);
