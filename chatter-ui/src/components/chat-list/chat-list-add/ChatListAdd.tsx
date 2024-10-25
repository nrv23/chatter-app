import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Switch,
  TextField,
  Typography,
  Button,
  Stack
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
interface ChatListAddProps {
  open: boolean;
  handleClose: () => void;
}

const ChatListAdd = ({ open, handleClose }: ChatListAddProps) => {
  const [isPrivate, setIsPrivate] = useState(false); // marca si un chat es privado o no
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4
        }}
      >
        <Stack>
          <Typography variant="h6" component="h2">
            Add Chat
          </Typography>

          <FormGroup>
            <FormControlLabel
              style={{ width: 0 }}
              control={
                <Switch
                  defaultChecked={isPrivate}
                  value={isPrivate}
                  onChange={event => setIsPrivate(event.target.checked)}
                />
              }
              label="Private"
            />
          </FormGroup>
          {isPrivate
            ? <Paper
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
              >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Users" />
                <IconButton sx={{ p: "10px" }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            : <TextField
                label="Name"
                error={!!error}
                helperText={error}
                onChange={event => setName(event.target.value)}
              />}
          <Button variant="outlined">Save</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ChatListAdd;
