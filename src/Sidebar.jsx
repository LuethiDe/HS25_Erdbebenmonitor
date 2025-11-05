import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const Sidebar = ({ button }) => (
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
    </aside>
  </div>
);
