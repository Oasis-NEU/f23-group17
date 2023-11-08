import { IconButton, Tooltip } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

export default function ProfileCourseDescButtons({
  handleDelete,
  handleMove,
  toolTipNote,
}) {
  return (
    <div>
      <Tooltip title="remove">
        <IconButton onClick={handleDelete}>
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={"move to " + toolTipNote}>
        <IconButton onClick={handleMove}>
          <DriveFileMoveIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
