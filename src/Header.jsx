import Typography from "@mui/material/Typography";
export const Header = () => (
  <div className="header">
    <header sx={{ width: "200%", maxWidth: 500 }}>
      <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
        IGEO Erdbebenmonitor
      </Typography>
    </header>
  </div>
);
