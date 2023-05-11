import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
export default function AppTable({
  columns,
  data,
  primary,
  onRemove,
  onEdit,
  onCreate,
}) {
  return (
    <TableContainer component={Paper}>
      <Box
        display="flex"
        sx={{
          padding: "10px 30px",
        }}
        justifyContent="flex-end"
      >
        <Button onClick={onCreate}>Create</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field} align="center" width={column.width}>
                {column.label}
              </TableCell>
            ))}
            {(onRemove || onEdit) && (
              <TableCell align="center">Action</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row[primary]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={column.field} align={column.align ?? "center"}>
                  {row[column.field]}
                </TableCell>
              ))}
              {(onRemove || onEdit) && (
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    onClick={() => onEdit(row[primary])}
                  >
                    <CreateIcon />
                  </IconButton>
                  <IconButton
                    color="danger"
                    aria-label="add an alarm"
                    onClick={() => onRemove(row[primary])}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

AppTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  primary: PropTypes.string,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  onCreate: PropTypes.func,
};
