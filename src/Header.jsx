import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const MAG_BUTTONS = [
  { label: "Significant", value: "significant" },
  { label: "M4.5+", value: "4.5" },
  { label: "M2.5+", value: "2.5" },
  { label: "M1.0+", value: "1.0" },
  { label: "All Earthquakes", value: "all" },
];

const TIME_BUTTONS = [
  { label: "Past Hour", value: "hour" },
  { label: "Past Day", value: "day" },
  { label: "Past 7 Days", value: "week" },
  { label: "Past 30 Days", value: "month" },
];

export const Header = ({ setMag, setTime }) => (
  <div className="header">
    <header sx={{ width: "200%", maxWidth: 500 }}>
      <div className="header-sub">
        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
          IGEO Erdbebenmonitor
        </Typography>
      </div>
      <div className="header-sub">
        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="Magnitude button group"
        >
          {MAG_BUTTONS.map((option) => (
            <Button key={option.value} onClick={() => setMag(option.value)}>
              {option.label}
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="Time button group"
        >
          {TIME_BUTTONS.map((option) => (
            <Button key={option.value} onClick={() => setTime(option.value)}>
              {option.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </header>
  </div>
);
