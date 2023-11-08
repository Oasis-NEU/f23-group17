import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function RecommendationsCourseDescButtons() {
  return (
    <Tooltip title="save">
      <IconButton color="blue" size="large">
        <AddCircleOutlineIcon color="blue" fontSize="large" />
      </IconButton>
    </Tooltip>
  );
}
